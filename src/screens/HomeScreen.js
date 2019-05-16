import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Dimensions,
    ImageBackground
} from 'react-native';
import { connect } from 'react-redux';
import { Button, Image } from 'react-native-elements';
import {
    cleanProducts,
    removeProduct,
    registerProduct
} from '../actions/ProductsActions';
import { bindActionCreators } from 'redux';
import { ProductList, FAB, ActionButton, Container } from '../components';
import {
    LIGHT_GRAY,
    LIGHT_GREEN,
    LIGHT_BLUE,
    LIGHT_RED,
    WHITE,
    GREEN
} from '../styles/Colors';

import styles from '../styles';

import firebase from 'react-native-firebase';
import { Product } from '../models';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.refUser = firebase
            .firestore()
            .collection('users')
            .doc(props.navigation.getParam('uid', ''));
    }

    render() {
        return (
            <Container noPadding>
                <ProductList
                    data={this.props.products.current}
                    iconType="evil-icons"
                    iconName="close"
                    itemSelected={(item, index) =>
                        this.props.removeProduct(index)
                    }
                    emptyText="Nada para comprar"
                    contentContainerStyle={{ paddingStart: 16, paddingEnd: 16 }}
                />
                {this.props.products.current.length > 0 && (
                    <View style={styles.horizontalLine} />
                )}
                <View style={localStyles.footer}>
                    {this.props.products.current.length > 0 &&
                        this.renderInfo()}
                    <ActionButton
                        title="ADICIONAR PRODUTO"
                        onPress={() =>
                            this.props.navigation.navigate('Products')
                        }
                    />
                </View>
            </Container>
        );
    }

    renderInfo = () => {
        return (
            <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{ fontSize: 16}}>
                    Total de produtos: {this.props.products.current.length}
                </Text>
                <Text style={localStyles.totalPrice}>
                    {'R$' + this.totalPrice()}
                </Text>
            </View>
        );
    };

    totalPrice = () =>
        this.props.products.current
            .map(prod => prod.price)
            .reduce((a, b) => a + b, 0);

    componentDidMount() {
        this.unsubscribe = this.refUser.onSnapshot(querySnapshot => {
            console.log('new: ' + JSON.stringify(querySnapshot.data()));
            if (querySnapshot.data().products) {
                querySnapshot.data().products.forEach(prod => {
                    this.props.registerProduct(new Product(prod, 5));
                });
            }
            /*querySnapshot.forEach(doc => {
                console.log(JSON.stringify(doc.data()));
                this.props.registerProduct(
                    new Product(doc.data().name, doc.data().price)
                );
            });*/
        });
        /*let count = 0
        setInterval(() => {
            this.refUser.update({
                products:firebase.firestore.FieldValue.arrayUnion(`coxinha ${++count}`)
            })
        }, 5000)*/
        //this.unsubscribe = this.refUser.
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
}

const localStyles = StyleSheet.create({
    footer: { padding: 16 },
    totalPrice: {
        fontSize: 24
    }
});

const mapStateToProps = state => {
    const { products } = state;
    return { products };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators(
        { cleanProducts, removeProduct, registerProduct },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);

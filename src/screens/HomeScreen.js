import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import {
    cleanProducts,
    removeProduct,
    registerProduct
} from '../actions/ProductsActions';
import { bindActionCreators } from 'redux';
import { ProductList, FAB } from '../components';
import {
    LIGHT_GRAY,
    LIGHT_GREEN,
    LIGHT_BLUE,
    LIGHT_RED,
    WHITE
} from '../styles/Colors';

import firebase from 'react-native-firebase';
import { Product } from '../models';

class HomeScreen extends Component {
    constructor() {
        super();
        this.ref = firebase.firestore().collection('products');
    }

    render() {
        return (
            <View style={styles.container}>
                {this.props.products.current.length > 0 && (
                    <Text style={{ fontSize: 16, marginBottom: 8 }}>
                        Você precisa comprar{' '}
                        {this.props.products.current.length}{' '}
                        {this.props.products.current.length != 1
                            ? 'produtos'
                            : 'produto'}
                    </Text>
                )}
                <ProductList
                    card
                    data={this.props.products.current}
                    iconType="entypo"
                    iconName="trash"
                    itemSelected={(item, index) =>
                        this.props.removeProduct(index)
                    }
                    emptyText="Nada para comprar"
                />
                <Button
                    title="ADICIONAR PRODUTO"
                    onPress={() => this.props.navigation.navigate('Products')}
                    buttonStyle={{
                        borderRadius: 50,
                        height: 50,
                        backgroundColor: LIGHT_RED
                    }}
                    containerStyle={{ marginTop: 16 }}
                    raised
                />
            </View>
        );
    }

    componentDidMount() {
        this.unsubscribe = this.ref.onSnapshot(querySnapshot => {
            querySnapshot.forEach(doc => {
                this.props.registerProduct(
                    new Product(doc.data().name, doc.data().price)
                );
            });
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: LIGHT_GRAY,
        padding: 16
    },
    item: {
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    btnTitle: {
        fontWeight: 'bold',
        margin: 16,
        textAlign: 'center'
    }
});

const mapStateToProps = state => {
    const { products } = state;
    return { products };
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ cleanProducts, removeProduct, registerProduct }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);

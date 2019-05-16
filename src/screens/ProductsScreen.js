import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Icon } from 'react-native-elements';
import { addProduct, registerProduct } from '../actions/ProductsActions';
import {
    ProductList,
    FAB,
    InputDialog,
    ActionButton,
    Container
} from '../components';
import { Product } from '../models';
import { LIGHT_GRAY } from '../styles/Colors';
import styles from '../styles';

import firebase from 'react-native-firebase';

class ProductsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dialogVisible: false,
            prodName: '',
            prodPrice: ''
        };
        this.refUser = firebase
            .firestore()
            .collection('users')
            .doc(props.navigation.getParam('uid', ''));
    }
    render() {
        return (
            <Container>
                <ProductList
                    data={this.props.products.possible}
                    itemSelected={(item, index) => this.props.addProduct(index)}
                    iconType="entypo"
                    iconName="plus"
                />
                <ActionButton
                    title="Cadastrar produto"
                    onPress={() => this.setState({ dialogVisible: true })}
                />
                <InputDialog
                    visible={this.state.dialogVisible}
                    title="Novo produto"
                    prodName={this.state.prodName}
                    prodPrice={this.state.prodPrice}
                    onChangeText={(name, price) =>
                        this.setState({ prodName: name, prodPrice: price })
                    }
                    negativeText="Cancelar"
                    negativePress={() => {
                        this._resetState();
                    }}
                    positiveText="Cadastrar"
                    positivePress={() => {
                        if (this.state.prodName.length > 0 && this.state.prodPrice > 0) {
                            this.addProduct();
                        }
                        this._resetState();
                    }}
                />
            </Container>
        );
    }

    _resetState = () => {
        this.setState({
            dialogVisible: false,
            prodName: '',
            prodPrice: ''
        });
    };

    addProduct = () => {
        this.refUser.update({
            products: firebase.firestore.FieldValue.arrayUnion(
                new Product(this.state.prodName, Number(this.state.prodPrice))
            )
        });
    };
}

const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: LIGHT_GRAY,
        justifyContent: 'center',
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
    bindActionCreators({ addProduct, registerProduct }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProductsScreen);

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
import { ProductList, FAB, InputDialog } from '../components';
import { Product } from '../models';
import { LIGHT_GRAY } from '../styles/Colors';

class ProductsScreen extends Component {
    state = {
        dialogVisible: false,
        newProduct: ''
    };
    render() {
        return (
            <View style={styles.container}>
                <ProductList
                    card
                    data={this.props.products.possible}
                    itemSelected={(item, index) => this.props.addProduct(index)}
                    iconType='entypo'
                    iconName='plus'
                />
                <FAB
                    type="entypo"
                    name="plus"
                    onPress={() => this.setState({ dialogVisible: true })}
                />
                <InputDialog
                    visible={this.state.dialogVisible}
                    title="Novo produto"
                    value={this.state.newProduct}
                    onChangeText={text => this.setState({ newProduct: text })}
                    negativeText="Cancelar"
                    negativePress={() => {
                        this.setState({ newProduct: '', dialogVisible: false });
                    }}
                    positiveText="Salvar"
                    positivePress={() => {
                        this.props.registerProduct(
                            new Product(this.state.newProduct)
                        );
                        this.setState({ newProduct: '', dialogVisible: false });
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: LIGHT_GRAY,
        justifyContent: 'center',
        padding:16
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

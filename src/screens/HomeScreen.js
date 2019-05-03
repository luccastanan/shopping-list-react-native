import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { Icon } from 'react-native-elements';
import { cleanProducts, removeProduct } from '../actions/ProductsActions';
import { bindActionCreators } from 'redux';
import { ProductList, FAB } from '../components';

class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Nós temos {this.props.products.current.length}</Text>
                <ProductList
                    data={this.props.products.current}
                    itemSelected={(item, index) =>
                        this.props.removeProduct(index)
                    }
                />
                <FAB
                    type="font-awesome"
                    name="list"
                    onPress={() => this.props.navigation.navigate('Products')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
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
    bindActionCreators({ cleanProducts, removeProduct }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);

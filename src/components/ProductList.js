import React,{ Component } from "react";
import { View, FlatList, StyleSheet, Text, TouchableOpacity } from "react-native";

class ProductList extends Component{
    render(){
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.props.data}
                    renderItem={({ item, index }) => (
                        <View style={styles.item}>
                            <TouchableOpacity
                                onPress={() => this.props.itemSelected(item, index)}>
                                <Text style={styles.btnTitle}>{item.name}</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    style={{ flex: 1, }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
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

export default ProductList;
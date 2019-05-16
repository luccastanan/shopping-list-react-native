import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import { GREEN, LIGHT_GRAY, WHITE, LIGHT_GREEN, LIGHT_RED } from '../styles/Colors';
import styles from "../styles";

class ProductList extends Component {
    render() {
        return (
            <View style={localStyles.container}>
                <View style={localStyles.card}>
                    <FlatList
                        data={this.props.data}
                        renderItem={({ item, index }) => (
                            <View>
                                <View style={localStyles.item}>
                                    <Text style={localStyles.title}>
                                        {item.name}
                                    </Text>
                                    <Text style={localStyles.price}>
                                        {'R$' + item.price}
                                    </Text>
                                    <TouchableOpacity
                                        onPress={() =>
                                            this.props.itemSelected(item, index)
                                        }
                                        style={{ padding: 16 }}>
                                        <Icon
                                            type={this.props.iconType}
                                            name={this.props.iconName}
                                            size={24}
                                            color={GREEN}
                                        />
                                    </TouchableOpacity>
                                </View>
                                {index + 1 < this.props.data.length && (
                                    <View style={styles.horizontalLine} />
                                )}
                            </View>
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        style={[this.props.style ? this.props.style : {}]}
                        contentContainerStyle={
                            this.props.contentContainerStyle ? this.props.contentContainerStyle : {}
                        }
                    />
                </View>
                {this.props.data.length == 0 && (
                    <View
                        style={{
                            position: 'absolute',
                            alignSelf: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                            {this.props.emptyText
                                ? this.props.emptyText
                                : 'Sem produtos'}
                        </Text>
                    </View>
                )}
            </View>
        );
    }
}

const localStyles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    },
    item: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        margin: 16,
        textAlign: 'center',
        flex: 1,
        fontSize:18
    },
    price: {
        fontWeight:'bold',
        textAlign: 'center',
        borderRadius:15,
        color:LIGHT_RED,
        padding:2
    },
    card: {
        //borderRadius: 15,
        //borderWidth: 2,
        //borderColor: LIGHT_GRAY,
    }
});

export default ProductList;

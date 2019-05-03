import React, { Component } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';
import { GREEN } from '../styles/Colors';

class ProductList extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={this.props.card ? styles.card : ''}>
                    <FlatList
                        data={this.props.data}
                        renderItem={({ item, index }) => (
                            <View>
                                <View style={styles.item}>
                                    <Text style={styles.btnTitle}>
                                        {item.name}
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
                        style={[this.props.style ? this.props.style : '']}
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

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flex: 1
    },
    item: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnTitle: {
        fontWeight: 'bold',
        margin: 16,
        textAlign: 'center',
        flex: 1
    },
    card: {
        borderRadius: 15,
        elevation: 5,
        backgroundColor: '#fff'
    },
    horizontalLine: {
        borderBottomColor: '#e0e0e0',
        borderBottomWidth: 1
    }
});

export default ProductList;

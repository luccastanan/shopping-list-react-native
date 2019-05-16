import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Dialog from 'react-native-dialog';
import { LIGHT_GREEN, GREEN, LIGHT_RED, WHITE } from '../styles/Colors';

class InputDialog extends Component {
    render() {
        return (
            <View>
                <Dialog.Container visible={this.props.visible} headerStyle={{marginTop:4, marginStart:4}} contentStyle={{borderRadius:15}} footerStyle={{flexWrap:'wrap-reverse', justifyContent:'space-around'}}>
                    <Dialog.Title>{this.props.title}</Dialog.Title>  
                    {this.props.description && (
                        <Dialog.Description>
                            {this.props.description}
                        </Dialog.Description>
                    )}
                    <Dialog.Input
                        value={this.props.prodName}
                        onChangeText={name => this.props.onChangeText(name, this.props.prodPrice)}
                        style={{
                            borderBottomColor: '#e0e0e0',
                            borderBottomWidth: 1
                        }}
                        placeholder='Nome do produto'
                    />
                    <Dialog.Input
                        value={this.props.prodPrice}
                        onChangeText={price => this.props.onChangeText(this.props.prodName, price)}
                        style={{
                            borderBottomColor: '#e0e0e0',
                            borderBottomWidth: 1
                        }}
                        keyboardType='numeric'
                        placeholder='Preço do produto'
                    />
                    {this.props.negativeText && (
                        <Dialog.Button
                            label={this.props.negativeText}
                            onPress={this.props.negativePress}
                            style={[localStyles.dialogButton, localStyles.dialogNegativeButton]}
                        />
                    )}
                    <Dialog.Button
                        label={this.props.positiveText}
                        onPress={this.props.positivePress}
                        style={[localStyles.dialogButton, localStyles.dialogPositiveButton]}
                    />
                </Dialog.Container>
            </View>
        );
    }
}

const localStyles = StyleSheet.create({
    dialogButton: {
        borderRadius: 30,
        color: WHITE
    },
    dialogPositiveButton: {
        backgroundColor: GREEN
    },
    dialogNegativeButton: {
        backgroundColor: LIGHT_RED
    }
});

export default InputDialog;

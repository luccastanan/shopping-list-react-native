import React, { Component } from 'react';
import { View } from 'react-native';
import Dialog from 'react-native-dialog';

class InputDialog extends Component {
    render() {
        return (
            <View>
                <Dialog.Container visible={this.props.visible}>
                    <Dialog.Title>{this.props.title}</Dialog.Title>
                    {this.props.description && (
                        <Dialog.Description>
                            {this.props.description}
                        </Dialog.Description>
                    )}
                    <Dialog.Input value={this.props.value} onChangeText={this.props.onChangeText} style={{borderBottomColor:"#e0e0e0", borderBottomWidth:1}}/>
                    {this.props.negativeText &&  (
                        <Dialog.Button
                            label={this.props.negativeText}
                            onPress={this.props.negativePress}
                        />
                    )}
                    <Dialog.Button
                        label={this.props.positiveText}
                        onPress={this.props.positivePress}
                    />
                </Dialog.Container>
            </View>
        );
    }
}

export default InputDialog;

import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { ActivityIndicator } from 'react-native';
import { WHITE, LIGHT_RED, LIGHT_BLUE } from '../styles/Colors';

class ActionButton extends Component {
    constructor(props) {
        super(props);
        this.colors = [LIGHT_RED, WHITE];
        if (props.reverse) this.colors = this.colors.reverse();
    }
    render() {
        return (
            <Button
                title={this.props.title.toUpperCase()}
                onPress={() => {
                    if (!this.props.loading) this.props.onPress();
                }}
                buttonStyle={{
                    borderRadius: 50,
                    height: 50,
                    backgroundColor: this.props.backgroundColor
                        ? this.props.backgroundColor
                        : this.colors[0]
                }}
                titleStyle={{
                    color: this.props.textColor
                        ? this.props.textColor
                        : this.colors[1]
                }}
                containerStyle={{ marginTop: 16 }}
                icon={this.props.icon ? this.props.icon : null}
                loading={this.props.loading}
                loadingProps={{ color: this.colors[1] }}
            />
        );
    }
}
export default ActionButton;

import React, { Component } from "react";
import { View } from "react-native";
import { Icon } from 'react-native-elements';
import { LIGHT_RED, GREEN } from "../styles/Colors";

class FAB extends Component{
    render(){
        return (
            <Icon
                type={this.props.type}
                name={this.props.name}
                size={26}
                color={GREEN}
                reverse
                containerStyle={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    elevation:10
                }}
                onPress={() => this.props.onPress()}
            />
        )
    }
}

export default FAB;
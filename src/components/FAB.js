import React, { Component } from "react";
import { View } from "react-native";
import { Icon } from 'react-native-elements';

class FAB extends Component{
    render(){
        return (
            <Icon
                type={this.props.type}
                name={this.props.name}
                size={26}
                color="#009ed8"
                reverse
                containerStyle={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16
                }}
                onPress={() => this.props.onPress()}
            />
        )
    }
}

export default FAB;
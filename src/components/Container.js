import React, { Component } from 'react';
import { View, ImageBackground, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import { LIGHT_RED, GREEN } from '../styles/Colors';
import styles from '../styles';

class Container extends Component {
    render() {
        return (
            /*<ImageBackground
                source={require('../assets/images/background.jpg')}
                style={{
                    flex: 1,
                    resizeMode: 'cover'
                }}>
                <View style={[styles.container, {backgroundColor:'rgba(255,255,255,0.5)'}]}>{this.props.children}</View>
            </ImageBackground>*/
            <View
                style={[
                    styles.container,
                    this.props.style ? this.props.style : {},
                    this.props.noPadding
                        ? {}
                        : {
                              padding: 16
                          }
                ]}>
                <StatusBar
                    backgroundColor="rgba(0,0,0,0.5)"
                    barStyle="light-content"
                    translucent
                    style={{ paddingTop: 10 }}
                />
                {this.props.children}
            </View>
        );
    }
}

export default Container;

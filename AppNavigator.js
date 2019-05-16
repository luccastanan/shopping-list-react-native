import {
    createStackNavigator,
    createAppContainer,
    createSwitchNavigator
} from 'react-navigation';
import { ProductsScreen, HomeScreen, LoginScreen } from './src/screens';
import {
    WHITE,
    LIGHT_RED,
    LIGHT_BLUE,
    LIGHT_GRAY,
    DARK_GRAY
} from './src/styles/Colors';

const loginNavigator = createStackNavigator({
    Login: {
        screen: LoginScreen,
        navigationOptions: {
            header: null
        }
    }
});

import React, { Component } from 'react';
import { Image, Dimensions, StyleSheet } from 'react-native';

var { height, width } = Dimensions.get('window');

const localStyles = StyleSheet.create({
    backgroundImage: {
        width: width,
        height: 150,
        resizeMode: 'cover'
    }
});

const defaultNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'Lista de compra',
                headerBackground: (
                    <Image
                        source={require('./src/assets/images/background.jpg')}
                        style={localStyles.backgroundImage}
                    />
                )
            }
        },
        Products: {
            screen: ProductsScreen,
            navigationOptions: {
                title: 'Todos os produtos',
                headerBackground: (
                    <Image
                        source={require('./src/assets/images/background1.jpg')}
                        style={localStyles.backgroundImage}
                    />
                )
            }
        }
    },
    {
        defaultNavigationOptions: {
            headerTintColor: WHITE,
            headerStyle: {
                height: 150
            },
            headerTitleStyle: {
                color: WHITE,
                fontSize: 28,
                alignSelf: 'flex-end',
                marginBottom: 8,
            },


        }
    }
);

const AppNavigator = createSwitchNavigator({
    loginNavigator,
    defaultNavigator
});

export default createAppContainer(AppNavigator);

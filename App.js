/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ProductsReducer from './src/reducers/ProductsReducer';
import AppNavigator from './AppNavigator';

const store = createStore(ProductsReducer, applyMiddleware());

export default class App extends Component {
    
    render() {
        return (
            <Provider store={store}>
                <AppNavigator/>
            </Provider>
        );
    }
}

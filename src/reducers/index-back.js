import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import ProductsReducer from './ProductsReducer';

export const makeRootReducer = asyncReducers => {
    return combineReducers({
        // Add sync reducers here
        firebase: firebaseStateReducer,
        products: ProductsReducer,
        ...asyncReducers
    });
};

export default makeRootReducer;

// Useful for injecting reducers as part of async routes
export const injectReducer = (store, { key, reducer }) => {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(makeRootReducer(store.asyncReducers));
};

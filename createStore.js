import { compose, createStore, applyMiddleware } from 'redux';
import RNFirebase from 'react-native-firebase';
import { reactReduxFirebase } from 'react-redux-firebase';
import makeRootReducer from './src/reducers';
import { reduxFirestore, getFirestore } from "redux-firestore";
import thunk from "redux-thunk";

const reactNativeFirebaseConfig = {
    debug: true
};

const reduxFirebaseConfig = {
    products: 'products' // save users profiles to 'users' collection
};

export default (initialState = { firebase: {}}) => {
    // initialize firebase
    const firebase = RNFirebase.initializeApp(reactNativeFirebaseConfig);
    
    const store = createStore(
        makeRootReducer(),
        initialState,
        compose(
            reactReduxFirebase(firebase, reduxFirebaseConfig), // pass initialized react-native-firebase app instance
            // applyMiddleware can be placed here
            applyMiddleware(thunk.withExtraArgument({getFirestore})),
            reduxFirestore(RNFirebase)
        )
    );

    return store;
};

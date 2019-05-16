import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Button, Input, Image, Icon } from 'react-native-elements';
import styles from '../styles';
import { LIGHT_RED, WHITE } from '../styles/Colors';
import { ActionButton, Container } from '../components';
import firebase from 'react-native-firebase';
import { GoogleSignin } from 'react-native-google-signin';
class LoginScreen extends Component {
    state = {
        loading: false
    };

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container
                style={
                    { backgroundColor: LIGHT_RED, justifyContent: 'center' }
                }>
                <StatusBar
                    backgroundColor="#00000000"
                    barStyle="light-content"
                    translucent
                />
                <View
                    style={{
                        padding: 20,
                        borderRadius: 30,
                        alignSelf: 'center'
                    }}>
                    <Image
                        source={require('../assets/images/shopping-cart.png')}
                        style={{
                            width: 140,
                            height: 140,
                            resizeMode: 'contain',
                            tintColor: WHITE
                        }}
                    />
                </View>
                <ActionButton
                    title="Entrar com Google"
                    reverse
                    icon={
                        <Icon
                            type="font-awesome"
                            name="google"
                            color={LIGHT_RED}
                            containerStyle={{ marginRight: 16 }}
                        />
                    }
                    onPress={() => this.googleLogin()}
                    loading={this.state.loading}
                />
            </Container>
        );
    }

    googleLogin = async () => {
        try {
            this.setState({ loading: true });
            await GoogleSignin.configure();
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const tokens = await GoogleSignin.getTokens();
            this.setState({ userInfo });
            const credential = firebase.auth.GoogleAuthProvider.credential(
                tokens.idToken,
                tokens.accessToken
            );
            const firebaseUserCredential = await firebase
                .auth()
                .signInWithCredential(credential);
            console.log(
                'login with: ' +
                    JSON.stringify(firebaseUserCredential.user.toJSON())
            );

            await firebase
                .firestore()
                .collection('users')
                .doc(firebaseUserCredential.user.uid)
                .set({
                    name: firebaseUserCredential.user.displayName,
                    email: firebaseUserCredential.user.email,
                    products: []
                });
            this.checkUser();
        } catch (error) {
            this.setState({ loading: false });
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (f.e. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
            } else {
                // some other error happened
            }
        }
    };

    componentDidMount() {
        this.checkUser();
    }

    checkUser = async () => {
        const user = await firebase.auth().currentUser;
        if (user) {
            console.log('current user: ' + user.toJSON());
            this.setState({ loading: true });
            setTimeout(() => {
                this.setState({ loading: false }, () =>{
                    this.props.navigation.navigate('Home', { uid: user.uid })
                });
            }, 2000);
        }
    };
}

export default LoginScreen;

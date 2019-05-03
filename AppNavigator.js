import { createStackNavigator, createAppContainer } from 'react-navigation';
import { ProductsScreen, HomeScreen } from './src/screens';
import { WHITE, LIGHT_RED, LIGHT_BLUE, LIGHT_GRAY } from './src/styles/Colors';

const AppNavigator = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: 'Lista de compra'
            }
        },
        Products: {
            screen: ProductsScreen,
            navigationOptions: {
                title: 'Todos os produtos'
            }
        }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: LIGHT_GRAY,
                shadowOpacity: 0,
                elevation: 0
            },
            headerTintColor: LIGHT_RED,
            headerTitleStyle: {
                color: LIGHT_RED,
                fontSize: 28
            }
        }
    }
);

export default createAppContainer(AppNavigator);

import {createStackNavigator, createAppContainer} from "react-navigation";
import {ProductsScreen, HomeScreen} from "./src/screens";

const AppNavigator = createStackNavigator({
    Home:{
        screen: HomeScreen,
        navigationOptions:{
            title:'Lista de compra'
        }
    },
    Products: {
        screen: ProductsScreen,
        navigationOptions: {
            title:'Todos os produtos'
        }
    }
});

export default createAppContainer(AppNavigator)

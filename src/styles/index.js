import { StyleSheet } from "react-native";
import { WHITE, LIGHT_GRAY } from "./Colors";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:WHITE
    },
    centerContainer: {
        flex: 1,
        backgroundColor: WHITE,
        padding: 16,
        alignItems:'center',
        justifyContent:'center'
        
    },
    horizontalLine: {
        borderBottomColor: LIGHT_GRAY,
        borderBottomWidth: 2
    }
});
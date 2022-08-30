import { StyleSheet, View,Text } from "react-native";

const style = StyleSheet.create({
    display: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'flex-end',
        backgroundColor: '#010100'
    },
    displayValue: {
        fontSize: 60,
        color: '#fff'
    }
})

const Display = ({values}) => {
    return (
        <>
            <View style={style.display}>
                <Text style={style.displayValue} numberOfLines={1}>{values}</Text>
            </View>
        </>
    );
}
 
export default Display;
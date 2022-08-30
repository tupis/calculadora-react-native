import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight,
    Image
} from 'react-native'

const style = StyleSheet.create({
    bg: {
        backgroundColor: '#ff9e0b',
    },
    button: {
        padding: 20,
        fontSize: 40,
        textAlign: 'center',
        width: Dimensions.get('window').width / 4,
        backgroundColor: '#333232',
        color: '#fff',
        borderWidth: 5,
        borderRadius: 25,
        overflow: 'hidden'
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#ff9e0b'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3
    }
})

const Button = ({label, onClick, lengthStyle}) => {
    const styleButton = [style.button]

    lengthStyle == 'double' ? styleButton.push(style.buttonDouble) : '';

    lengthStyle == 'triple' ? styleButton.push(style.buttonTriple) : '';

    lengthStyle == 'operation' ? styleButton.push(style.operationButton) : '';

    return (
        <>  
            <TouchableHighlight style={{backgroundColor: '#010100'}} onPress={onClick}>
                <Text style={styleButton}>{label}</Text>
            </TouchableHighlight>
        </>
    );
}
 
export default Button;


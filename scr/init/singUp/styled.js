import { StyleSheet } from "react-native";

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
    },
    inputContainer: {
        alignContent: 'center',
        alignItems: 'center',
        width: 400,
    },
    inputs: {
        flex: 1,
        padding: 8,
        backgroundColor: 'white',
        maxHeight: 25,
        margin: 5,
        borderRadius: 20
    },
    buttonSingUp: {
        height: 35,
        width: 350,
        backgroundColor: 'red',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    singMessageButto:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 20,
    },
    singMessageButtonTextBold:{
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 5,
    },
})
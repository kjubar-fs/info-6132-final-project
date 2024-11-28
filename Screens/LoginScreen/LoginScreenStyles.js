import { StyleSheet } from "react-native";

export default LoginScreenStyles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        color: 'black',
        fontSize: 24,
        flexWrap: 'wrap',
    },
    formContainer: {
        width: '80%',
        alignItems: 'center',
        backgroundColor: "#F0F0F0A0",
        borderRadius: 10,
        padding: 10,
    },
    inputContainer: {
        width: '100%',

    },
    inputField: {
        backgroundColor: '#3D3D3D',
        fontSize: 18,
        padding: 5,
        color: 'white',
    },
    inputLabel: {
        color: 'black',
        fontSize: 18,
        marginTop: 10,
        paddingHorizontal: 5,
    },
    btnContainer: {
        marginTop: 15,
        marginBottom: 10,
    },
    loginToggle: {
        fontSize: 16,
        color: 'white',
    },
    alert: {
        color: 'red',
    },
})
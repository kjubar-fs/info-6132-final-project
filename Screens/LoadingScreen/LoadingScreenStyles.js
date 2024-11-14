import { StyleSheet } from "react-native";

export default LoadingScreenStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: 'black',
        height: '100%',
    },
    imgContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'flex-end',
        height: 150,
        paddingLeft: 250,
    },
    img: {
        margin: 'auto',
        width: 90,
        height: 90,
        padding: 20,
    },
    jokerImg: {
        maxWidth: 300,
        maxHeight: 300,

        alignSelf: 'center',
        marginBottom: '30%',
        marginTop: '30%',
    }
})
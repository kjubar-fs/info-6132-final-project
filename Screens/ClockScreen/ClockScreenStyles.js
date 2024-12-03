import { StyleSheet } from "react-native";

const daggerSize = 50

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        flex: 1,
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    textContainer: {
        justifySelf: 'flex-start',
    },
    daggerRow: {
        flexDirection: 'row',
        alignItems: 'baseline',
        marginLeft: daggerSize,
    },
    dagger: {
        position: 'relative',
        width: daggerSize,
        height: daggerSize,
    },
    text: {
        color: 'white',
        fontFamily: 'HelveticaNeue',
        fontSize: 24,
        textAlign: 'center',
    },
    hourText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 48,
        fontFamily: 'Avenir',
    },
})
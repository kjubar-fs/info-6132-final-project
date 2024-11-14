import { StyleSheet } from "react-native";

const daggerSize = 50

export default ClockScreenStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textContainer: {
        alignSelf: 'flex-start',
        marginTop: '50%',
    },
    daggerRow: {
        display: 'flex',
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
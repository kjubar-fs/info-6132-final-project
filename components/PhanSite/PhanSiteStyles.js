import { Platform, StyleSheet } from "react-native";


const widgetDimm = 300

export default StyleSheet.create({
    container: {
        marginTop: '50%',
        width: widgetDimm,
        height: widgetDimm/2,
    },
    img: {
        flexDirection: 'row',
        width: widgetDimm,
        height: widgetDimm/2,
        alignItems: 'flex-end',
        justifyContent: 'flex-start'
    },
    fill: {
        backgroundColor: 'red',
        height: 14,
        marginBottom: 36,
        marginLeft: 26,
    },
    votes: {
        alignSelf: 'flex-end',
        // marginLeft: 0% -> 230 ; 100% -> 30
        marginBottom: 25,
        color: 'red',
        fontWeight: 'bold',
        // TODO: change fontFamily to something WAY thinner
        fontFamily: Platform.OS == 'ios' ? 'Avenir' : 'Roboto',
        fontSize: 30,
        minWidth: 120,
    }
})
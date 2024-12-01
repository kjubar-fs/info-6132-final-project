import { Platform, StyleSheet } from "react-native";

export default StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        backgroundColor: 'black',
    },

    splash: {
        height: 300,
        width: "100%",
    },

    loader: {
        position: 'absolute',
        bottom: Platform.OS === "ios" ? 40 : 25,
        right: 25,
        height: 90,
        width: 90,
    },
});
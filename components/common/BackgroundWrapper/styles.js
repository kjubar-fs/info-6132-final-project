import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    screenWrapper: {
        position: "relative",
        flex: 1,

        backgroundColor: "red",
    },

    background: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: Dimensions.get("window").width,
    },
});
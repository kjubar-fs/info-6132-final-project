import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexBasis: "17%",
        alignItems: "center",
        gap: 2,
    },

    iconContainer: {
        padding: 5,

        backgroundColor: "black",

        transform: [{rotate: "-4deg"}],
    },

    icon: {
        width: 60,
        height: 20,

        transform: [{rotate: "3deg"}],
    },

    value: {
        fontSize: 18,
        fontWeight: "800",
    },
});
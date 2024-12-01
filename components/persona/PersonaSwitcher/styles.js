import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 12,
        paddingBottom: 7,
    },

    buttonText: {
        fontSize: 22,
        fontStyle: "italic",
        color: "white",
    },

    buttonDisabled: {
        color: "#666",
    },

    partyName: {
        fontSize: 26,
        fontWeight: "600",
        color: "white",
    },
});
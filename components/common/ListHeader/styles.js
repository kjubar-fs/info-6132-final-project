import { StyleSheet } from "react-native";

import { safeAreaTopPadding } from "../../../utils/constants";

export default StyleSheet.create({
    headerOuter: {
        marginBottom: 2,

        backgroundColor: "black",
        borderColor: "white",
        borderBottomWidth: 10,

        transform: [{rotate: "-1deg"}],
    },

    headerInner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        paddingTop: safeAreaTopPadding,
        
        transform: [{rotate: "1deg"}],
    },

    headerTitle: {
        fontSize: 20,
        fontWeight: "600",
        color: "white",
    },

    headerSpacer: {
        width: 34,  // same width as back button
    },
});
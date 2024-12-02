import { StyleSheet } from "react-native";

import { safeAreaBottomPadding, safeAreaTopPadding } from "../../utils/constants";

export default StyleSheet.create({
    background: {
        flex: 1,
    },

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

    listContainer: {
        gap: 10,
        paddingTop: 20,
        paddingHorizontal: 10,
        paddingBottom: safeAreaBottomPadding,
    },

    btnContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 15,
    },

    partyImage: {
        width: 100,
        height: 100,
    },
    
    partyImagePressed: {
        width: 110,
        height: 110,
    },

    partyName: {
        fontSize: 26,
        fontWeight: "700",
        color: "white",
    },

    partyNamePressed: {
        fontSize: 27,
        fontWeight: "700",
        color: "white",
    },
});
import { StyleSheet } from "react-native";

import { safeAreaBottomPadding, safeAreaTopPadding } from "../../utils/constants";

export default StyleSheet.create({
    background: {
        flex: 1,
    },

    listContainer: {
        gap: 10,
        paddingHorizontal: 10,
        paddingTop: safeAreaTopPadding,
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
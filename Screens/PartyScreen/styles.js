import { StyleSheet } from "react-native";

import { safeAreaBottomPadding } from "../../utils/constants";

export default StyleSheet.create({
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
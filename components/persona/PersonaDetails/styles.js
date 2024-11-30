import { StyleSheet } from "react-native";

import { safeAreaBottomPadding } from "../../../utils/constants";

export default StyleSheet.create({
    scrollContainer: {
        padding: 10,
        paddingBottom: safeAreaBottomPadding,
        gap: 20,
    },

    gapContainer: {
        gap: 10,
    },

    affinityContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
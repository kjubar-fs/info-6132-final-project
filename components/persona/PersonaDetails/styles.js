import { StyleSheet } from "react-native";
import { safeAreaBottomPadding } from "../../../utils/constants";

export default StyleSheet.create({
    container: {
        backgroundColor: "white",
    },

    scrollContainer: {
        gap: 20,
        padding: 10,
        paddingBottom: safeAreaBottomPadding,
    },

    gapContainer: {
        gap: 10,
    },

    affinityContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
});
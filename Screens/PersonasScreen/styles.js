import { StyleSheet } from "react-native";

import { safeAreaBottomPadding } from "../../utils/constants";

export default StyleSheet.create({
    listContainer: {
        gap: 12,
        paddingTop: 20,
        paddingHorizontal: 10,
        paddingBottom: safeAreaBottomPadding,
    },

    nameContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },

    arcana: {
        width: 125,
        padding: 2,

        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",

        backgroundColor: "white",
    },

    arcanaRare: {
        backgroundColor: "#A3EB6B",
    },

    arcanaDLC: {
        backgroundColor: "#FEE85F",
    },

    arcanaPressed: {
        width: 135,

        fontSize: 22,
    },

    name: {
        fontSize: 20,
        fontWeight: "700",
        color: "white",
    },

    nameRare: {
        color: "#A3EB6B",
    },

    nameDLC: {
        color: "#FEE85F",
    },

    namePressed: {
        fontSize: 22,
    },

    tag: {
        padding: 2,

        fontSize: 18,
        fontWeight: "500",
        textAlign: "center",

        backgroundColor: "#FEE85F",
    },

    tagPressed: {
        fontSize: 20,
    },
});
import { Dimensions, Platform, StyleSheet } from "react-native";

import { safeAreaBottomPadding, safeAreaTopPadding } from "../../../utils/constants";

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
    scrollContainer: {
        alignItems: "center",
        paddingBottom: safeAreaBottomPadding,
        gap: 20,
    },

    headerContainer: {
        position: "relative",
        width: windowWidth + 50,     // make width wider than screen for rotation
        marginTop: -75,                         // set margin and padding to show transparent above screen if the user scrolls up
        paddingTop: safeAreaTopPadding + 100,
        alignItems: "center",

        backgroundColor: "#0086E944",

        transform: [{rotate: "-3deg"}],
    },

    gapContainer: {
        gap: 10,
    },

    nameContainer: {
        width: "100%",
        alignItems: "center",
        padding: 10,
        paddingBottom: 20,

        backgroundColor: "#0086E9",
    },

    name: {
        width: windowWidth,
        paddingHorizontal: 10,

        fontSize: 30,
        fontWeight: "600",
        textAlign: "center",
        color: "white",
    },

    nameDivider: {
        fontSize: 40,
        color: "#035390",
    },

    trait: {
        color: "#FAF232"
    },

    levelContainer: {
        width: "100%",
        alignItems: "center",
        padding: 5,

        backgroundColor: "black",
    },

    levelLabel: {
        textTransform: "uppercase",
        fontSize: 19,
        fontWeight: "600",
        color: "#858585",
    },

    level: {
        color: "#FAF232",
    },

    noteContainer: {
        width: "100%",
        alignItems: "center",
        paddingVertical: 4,

        backgroundColor: "white",
    },

    note: {
        fontSize: 16,
        fontWeight: "500",
    },

    backBtn: {
        position: "absolute",
        top: Platform.OS === "ios" ? 120 : 110,
        left: 45,

        transform: [{rotate: "3deg"}],
    },

    imageContainer: {
        flexDirection: "row",
    },

    image: {
        flex: 1,
        height: 250,
    },

    affinityContainer: {
        position: "relative",
        flexDirection: "row",
        flexWrap: "wrap",
        paddingVertical: 8,
        rowGap: 10,
    },

    affinityBackground: {
        position: "absolute",
        top: -2,
        left: -10,
        right: -10,
        bottom: 0,

        backgroundColor: "white",

        transform: [{rotate: "1deg"}],
    },

    itemContainerOuter: {
        width: "91%",
        marginTop: 20,
        padding: 10,
        
        backgroundColor: "white",

        transform: [{rotate: "-2deg"}, {skewX: "3deg"}],
    },

    itemContainerMid: {
        padding: 10,

        backgroundColor: "black",
    },

    itemContainerInner: {
        margin: 7,
        gap: 20,
        
        transform: [{rotate: "2deg"}, {skewX: "-3deg"}],
    },

    itemTitle: {
        fontSize: 21,
        fontWeight: "700",
        color: "white",
    },
});
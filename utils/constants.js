import { Platform } from "react-native";

export const safeAreaTopPadding = Platform.OS === "ios" ? 60 : 50;
export const safeAreaBottomPadding = Platform.OS === "ios" ? 30 : 10;
import { Platform } from "react-native";

export const safeAreaBottomPadding = Platform.OS === "ios" ? 30 : 10;
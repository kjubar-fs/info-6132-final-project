import { View } from "react-native";
import { Image } from "expo-image";

import styles from "./styles";

export function BackgroundWrapper({ children }) {
    return (
        <View style={styles.screenWrapper}>
            <Image source={require("../../../assets/chainsBg.webp")} style={styles.background} />
            {children}
        </View>
    );
}
import { View, Image } from "react-native";

import styles from "./styles";

export function BackgroundWrapper({ children }) {
    return (
        <View style={styles.screenWrapper}>
            <Image source={require("../../../assets/chainsBg.webp")} style={styles.background} />
            {children}
        </View>
    );
}
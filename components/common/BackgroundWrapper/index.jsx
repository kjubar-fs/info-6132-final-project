import { View, Image } from "react-native";

import styles from "./styles";

export function BackgroundWrapper({ children, imageOverride = undefined }) {
    return (
        <View style={styles.screenWrapper}>
            <Image source={imageOverride ? imageOverride : require("../../../assets/chainsBg.webp")} style={styles.background} />
            {children}
        </View>
    );
}
import { View, Text } from "react-native";

import { BackButton } from "../BackButton";

import styles from "./styles";

export function ListHeader({ title }) {
    return (
        <View style={styles.headerOuter}>
            <View style={styles.headerInner}>
                <BackButton />

                <Text style={styles.headerTitle}>{title}</Text>

                <View style={styles.headerSpacer} />
            </View>
        </View>
    );
}
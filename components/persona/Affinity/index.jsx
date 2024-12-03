import { useRef } from "react";

import { Text, View } from "react-native";
import { Image } from "expo-image";

import { elementList, personaAffinities } from "../../../utils/dataMaps";

import { skillIcons } from "../../../utils/imageMaps";
import styles from "./styles";

export function Affinity({ elementIx, value }) {
    const skillIcon = useRef(skillIcons[elementList[elementIx]]);

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image
                    source={skillIcon.current}
                    style={styles.icon}
                    contentFit="contain"
                />
            </View>
            <Text style={styles.value}>
                {personaAffinities[value]}
            </Text>
        </View>
    );
}
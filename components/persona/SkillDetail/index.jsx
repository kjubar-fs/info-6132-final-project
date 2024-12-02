import { View, Text, Image } from "react-native";

import { useApi } from "../../../hooks/useApi";

import { skillIcons } from "../../../utils/imageMaps";
import styles from "./styles";

export function SkillDetail({ skillName, level }) {

    const skillsData = useApi().skill
    const skillData = skillsData[skillName];

    let shortLevel = level < 100;

    if (level === 0) {
        // innate skills
        level = "Innate";
    } else if (level === 100) {
        // rank 10 skills
        level = "Unlocked via Rank 10 evolution";
    } else if (level === 101) {
        // third awakening skills
        level = "Unlocked via Third Awakening";
    } else if (level >= 110) {
        // Futaba confidant skills
        level = `Unlocked at confidant Rank ${(level % 10) + 1}`;
    }

    return (
        <View style={styles.container}>
            <View style={styles.skillNameContainer}>
                <Image source={skillIcons[skillData.element]} style={{width: 60, height: 20}} resizeMode="contain" />

                <Text style={[styles.text, styles.skillName]}>{skillName}</Text>

                {shortLevel &&
                    <Text style={styles.text}>{level}</Text>}
            </View>

            {!shortLevel &&
                <Text style={styles.text}>{level}</Text>}

            <View style={styles.divider} />
            
            <Text style={styles.text}>{skillData.effect}</Text>
        </View>
    );
}
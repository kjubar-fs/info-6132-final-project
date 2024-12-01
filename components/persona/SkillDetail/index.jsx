import { View, Text, Image } from "react-native";

// TODO: replace this with data from API
import skillsData from "../../../dummyData/SkillDataRoyal.json";

import { skillIcons } from "../../../utils/imageMaps";
import styles from "./styles";

export function SkillDetail({ skillName, level }) {
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
                <Image source={skillIcons[skillsData[skillName].element]} style={{width: 60, height: 20}} resizeMode="contain" />

                <Text style={[styles.text, styles.skillName]}>{skillName}</Text>

                {shortLevel &&
                    <Text style={styles.text}>{level}</Text>}
            </View>

            {!shortLevel &&
                <Text style={styles.text}>{level}</Text>}
        </View>
    );
}
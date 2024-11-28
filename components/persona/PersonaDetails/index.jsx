import { View, Text } from "react-native";

import { elementList, personaAffinities } from "../../../utils/dataMaps";

import styles from "./styles";

export function PersonaDetails({ name, details }) {
    return (
        <View style={styles.container}>
            <View style={{gap: 10}}>
                <Text>{name}</Text>
                <Text>Arcana: {details.arcana}</Text>
                <Text>Trait: {details.trait}</Text>
            </View>

            <View style={styles.affinityContainer}>
                {details.elems.map((affinity, ix) => (
                    <Text key={ix} style={{flex: 1, flexBasis: "17%"}}>{personaAffinities[affinity]} {elementList[ix]}</Text>
                ))}
            </View>

            <View style={{gap: 10}}>
                <Text>Skills</Text>
                {Object.keys(details.skills).map((skillName, ix) => {
                    let level = details.skills[skillName];
                    if (level === 0) {
                        level = "Innate";
                    }
                    return <Text key={ix}>{level} - {skillName}</Text>;
                })}
            </View>
        </View>
    );
}
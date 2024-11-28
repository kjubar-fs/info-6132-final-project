import { View, Text } from "react-native";

import { elementList, personaAffinities } from "../../../utils/dataMaps";

// TODO: replace this with data from API
import itemData from "../../../dummyData/ItemDataRoyal.json";

import styles from "./styles";

export function PersonaDetails({ name, details }) {
    return (
        <View style={styles.container}>
            <View style={{gap: 10}}>
                <Text>{name}</Text>

                <Text>Arcana: {details.arcana}</Text>

                <Text>Trait: {details.trait}</Text>

                <Text>Base Level: {details.level === "inherit" ? "inherited at evolution" : details.level}</Text>

                {details.note &&
                    <Text>{details.note}</Text>}

                {details.max &&
                    <Text>Unlocked at rank 10 of the {details.arcana} confidant</Text>}

                {details.dlc &&
                    <Text>Requires DLC</Text>}
            </View>

            <View style={styles.affinityContainer}>
                {details.elems.map((affinity, ix) => (
                    <Text key={ix} style={{flex: 1, flexBasis: "17%"}}>{personaAffinities[affinity]} {elementList[ix]}</Text>
                ))}
            </View>

            {details.item &&
                <View style={{gap: 10}}>
                    <Text>Execution Items</Text>

                    <View style={{gap: 10}}>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <Text>{details.item}</Text>

                            <Text>{details.skillCard ? "Skill Card" : itemData[details.item].type}</Text>
                        </View>

                        {!details.skillCard && <Text>{itemData[details.item].description}</Text>}
                    </View>
                    
                    <View style={{gap: 10}}>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <Text>{details.itemr}</Text>
                            
                            <Text>{details.skillCard ? "Skill Card" : itemData[details.itemr].type}</Text>
                        </View>

                        {!details.skillCard && <Text>{itemData[details.itemr].description}</Text>}
                    </View>
                </View>}

            <View style={{gap: 10}}>
                <Text>Skills</Text>

                {Object.keys(details.skills).map((skillName, ix) => {
                    let level = details.skills[skillName];
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

                    return <Text key={ix}>{level} - {skillName}</Text>;
                })}
            </View>
        </View>
    );
}
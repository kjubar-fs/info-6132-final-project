import { View, Text, ScrollView } from "react-native";
import { Image } from "expo-image";

import { ItemDetail } from "../ItemDetail";
import { Affinity } from "../Affinity";

import styles from "./styles";

export function PersonaDetails({ name, details }) {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContainer}>
            <View style={styles.gapContainer}>
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

            <View style={{alignSelf: "center", flexDirection: "row"}}>
                <Image
                    source={details.image}
                    placeholder={require("../../../assets/loading/takeYourTime.png")}
                    style={{flex: 1, height: 250}}
                    contentFit="contain"
                    placeholderContentFit="contain"
                />
            </View>

            <View style={[styles.gapContainer, styles.affinityContainer]}>
                {details.elems.map((affinity, ix) => (
                    <Affinity key={ix} elementIx={ix} value={affinity} />
                ))}
            </View>

            {details.item &&
                <View style={{gap: 10}}>
                    <Text>Execution Items</Text>

                    <ItemDetail item={details.item} skillCard={details.skillCard} />
                    
                    <ItemDetail item={details.itemr} skillCard={details.skillCard} isRare />
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
        </ScrollView>
    );
}
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useNavigation } from "@react-navigation/native";

import { ItemDetail } from "../ItemDetail";
import { Affinity } from "../Affinity";

import styles from "./styles";

export function PersonaDetails({ name, details }) {
    const navigation = useNavigation();

    const hasNote = details.note || details.max || details.dlc;

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <StatusBar style="light" />

            <View style={styles.headerContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{name} <Text style={styles.nameDivider}>•</Text> <Text style={styles.trait}>{details.trait}</Text></Text>
                </View>

                <View style={styles.levelContainer}>
                    <Text style={styles.levelLabel}>Base Level <Text style={styles.level}>{details.level === "inherit" ? "inherited at evolution" : details.level}</Text></Text>
                </View>

                {hasNote &&
                    <View style={styles.noteContainer}>
                        {details.note &&
                            <Text style={styles.note}>{details.note}</Text>}

                        {details.max &&
                            <Text style={styles.note}>Unlocked at rank 10 of the {details.arcana} confidant</Text>}

                        {details.dlc &&
                            <Text style={styles.note}>Requires DLC</Text>}
                    </View>}
                
                <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()} activeOpacity={0.75}>
                    <MaterialIcons name="keyboard-backspace" size={34} color="white" />
                </TouchableOpacity>
            </View>

            <View style={styles.imageContainer}>
                <Image
                    source={details.image}
                    placeholder={require("../../../assets/loading/takeYourTime.png")}
                    style={styles.image}
                    contentFit="contain"
                    placeholderContentFit="contain"
                />
            </View>

            <View style={styles.affinityContainer}>
                <View style={styles.affinityBackground} />
                {details.elems.map((affinity, ix) => (
                    <Affinity key={ix} elementIx={ix} value={affinity} />
                ))}
            </View>

            {details.item &&
                <View style={styles.itemContainerOuter}>
                    <View style={styles.itemContainerMid}>
                        <View style={styles.itemContainerInner}>
                            <Text style={styles.itemTitle}>Execution Items</Text>

                            <ItemDetail item={details.item} skillCard={details.skillCard} />
                        
                            <ItemDetail item={details.itemr} skillCard={details.skillCard} isRare />
                        </View>
                    </View>
                </View>}

            <View style={styles.gapContainer}>
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
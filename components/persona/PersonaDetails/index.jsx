import { useState } from "react";

import { View, Text, ScrollView, Pressable } from "react-native";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";

import { auth } from "../../../config/firebase";
import { getFavouritesForUser, addFavouritesForUser, removeFavourtiesForUser } from "../../../services/database/firebaseDb";

import { BackButton } from "../../common/BackButton";
import { Affinity } from "../Affinity";
import { ItemDetail } from "../ItemDetail";
import { SkillDetail } from "../SkillDetail";

import styles from "./styles";

export function PersonaDetails({ name, details, favourites = false, setFavourites, headerContent = undefined }) {
    // Checks the current status of this Persona
    const [isFav, setIsFav] = useState(favourites && favourites.includes(name) ? true : false);

    const handleFavouritePress = async () => {
        if (isFav) {
            await removeFavourtiesForUser(auth.currentUser.uid, name);
            await updateLocalState();
            setIsFav(false);
        } else {
            await addFavouritesForUser(auth.currentUser.uid, name);
            await updateLocalState();
            setIsFav(true);
        }
    };

    const updateLocalState = async () => {
        const favs = await getFavouritesForUser(auth.currentUser.uid);
        setFavourites(favs);
    };


    const hasNote = details.note || details.max || details.dlc;
    // tweak skills display if skill list is very long (like party personas)
    const longSkills = Object.keys(details.skills).length >= 10;

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <StatusBar style="light" />

            <View style={styles.headerContainer}>
                {headerContent !== undefined &&
                    <View style={styles.headerContent}>{headerContent}</View>}

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
                
                <BackButton style={styles.backBtn} />
            </View>

            <View style={styles.imageContainer}>
                {details.image !== undefined &&
                    <Image
                        source={details.image}
                        placeholder={require("../../../assets/loading/takeYourTime.png")}
                        style={styles.image}
                        contentFit="contain"
                        placeholderContentFit="contain"
                    />}
                {details.image === undefined &&
                    <Image
                        source={require("../../../assets/loading/takeYourTime.png")}
                        style={styles.image}
                        contentFit="contain"
                    />}
            </View>

            <View style={styles.affinityContainer}>
                <View style={styles.affinityBackground} />
                {details.elems.map((affinity, ix) => (
                    <Affinity key={ix} elementIx={ix} value={affinity} />
                ))}
            </View>

            {details.item &&
                <View style={[styles.borderedContainerOuter, styles.itemContainerTransform]}>
                    <View style={styles.borderedContainerMid}>
                        <View style={[styles.borderedContainerInner, styles.itemContainerUntransform]}>
                            <Text style={styles.categoryTitle}>Execution Items</Text>

                            <ItemDetail item={details.item} skillCard={details.skillCard} />
                        
                            <ItemDetail item={details.itemr} skillCard={details.skillCard} isRare />
                        </View>
                    </View>
                </View>}

            <View style={[styles.borderedContainerOuter, longSkills ? styles.skillsContainerTransformLong : styles.skillsContainerTransformShort]}>
                <View style={styles.borderedContainerMid}>
                    <View style={[styles.borderedContainerInner, longSkills ? styles.skillsContainerUntransformLong : styles.skillsContainerUntransformShort]}>
                        <Text style={styles.categoryTitle}>Skills</Text>

                        {Object.keys(details.skills).map((skillName, ix) => {
                            return <SkillDetail key={ix} skillName={skillName} level={details.skills[skillName]} />;
                        })}
                    </View>
                </View>
            </View>

            {favourites &&
                <Pressable
                    style={[styles.borderedContainerOuter, styles.itemContainerTransform]}
                    onPress={handleFavouritePress}
                >
                    <View style={styles.borderedContainerMid}>
                        <View style={[styles.borderedContainerInner, styles.itemContainerUntransform]}>
                        <Text style={[styles.categoryTitle, {textAlign: 'center'}]}>{isFav ? "Remove from Favourites" : "Add to Favourites"}</Text>
                        </View>
                    </View>
                </Pressable>}
        </ScrollView>
    );
}
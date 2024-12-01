import { View, Text, ScrollView, TouchableOpacity, Pressable } from "react-native";
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { useNavigation } from "@react-navigation/native";
import { auth } from "../../../config/firebase";
import { getFavouritesForUser, addFavouritesForUser, removeFavourtiesForUser } from "../../../services/database/firebaseDb";

import { Affinity } from "../Affinity";
import { ItemDetail } from "../ItemDetail";
import { SkillDetail } from "../SkillDetail";

import styles from "./styles";
import { useEffect, useState } from "react";

export function PersonaDetails({ name, details }) {
    const navigation = useNavigation();

    // Getting the list of favourites and the current status of this Persona
    const [favourites, setFavourites] = useState(undefined)
    const [isFav, setIsFav] = useState(undefined)

    useEffect(()=>{
        // Loading the favourites data and allowing the user to add or remove the Persona from there
        (async()=>{
            // Gets the list of favourites
            const favs = await getFavouritesForUser(auth.currentUser.uid)
            setFavourites(favs)
            // Checks if this persona is already there
            if(favs.includes(name)){
                setIsFav(true)
            }
            else{
                setIsFav(false)
            }
        })()
    },[])

    const handleFavouritePress = async() => {
        if(isFav){
            await removeFavourtiesForUser(auth.currentUser.uid, name)
            setIsFav(false)
        }
        else{
            await addFavouritesForUser(auth.currentUser.uid, name)
            setIsFav(true)
        }
    }


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
                <View style={[styles.borderedContainerOuter, styles.itemContainerTransform]}>
                    <View style={styles.borderedContainerMid}>
                        <View style={[styles.borderedContainerInner, styles.itemContainerUntransform]}>
                            <Text style={styles.categoryTitle}>Execution Items</Text>

                            <ItemDetail item={details.item} skillCard={details.skillCard} />
                        
                            <ItemDetail item={details.itemr} skillCard={details.skillCard} isRare />
                        </View>
                    </View>
                </View>}

            <View style={[styles.borderedContainerOuter, styles.skillsContainerTransform]}>
                <View style={styles.borderedContainerMid}>
                    <View style={[styles.borderedContainerInner, styles.skillsContainerUntransform]}>
                        <Text style={styles.categoryTitle}>Skills</Text>

                        {Object.keys(details.skills).map((skillName, ix) => {
                            return <SkillDetail key={ix} skillName={skillName} level={details.skills[skillName]} />;
                        })}
                    </View>
                </View>
            </View>

            {/* ADDING FAVS BUTTON */}
            {
                favourites &&
                <Pressable 
                style={[styles.borderedContainerOuter, styles.itemContainerTransform]}
                onPress={handleFavouritePress}
                >
                    <View style={styles.borderedContainerMid}>
                        <View style={[styles.borderedContainerInner, styles.itemContainerUntransform]}>
                        <Text style={[styles.categoryTitle, {textAlign: 'center'}]}>{isFav ? "Remove from Favourites" : "Add to Favourites"}</Text>
                        </View>
                    </View>
                </Pressable>
            }
        </ScrollView>
    );
}
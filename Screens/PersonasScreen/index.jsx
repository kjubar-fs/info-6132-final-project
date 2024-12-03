import { View, Text, Pressable, FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useApi } from "../../hooks/useApi";

import Ionicons from '@expo/vector-icons/Ionicons';

import { BackgroundWrapper } from "../../components/common/BackgroundWrapper";
import { ListHeader } from "../../components/common/ListHeader";

import styles from "./styles";

export function PersonasScreen({ favourites = undefined }) {
    const personaData = useApi().persona;

    return (
        <BackgroundWrapper>
            <ListHeader title={favourites !== undefined ? "Favourites" : "Personas"} />

            <FlatList
                data={favourites !== undefined ? favourites : Object.keys(personaData).sort()}
                renderItem={({ item }) => (
                    <Persona key={item} name={item} />
                )}
                contentContainerStyle={styles.listContainer}
            />
        </BackgroundWrapper>
    );
}

function Persona({ name }) {
    const navigation = useNavigation();
    const personaData = useApi().persona;
    const persona = personaData[name];
    const displayName = name.endsWith("Picaro") ? 
        name.slice(0, -3) + "." :
        name;
    const isRare = persona.rare;
    const isDLC = persona.dlc;

    return (
        <Pressable onPress={() => navigation.navigate("PersonaDetailScreen", { personaName: name })}>
            {({ pressed }) => (
                <View style={styles.nameContainer}>
                    <Text style={[
                        styles.arcana,
                        pressed ? styles.arcanaPressed : undefined,
                        isRare ? styles.arcanaRare : undefined,
                        isDLC ? styles.arcanaDLC : undefined,
                    ]}>{persona.arcana}</Text>
                    <Text style={[
                        styles.name,
                        pressed ? styles.namePressed : undefined,
                        isRare ? styles.nameRare : undefined,
                        isDLC ? styles.nameDLC : undefined,
                    ]}>{displayName}</Text>
                    {isRare &&
                        <Ionicons name="diamond-sharp" size={pressed ? 26 : 24} color="#A3EB6B" />}
                    {isDLC &&
                        <Text style={[
                            styles.tag,
                            pressed ? styles.tagPressed : undefined,
                        ]}>DLC</Text>}
                </View>
            )}
        </Pressable>
    );
}
import { Text, TouchableOpacity, FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useApi } from "../../hooks/useApi";

import { BackgroundWrapper } from "../../components/common/BackgroundWrapper";
import { ListHeader } from "../../components/common/ListHeader";

import { safeAreaBottomPadding } from "../../utils/constants";

export function PersonasScreen({ favourites = undefined }) {
    const navigation = useNavigation();
    const personaData = useApi().persona;

    return (
        <BackgroundWrapper>
            <ListHeader title={favourites !== undefined ? "Favourites" : "Personas"} />

            <FlatList
                data={favourites !== undefined ? favourites : Object.keys(personaData)}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate("PersonaDetailScreen", { personaName: item })} key={item}>
                        <Text style={{color: "white"}}>{item}</Text>
                    </TouchableOpacity>
                )}
                contentContainerStyle={{gap: 10, padding: 10, paddingBottom: safeAreaBottomPadding}}
            />
        </BackgroundWrapper>
    );
}
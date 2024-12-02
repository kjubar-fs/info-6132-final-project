import { Text, TouchableOpacity, FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { safeAreaBottomPadding } from "../../utils/constants";

export function FavouritesScreen({favourites}) {
    const navigation = useNavigation();


    return (
        <FlatList
            data={favourites}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("PersonaDetailScreen", { personaName: item })} key={item}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            )}
            contentContainerStyle={{gap: 10, padding: 10, paddingBottom: safeAreaBottomPadding}}
        />
    );
}
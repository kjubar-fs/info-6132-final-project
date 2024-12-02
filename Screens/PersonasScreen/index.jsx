import { Text, TouchableOpacity, FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useApi } from "../../hooks/useApi";

import { safeAreaBottomPadding } from "../../utils/constants";

export function PersonasScreen() {
    const navigation = useNavigation();

    const personaData = useApi().persona

    return (
        <FlatList
            data={Object.keys(personaData)}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("PersonaDetailScreen", { personaName: item })} key={item}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            )}
            contentContainerStyle={{gap: 10, padding: 10, paddingBottom: safeAreaBottomPadding}}
        />
    );
}
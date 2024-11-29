import { Text, TouchableOpacity, FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

// TODO: replace this with data from API
import personaData from "../../dummyData/PersonaDataRoyal.json";

import { safeAreaBottomPadding } from "../../utils/constants";

export function PersonasScreen() {
    const navigation = useNavigation();

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
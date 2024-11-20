import { View, Text } from "react-native";

import { useRoute } from "@react-navigation/native";

// TODO: replace this with data from API
import personaData from "../../dummyData/PersonaDataRoyal.json";

export function PersonaDetailScreen() {
    const route = useRoute();
    const personaName = route.params.personaName;

    return (
        <View>
            <Text>{personaName}</Text>
            <Text>Arcana: {personaData[personaName].arcana}</Text>
        </View>
    );
}
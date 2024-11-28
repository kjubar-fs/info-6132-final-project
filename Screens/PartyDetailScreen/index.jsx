import { View, Text, ScrollView } from "react-native";

import { useRoute } from "@react-navigation/native";

// TODO: replace this with data from API
import partyData from "../../dummyData/PartyDataRoyal.json";

export function PartyDetailScreen() {
    // get party member data
    const route = useRoute();
    const partyMemberName = route.params.partyMemberName;
    const personas = partyData[partyMemberName];

    return (
        <ScrollView style={{flex: 1, padding: 10, backgroundColor: "white"}} contentContainerStyle={{gap: 20}}>
            <Text>{JSON.stringify(personas, undefined, 4)}</Text>
        </ScrollView>
    );
}
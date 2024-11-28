import { Text, FlatList, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

// TODO: replace this with data from API
import partyData from "../../dummyData/PartyDataRoyal.json";

export function PartyScreen() {
    const navigation = useNavigation();

    return (
        <FlatList
            data={Object.keys(partyData)}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("PartyDetailScreen", { partyMemberName: item })} key={item}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            )}
            style={{padding: 10}}
            contentContainerStyle={{gap: 10, paddingBottom: 10}}
        />
    );
}
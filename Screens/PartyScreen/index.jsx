import { Text, FlatList, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { useApi } from "../../hooks/useApi";

import { safeAreaBottomPadding } from "../../utils/constants";

export function PartyScreen() {
    const navigation = useNavigation();
    const partyData = useApi().party

    return (
        <FlatList
            data={Object.keys(partyData)}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("PartyDetailScreen", { partyMemberName: item })} key={item}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            )}
            contentContainerStyle={{gap: 10, padding: 10, paddingBottom: safeAreaBottomPadding}}
        />
    );
}
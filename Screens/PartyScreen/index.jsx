import { Text, FlatList, TouchableOpacity, ImageBackground } from "react-native";

import { useNavigation } from "@react-navigation/native";

// TODO: replace this with data from API
import partyData from "../../dummyData/PartyDataRoyal.json";

import { safeAreaBottomPadding, safeAreaTopPadding } from "../../utils/constants";

export function PartyScreen() {
    return (
        // TODO: find a better background for party/persona list
        <ImageBackground source={require("../../assets/chainsBg.webp")} style={{flex: 1}}>
            <FlatList
                data={Object.keys(partyData)}
                renderItem={({ item }) => (
                    <PartyMember key={item} name={item} />
                )}
                contentContainerStyle={{gap: 10, paddingHorizontal: 10, paddingTop: safeAreaTopPadding, paddingBottom: safeAreaBottomPadding}}
            />
        </ImageBackground>
    );
}

function PartyMember({ name }) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={() => navigation.navigate("PartyDetailScreen", { partyMemberName: name })}>
            <Text>{name}</Text>
        </TouchableOpacity>
    );
}
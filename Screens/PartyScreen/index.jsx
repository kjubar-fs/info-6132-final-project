import { Text, FlatList, Pressable, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

// TODO: replace this with data from API
import partyData from "../../dummyData/PartyDataRoyal.json";

import { ListHeader } from "../../components/common/ListHeader";
import { BackgroundWrapper } from "../../components/common/BackgroundWrapper";

import { partyImages } from "../../utils/imageMaps";
import styles from "./styles";

export function PartyScreen() {
    return (
        // TODO: find a better background for party/persona list
        <BackgroundWrapper>
            <ListHeader title="Party Members" />

            <FlatList
                data={Object.keys(partyData)}
                renderItem={({ item }) => (
                    <PartyMember key={item} name={item} />
                )}
                contentContainerStyle={styles.listContainer}
            />
        </BackgroundWrapper>
    );
}

function PartyMember({ name }) {
    const navigation = useNavigation();

    return (
        <Pressable
            onPress={() => navigation.navigate("PartyDetailScreen", { partyMemberName: name })}
            style={styles.btnContainer}
        >
            {({ pressed }) => (
                <>
                <Image
                    source={partyImages[name]}
                    resizeMode="contain"
                    style={pressed ? styles.partyImagePressed : styles.partyImage}
                />

                <Text style={pressed ? styles.partyNamePressed : styles.partyName}>{name}</Text>
                </>
            )}
        </Pressable>
    );
}
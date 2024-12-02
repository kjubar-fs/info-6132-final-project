import { Text, FlatList, ImageBackground, Pressable, Image, View } from "react-native";

import { useNavigation } from "@react-navigation/native";

// TODO: replace this with data from API
import partyData from "../../dummyData/PartyDataRoyal.json";

import { BackButton } from "../../components/common/BackButton";

import { partyImages } from "../../utils/imageMaps";
import styles from "./styles";

export function PartyScreen() {
    return (
        // TODO: find a better background for party/persona list
        <ImageBackground source={require("../../assets/chainsBg.webp")} style={styles.background}>
            <View style={styles.headerOuter}>
                <View style={styles.headerInner}>
                    <BackButton />

                    <Text style={styles.headerTitle}>Party Members</Text>

                    <View style={styles.headerSpacer} />
                </View>
            </View>

            <FlatList
                data={Object.keys(partyData)}
                renderItem={({ item }) => (
                    <PartyMember key={item} name={item} />
                )}
                contentContainerStyle={styles.listContainer}
            />
        </ImageBackground>
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
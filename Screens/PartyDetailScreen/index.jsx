import { ScrollView } from "react-native";

import { useRoute } from "@react-navigation/native";

// TODO: replace this with data from API
import partyData from "../../dummyData/PartyDataRoyal.json";

import { BackgroundWrapper } from "../../components/persona/BackgroundWrapper";
import { PersonaDetails } from "../../components/persona/PersonaDetails";

export function PartyDetailScreen() {
    // get party member data
    const route = useRoute();
    const partyMemberName = route.params.partyMemberName;
    const personas = partyData[partyMemberName];

    return (
        <BackgroundWrapper>
            <ScrollView style={{flex: 1}} contentContainerStyle={{gap: 20}} showsVerticalScrollIndicator={false}>
                {Object.keys(personas).map((personaName) => (
                    <PersonaDetails key={personaName} name={personaName} details={partyData[partyMemberName][personaName]} />
                ))}
            </ScrollView>
        </BackgroundWrapper>
    );
}
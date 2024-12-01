import { useState } from "react";

import { useRoute } from "@react-navigation/native";

// TODO: replace this with data from API
import partyData from "../../dummyData/PartyDataRoyal.json";

import { BackgroundWrapper } from "../../components/persona/BackgroundWrapper";
import { PersonaDetails } from "../../components/persona/PersonaDetails";
import { PersonaSwitcher } from "../../components/persona/PersonaSwitcher";

export function PartyDetailScreen() {
    // get party member data
    const route = useRoute();
    const partyMemberName = route.params.partyMemberName;
    const personas = partyData[partyMemberName];
    const totalPersonas = Object.keys(personas).length;
    const personaName = Object.keys(personas)[selectedPersona];
    const [selectedPersona, setSelectedPersona] = useState(0);

    return (
        <BackgroundWrapper>
            <PersonaDetails
                name={personaName}
                details={partyData[partyMemberName][personaName]}
                headerContent={<PersonaSwitcher value={selectedPersona} max={totalPersonas - 1} partyMember={partyMemberName} onValueChange={setSelectedPersona} />}
            />
        </BackgroundWrapper>
    );
}
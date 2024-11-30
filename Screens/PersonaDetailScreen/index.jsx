import { useRoute } from "@react-navigation/native";

import { BackgroundWrapper } from "../../components/persona/BackgroundWrapper";
import { PersonaDetails } from "../../components/persona/PersonaDetails";

// TODO: replace this with data from API
import personaData from "../../dummyData/PersonaDataRoyal.json";

export function PersonaDetailScreen() {
    // get persona data
    const route = useRoute();
    const personaName = route.params.personaName;
    const persona = personaData[personaName];

    return (
        <BackgroundWrapper>
            <PersonaDetails name={personaName} details={persona} />
        </BackgroundWrapper>
    );
}
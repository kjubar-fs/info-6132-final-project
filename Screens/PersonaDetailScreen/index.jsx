import { useRoute } from "@react-navigation/native";

import { PersonaDetails } from "../../components/persona/PersonaDetails";

// TODO: replace this with data from API
import personaData from "../../dummyData/PersonaDataRoyal.json";

export function PersonaDetailScreen() {
    // get persona data
    const route = useRoute();
    const personaName = route.params.personaName;
    const persona = personaData[personaName];

    return (
        <PersonaDetails name={personaName} details={persona} />
    );
}
import { useRoute } from "@react-navigation/native";

import { BackgroundWrapper } from "../../components/common/BackgroundWrapper";
import { PersonaDetails } from "../../components/persona/PersonaDetails";

import { useApi } from "../../hooks/useApi";

export function PersonaDetailScreen({favourites, setFavourites}) {
    // get persona data
    const route = useRoute();
    const personaName = route.params.personaName;
    const personaData = useApi().persona;
    const persona = personaData[personaName];

    return (
        <BackgroundWrapper>
            <PersonaDetails name={personaName} details={persona} favourites={favourites} setFavourites={setFavourites} />
        </BackgroundWrapper>
    );
}
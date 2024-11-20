import { View, Text } from "react-native";

import { useRoute } from "@react-navigation/native";

// TODO: replace this with data from API
import personaData from "../../dummyData/PersonaDataRoyal.json";

import { elementList, personaAffinities } from "../../utils/dataMaps";

export function PersonaDetailScreen() {
    // get persona data
    const route = useRoute();
    const personaName = route.params.personaName;
    const persona = personaData[personaName];

    return (
        <View style={{flex: 1, gap: 20, padding: 10, backgroundColor: "white"}}>
            <View style={{gap: 10}}>
                <Text>{personaName}</Text>
                <Text>Arcana: {persona.arcana}</Text>
                <Text>Trait: {persona.trait}</Text>
            </View>

            <View style={{flexDirection: "row", flexWrap: "wrap", gap: 10}}>
                {persona.elems.map((affinity, ix) => (
                    <Text key={ix} style={{flex: 1, flexBasis: "17%"}}>{personaAffinities[affinity]} {elementList[ix]}</Text>
                ))}
            </View>

            <View style={{gap: 7}}>
                <Text>Skills</Text>
                {Object.keys(persona.skills).map((skillName, ix) => {
                    let level = persona.skills[skillName];
                    if (level === 0) {
                        level = "Innate";
                    }
                    return <Text key={ix}>{level} - {skillName}</Text>;
                })}
            </View>
        </View>
    );
}
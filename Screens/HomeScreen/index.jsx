import { createStackNavigator } from "@react-navigation/stack";

import { ClockScreen } from "../ClockScreen/ClockScreen";
import { PersonasScreen } from "../PersonasScreen";
import { PersonaDetailScreen } from "../PersonaDetailScreen";
import { PartyScreen } from "../PartyScreen";
import { PartyDetailScreen } from "../PartyDetailScreen";

const Stack = createStackNavigator();

export function HomeScreen() {
    return (
        // TODO: hide header on all screens, make custom back buttons for personas and party screens
        <Stack.Navigator
            initialRouteName="ClockScreen"
        >
            <Stack.Screen
                name="ClockScreen"
                component={ClockScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="PersonasScreen"
                component={PersonasScreen}
            />

            <Stack.Screen
                name="PersonaDetailScreen"
                component={PersonaDetailScreen}
                options={({ route }) => ({
                    headerTitle: route.params.personaName,
                })}
            />

            <Stack.Screen
                name="PartyScreen"
                component={PartyScreen}
            />

            <Stack.Screen
                name="PartyDetailScreen"
                component={PartyDetailScreen}
                options={({ route }) => ({
                    headerTitle: route.params.partyMemberName,
                })}
            />
        </Stack.Navigator>
    );
}
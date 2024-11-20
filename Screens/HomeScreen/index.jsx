import { createStackNavigator } from "@react-navigation/stack";

import { ClockScreen } from "../ClockScreen/ClockScreen";
import { PersonasScreen } from "../PersonasScreen";
import { PartyScreen } from "../PartyScreen";

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
                name="PartyScreen"
                component={PartyScreen}
            />
        </Stack.Navigator>
    );
}
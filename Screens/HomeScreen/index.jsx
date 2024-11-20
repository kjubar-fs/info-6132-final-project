import { createStackNavigator } from "@react-navigation/stack";

import { ClockScreen } from "../ClockScreen/ClockScreen";

const Stack = createStackNavigator();

export function HomeScreen() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="ClockScreen"
                component={ClockScreen}
            />
        </Stack.Navigator>
    );
}
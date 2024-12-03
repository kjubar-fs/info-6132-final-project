import { createStackNavigator } from "@react-navigation/stack";

import { ClockScreen } from "../ClockScreen/ClockScreen";
import { PersonasScreen } from "../PersonasScreen";
import { PersonaDetailScreen } from "../PersonaDetailScreen";
import { PartyScreen } from "../PartyScreen";
import { PartyDetailScreen } from "../PartyDetailScreen";

const Stack = createStackNavigator();

export function HomeScreen({ logout, favourites, setFavourites }) {
    return (
        <Stack.Navigator
            initialRouteName="ClockScreen"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen
                name="ClockScreen"
            >
                {() => <ClockScreen logout={logout} />}
            </Stack.Screen>

            <Stack.Screen
                name="PersonasScreen"
                component={PersonasScreen}
            />

            <Stack.Screen
                name="PersonaDetailScreen"
                children={() => <PersonaDetailScreen favourites={favourites} setFavourites={setFavourites}/>}
            />

            <Stack.Screen
                name="PartyScreen"
                component={PartyScreen}
            />

            <Stack.Screen
                name="PartyDetailScreen"
                component={PartyDetailScreen}
            />

            <Stack.Screen
                name="FavouritesScreen"
                children={()=> <PersonasScreen favourites={favourites}/>}
            />
        </Stack.Navigator>
    );
}
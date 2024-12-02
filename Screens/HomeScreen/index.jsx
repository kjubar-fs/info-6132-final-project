import { createStackNavigator } from "@react-navigation/stack";

import { ClockScreen } from "../ClockScreen/ClockScreen";
import { PersonasScreen } from "../PersonasScreen";
import { PersonaDetailScreen } from "../PersonaDetailScreen";
import { PartyScreen } from "../PartyScreen";
import { PartyDetailScreen } from "../PartyDetailScreen";
import { FavouritesScreen } from "../FavouritesScreen/FavouritesScreen";

const Stack = createStackNavigator();

export function HomeScreen({ logout, favourites, setFavourites }) {
    return (
        // TODO: hide header on all screens, make custom back buttons for personas and party screens
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
                children={()=> <FavouritesScreen favourites={favourites}/>}
            />
        </Stack.Navigator>
    );
}
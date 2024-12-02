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
        >
            <Stack.Screen
                name="ClockScreen"
                options={{
                    headerShown: false,
                }}
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
                options={({ route }) => ({
                    headerTitle: route.params.personaName,
                    headerShown: false,
                })}
            />

            <Stack.Screen
                name="PartyScreen"
                component={PartyScreen}
                options={{
                    headerShown: false,
                }}
            />

            <Stack.Screen
                name="PartyDetailScreen"
                component={PartyDetailScreen}
                options={({ route }) => ({
                    headerTitle: route.params.partyMemberName,
                    headerShown: false,
                })}
            />

            <Stack.Screen
                name="FavouritesScreen"
                children={()=> <FavouritesScreen favourites={favourites}/>}
            />
        </Stack.Navigator>
    );
}
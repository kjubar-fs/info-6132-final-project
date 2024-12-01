import { Text, TouchableOpacity, FlatList } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { safeAreaBottomPadding } from "../../utils/constants";
import { useEffect, useState } from "react";
import { getFavouritesForUser } from "../../services/database/firebaseDb";
import { LoadingScreen } from "../LoadingScreen/LoadingScreen";
import { auth } from "../../config/firebase";

export function FavouritesScreen() {
    const navigation = useNavigation();

    const [favourites, setFavourites] = useState(undefined)

    useEffect(()=>{
        (async()=>{
            const favs = await getFavouritesForUser(auth.currentUser.uid)
            setFavourites(favs)
        })()
    },[])

    if(!favourites){
        return <LoadingScreen/>
    }

    return (
        <FlatList
            data={favourites}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => navigation.navigate("PersonaDetailScreen", { personaName: item })} key={item}>
                    <Text>{item}</Text>
                </TouchableOpacity>
            )}
            contentContainerStyle={{gap: 10, padding: 10, paddingBottom: safeAreaBottomPadding}}
        />
    );
}
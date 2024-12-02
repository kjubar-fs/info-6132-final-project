import { useEffect } from "react";
import { getFavouritesForUser } from "../../services/database/firebaseDb";
import { auth } from "../../config/firebase";
import { getAllDataFor } from "../../services/api/apiRequests";

export function AppLoader({ onLoaded, setFavourites, setApiData }) {
    useEffect(() => {
        // TODO: do API loading here
        (async () => {
            // getting all the data from the API
            const partyData = await getAllDataFor("Party")
            const personaData = await getAllDataFor("Persona")
            const itemData = await getAllDataFor("Item")
            const skillData = await getAllDataFor("Skill")
            // and passing it to the state variable managed by the context provider
            setApiData({
                party: partyData,
                persona: personaData,
                item: itemData,
                skill: skillData,
            })

            // get the favourites data from the database
            const favs = await getFavouritesForUser(auth.currentUser.uid)
            setFavourites(favs)

            // set the flag once the data has been loaded
            onLoaded();
        })();

        // TODO: remove this
        // setTimeout(() => {
        //     onLoaded();
        // }, 2500);
    }, []);

    return <></>;
}
import { useEffect } from "react";
import { getFavouritesForUser } from "../../services/database/firebaseDb";
import { auth } from "../../config/firebase";

export function AppLoader({ onLoaded, setFavourites }) {
    useEffect(() => {
        // TODO: do API loading here
        (async () => {
            // do operations

            // get teh favourites data from the database
            const favs = await getFavouritesForUser(auth.currentUser.uid)
            setFavourites(favs)

            // data loaded
            onLoaded();
        })();

        // TODO: remove this
        // setTimeout(() => {
        //     onLoaded();
        // }, 2500);
    }, []);

    return <></>;
}
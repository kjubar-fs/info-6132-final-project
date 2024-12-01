import { db } from "../../config/firebase";
import { setDoc, doc, getDoc, updateDoc } from "firebase/firestore";

const collectionName = "favourites"


// Creates a document in the database to store the favourites data for a user
// Returns a boolean value representing if the operation went through successfully or not
const initializeFavouritesForUser = async(uid) => {
    let result = false

    try{
        await setDoc(doc(db, collectionName, uid),{
            favourites: []
        })
        result = true
    }
    catch(e){
        console.debug(e)
        result = false
    }

    return result
}

const getFavouritesForUser = async(uid) => {
    let favs = []

    const docRef = doc(db, collectionName, uid);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
        favs = docSnap.data().favourites;
    } else {
        // docSnap.data() will be undefined in this case
        console.debug("Document not found");
    }

    return favs
}

const addFavouritesForUser = async(uid, name) => {
    let currentFavs = await getFavouritesForUser(uid)
    if(currentFavs.includes(name)){
        return true
    }
    else{
        currentFavs.push(name)
        await updateFavouritesForUser(uid, currentFavs)
    }
}

const removeFavourtiesForUser = async(uid, name) =>{
    let currentFavs = await getFavouritesForUser(uid)
    if(currentFavs.includes(name)){
        currentFavs = currentFavs.filter(names => names != name)
        await updateFavouritesForUser(uid, currentFavs)
    }
    else{
        return true
    }
}

const updateFavouritesForUser = async(uid,data) => {
    const docRef = doc(db, collectionName, uid);
    await updateDoc(docRef, {favourites: data});
}

export {initializeFavouritesForUser, getFavouritesForUser, removeFavourtiesForUser, addFavouritesForUser}
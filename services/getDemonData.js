import baseUrl,{ endpoints, p5rData } from "../config/personaApi";

const getPartyMembers = async() => {
    const url = baseUrl + p5rData + endpoints.party

    try{
        let result = await fetch(url).then(res => res.json())
        return result
    }
    catch(e){
        return e
    }

}

const getAllDemons = async() => {
    // construct the url for the demons endpoint
    const demonsEndpoint = baseUrl + p5rData + endpoints.demons
    try{
        const demonsResult = await fetch(demonsEndpoint).then(res => res.json())
        return demonsResult
    }
    catch(e){
        return e
    }
}

const getDemonByName = async(name) => {
    const searchName = name.trim()
    if(searchName == ""){
        return {}
    }
    try{
        // get the demons data
        const demonsResult = await getAllDemons()
        // if the demon is found there, return it
        if(demonsResult.hasOwnProperty(searchName)){
            return demonsResult[searchName]
        }
        else{
            // if not, search among the unique personas assigned to the party
            const partyResult = getPartyMembers()
            if(partyResult.hasOwnProperty(searchName)){
                return partyResult[searchName]
            }
            else{
                return {}
            }
        }
    }
    catch(e){
        return e
    }
}

const getAllShadows = async() => {
    const endpoint = baseUrl + p5rData + endpoints.enemies

    try{
        const shadowsResult = await fetch(endpoint).then(res => res.json())
        return shadowsResult
    }
    catch(e){
        return e
    }
}

const getShadowsByArea = async(area) => {
    let shadows = {}

    try{
        const allShadows = await getAllShadows()
        for(const [key, val] of Object.entries(allShadows)){
            if(val.areas == area){
                shadows[key] = val
            }
        }
    }
    catch(e){
        return e
    }
    return shadows
}

const getShadowsNamesByArea = async(area) => {
    let shadows = []

    try{
        const allShadows = await getAllShadows()
        for(const [key, val] of Object.entries(allShadows)){
            if(val.areas == area){
                shadows.push(key)
            }
        }
    }
    catch(e){
        return e
    }
    return shadows
}


export { getPartyMembers, getAllDemons, getDemonByName, getAllShadows, getShadowsByArea, getShadowsNamesByArea }
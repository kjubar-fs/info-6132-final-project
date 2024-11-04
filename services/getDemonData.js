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

const getDemonByName = async(name) => {
    const searchName = name.trim()
    if(searchName == ""){
        return {}
    }
    // construct the url for the demons endpoint
    const generalEndpoint = baseUrl + p5rData + endpoints.demons

    try{
        // get the demons data
        const demonsResult = await fetch(generalEndpoint).then(res => res.json())
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

export { getPartyMembers, getDemonByName }
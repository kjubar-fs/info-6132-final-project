const baseUrl = "https://persona-api-wrapper.vercel.app/api/persona5royal/"

const endpoints = ['Persona', 'Party', 'Item', 'Skill']

export const getAllDataFor = async(endpointName) => {
    let data = {}
    if(endpoints.includes(endpointName)){
        try{
            const url = `${baseUrl}${endpointName}DataRoyal.json`
            const results = await fetch(url).then(res => res.json())
            data = {...results}
        }
        catch(e){
            console.error(e)
        }
    }
    else{
        console.warn(`Endpoint ${endpointName} not found!`)
    }
    return data
}
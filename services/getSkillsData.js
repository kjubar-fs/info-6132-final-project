import baseUrl,{ generalData, generalSkillsEndpoint, p5rData, endpoints } from "../config/personaApi";

const getAllSkills = async() => {
    const url = baseUrl + p5rData + endpoints.skills

    try{
        const skills = await fetch(url).then(res => res.json())
        return skills
    }
    catch(e){
        return e
    }
}

// Function that retrieves a skill from the API by passing a string with its name
const getSkillByName = async(name) => {
    let skill = {}
    try{
        const allSkills = await getAllSkills()
        for(const [key, val] of Object.entries(allSkills)){
            if(val.a[0] == name){
                return allSkills[key]
            }
        }
        return {}
    }
    catch(e){
        return e
    }
}

// Function that takes a skill object as received from the API and normalizes its data to use it in the app
const getNormalizedSkillObject = async(skillData) => {
    let skill = {
        name: skillData.a[0],
        type: skillData.a[1],
        target: skillData.a[2]
    }
    const description = await getSkillDescription(skillData)
    skill.description = description
    return skill
}

// This function receives a skill object and returns the description for it
const getSkillDescription = async(skillData) => {
    // If the description is a pointer to the FMT table, we get the template from there
    if(skillData.c[1].startsWith("FMT")){
        skillData.c[1] = await getSkillDescriptionTemplateByName(skillData.c[1])
    }
    
    // then we create the description string
    let description = skillData.c[1]

    // and replace the placeholders for the numerical value and element in it
    if(description.includes("$1")){
        description = description.replace("$1", skillData.b[skillData.b.length -1])
    }
    if(description.includes("$2")){
        description = description.replace("$2", skillData.c[0])
    }
    // to then return the constructed description
    return description
}

// This function gets a single skill description template from the FMT table
const getSkillDescriptionTemplateByName = async(skillName) => {
    if(skillName.startsWith("FMT")){
        skillName = skillName.slice(3)
    }
    const allTemplates = await getAllSkillDescriptionTemplates()
    return allTemplates[skillName]
}

// This function gets all the available description templates in the FMT table
const getAllSkillDescriptionTemplates = async() => {
    const url = baseUrl + generalData + generalSkillsEndpoint
    try{
        const templates = await fetch(url).then(res => res.json())
        return templates
    }
    catch(e){
        return e
    }
}

export { getSkillDescription, getSkillByName, getNormalizedSkillObject }
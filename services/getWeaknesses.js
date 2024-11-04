import getElements from "./getElements"

export default getWeaknesses = (resistString) => {
    // get the list of applicable elements
    const elements = getElements()
    let weaknessesForDemon = {}
    // then assign the weakness or resistance for that element
    for(let i=0; i<resistString.length; i++){
        weaknessesForDemon[elements[i]] = weakness[resistString[i]]
    }

    return weaknessesForDemon
}

const weakness = {
    w: "weak",
    x: "weak",
    n: "null",
    N: "null",
    s: "resist",
    d: "absorb",
    r: "repells",
    a: "neutral",
    '-': "neutral"
}
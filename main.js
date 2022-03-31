//Create object

const excuse = {
    leadIn: [],
    perpetrator: [],
    delayFactor: []
}

//Create randomizer
let randomItem = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
}

//Assemble excuse
let assembleExcuse = () => {
    return `${selectRandom(excuse.leadIn)} ${selectRandom(excuse.perpetrator)} ${selectRandom(excuse.delayFactor)}`;
}


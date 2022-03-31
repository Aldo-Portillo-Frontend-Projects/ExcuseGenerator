//Create object

const excuse = {
    leadIn: ["I'm sorry but", 
            "Please forgive me", 
            "I beg you a thousand pardons", 
            "I apologize; however,", 
            "I'm not usually like this", 
            "You're never going to believe this", 
            "Guess what happened?!?!", 
            "Holy shit! Get this", 
            "Boy do I have a story for you", 
            "So I was minding my own business and boom!", 
            "The most unbelievable thing just happened", 
            "I couldn't be more apologetic but", 
            "Sorry I'm late,", 
            "I couldn't go because", 
            "I couldn't help it", 
            "This is a terrible excuse but",
            "This is going to sound crazy but",
            "Holy Moses!",
            "My bad",
            "I swear it wasn't my fault",
            "I lost track of time because",
            "I feel terrible, but",
            "Don't blame me"],
    perpetrator: ["your mom",
                "Princess Peach",
                "Godzilla",
                "The O-line of the '76 Dallas Cowboys",
                "a handicapped gentleman",
                "a triceratops named Penelope",
                "the inventor of the snuggie", 
                "the director of 101 Dalmations",
                "the little Asian kid from Indiana Jones",
                "a man with 6 fingers on hois right hand",
                "my mom",
                "Raiden from Mortal Kombat",
                "Mayor Max the Second",
                "the entire Roman Empire",
                "the ghost of Hitler",
                "a British chap",
                "a Hasidic Jew",
                "Kevin Spacey",
                "Kevin McCallister's real life fake tarantula",
                "Danny DeVito"
                ],
    delayFactor: ["gave me a hickey",
                "tried to kill me",
                "ran me over with a bicycle",
                "died in front of me",
                "ate my homework",
                "tried to seduce me",
                "beat me into submission",
                "hid my Trapper Keeper",
                "stole my bicycle",
                "slept with my uncle",
                "called me 'too gay to fly a kite' whatever that means",
                "stole my identity",
                "broke into my house",
                "put me in a Chinese finger trap",
                "came after me",
                "came on me",
                "texted racial slurs from my phone",
                "spin kicked me in the collar bone",
                "tried to sell me vacuum cleaners",
                "crapped in my gas tank",
                "made me golf in shoes filled with mac and cheese",
                "pulled me over in a stolen cop car and demanded fellatio",
                "made me find Jesus",
                "kept telling me knock knock jokes"
                ]
}

//Create randomizer
let randomItem = (arr) => {
    return arr[Math.floor(Math.random()*arr.length)];
}

//Assemble excuse
let assembleExcuse = () => {
    return `${randomItem(excuse.leadIn)} ${randomItem(excuse.perpetrator)} ${randomItem(excuse.delayFactor)}.`;
}

console.log(assembleExcuse());
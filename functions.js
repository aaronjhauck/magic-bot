const fetch   = require("node-fetch")
    , helper = require("./helpers");

/*
-- Scryfall Functions --
We are just using the endpoints that
require no input from the caller.
*/
async function getData(uri) {
    const response = await fetch(uri);
    return response.json();
}

async function getRandomGeneral() {
    const randomGeneral = "https://api.scryfall.com/cards/random?q=is%3Acommander";
    const data    = await getData(randomGeneral);
    const general = data.name;

    return general;
}

async function getRandomCard() {
    const randomCard = "https://api.scryfall.com/cards/random";
    const data = await getData(randomCard);

    if (data.set_type == "token") { 
        do {
            data = await getData(randomCard);
        }
        while(data.set_type == "token")
    }
    const card = data.name;

    return card;
}

/*
-- Helper Functions --
These are simply to make sentences.js
look a little cleaner and less noisy
*/
async function getCardArray(size) { return await loadAsync(new Array(size), getRandomCard);  }
function getPlayerArray(size)     { return load(new Array(size), helper.getPlayer);         }
function getInstantArray(size)    { return load(new Array(size), helper.getTopInstant);     }
function getSorceryArray(size)    { return load(new Array(size), helper.getTopSorcery);     }
function getTopCardArray(size)    { return load(new Array(size), helper.getTopCard);        }
function getCreatureArray(size)   { return load(new Array(size), helper.getTopCreature);    }
function getEnchantmentArray(size){ return load(new Array(size), helper.getTopEnchantment); }
function getLandArray(size)       { return load(new Array(size), helper.getTopLands);       }

/*
-- Array Builders --
Standard and async array builders
*/
function load(array, funct) {
    let len = array.length;

    for(let i = 0; i < len; i++){
        let ap = funct();

        if(array.includes(ap)){
            do {
                ap = funct();
            } while (array.includes(ap))
        }
        array[i] = ap;
    }
    return array;
}

async function loadAsync(array, funct) {
    let len = array.length;
    for(let i = 0; i < len; i++){
        array[i] = await funct();
    }
    return array;
}

module.exports = { 
    getRandomGeneral, getCardArray, getInstantArray,
    getPlayerArray, getSorceryArray ,getTopCardArray,
    getCreatureArray ,getEnchantmentArray ,getLandArray
}
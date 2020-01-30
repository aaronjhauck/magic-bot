const fetch   = require("node-fetch")
    , helper = require("./helpers");

/**
 * Fetch client
 * @param {uri} uri 
 * @returns {json}
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
        do    { data = await getData(randomCard); }
        while (data.set_type == "token")
    }
    const card = data.name;

    return card;
}

/**
 * Async Functions
 * @param {int} size 
 * @return {array}
 */
async function getCardArray(size) { return await loadAsync(size, getRandomCard); }

/**
 * Non Async Functions
 * @param {int} size 
 * @return {array}
 */
function getPlayerArray(size)     { return load(size, helper.getPlayer);         }
function getInstantArray(size)    { return load(size, helper.getTopInstant);     }
function getSorceryArray(size)    { return load(size, helper.getTopSorcery);     }
function getTopCardArray(size)    { return load(size, helper.getTopCard);        }
function getCreatureArray(size)   { return load(size, helper.getTopCreature);    }
function getEnchantmentArray(size){ return load(size, helper.getTopEnchantment); }
function getLandArray(size)       { return load(size, helper.getTopLands);       }

/**
 * Array builders
 * @param {int} size 
 * @param {function} funct 
 * @returns {array}
 */
function load(size, funct) {
    let array = new Array(size);
    let len   = array.length;

    for(let i = 0; i < len; i++){
        let item = funct();
        if(array.includes(item)){
            do    { item = funct(); } 
            while (array.includes(item))
        }
        array[i] = item;
    }
    return array;
}

async function loadAsync(size, funct) {
    let array = new Array(size);
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
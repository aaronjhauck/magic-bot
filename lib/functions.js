const fetch  = require("node-fetch")
    , helper = require("./helpers")
    , utils  = require("node-blutils");

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
    let data = await getData(randomCard);

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
async function getCardArray(size) { return await utils.loadAsync(size, getRandomCard); }

/**
 * Non Async Functions
 * @param {int} size 
 * @return {array}
 */
function getPlayerArray(size)     { return utils.load(size, helper.getPlayer);         }
function getInstantArray(size)    { return utils.load(size, helper.getTopInstant);     }
function getSorceryArray(size)    { return utils.load(size, helper.getTopSorcery);     }
function getTopCardArray(size)    { return utils.load(size, helper.getTopCard);        }
function getCreatureArray(size)   { return utils.load(size, helper.getTopCreature);    }
function getEnchantmentArray(size){ return utils.load(size, helper.getTopEnchantment); }
function getLandArray(size)       { return utils.load(size, helper.getTopLands);       }

module.exports = { 
    getRandomGeneral, getCardArray, getInstantArray,
    getPlayerArray, getSorceryArray ,getTopCardArray,
    getCreatureArray ,getEnchantmentArray ,getLandArray
}

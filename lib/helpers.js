const list = require("../resource/data.json");

/**
 * Get random value
 */
function getPlayer()         { return shuffle(list.players);      }
function getTopCard()        { return shuffle(list.topcards);     }
function getReaction()       { return shuffle(list.reactions);    }
function getTopLands()       { return shuffle(list.lands);        }
function getTopSorcery()     { return shuffle(list.soceries);     }
function getTopInstant()     { return shuffle(list.instants);     }
function getTopCreature()    { return shuffle(list.creatures);    } 
function getInstantPhase()   { return shuffle(list.instantphases);}
function getTopEnchantment() { return shuffle(list.enchantments); }

/**
 * 
 * @param {array} array 
 * @returns {index}
 */
function shuffle(array) {
    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random()*counter);
        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array[Math.floor(Math.random()*array.length)];
}

module.exports = { 
    getTopCard, getTopInstant, getTopSorcery, 
    getPlayer, getTopCreature, getInstantPhase, 
    getTopEnchantment, getTopLands, getReaction, shuffle
};
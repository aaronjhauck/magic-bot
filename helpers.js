const list = require("./data.json");

function getPlayer()         { return indexShuffle(list.players);      }
function getTopCard()        { return indexShuffle(list.topcards);     }
function getReaction()       { return indexShuffle(list.reactions);    }
function getTopLands()       { return indexShuffle(list.lands);        }
function getTopSorcery()     { return indexShuffle(list.soceries);     }
function getTopInstant()     { return indexShuffle(list.instants);     }
function getTopCreature()    { return indexShuffle(list.creatures);    } 
function getInstantPhase()   { return indexShuffle(list.instantphases);}
function getTopEnchantment() { return indexShuffle(list.enchantments); }

function indexShuffle(array) { 
    array = arrayShuffle(array);
    return array[Math.floor(Math.random()*array.length)]; 
}

function arrayShuffle(array) {
    let counter = array.length;

    while (counter > 0) {
        let index = Math.floor(Math.random()*counter);
        counter--;

        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
}

function PrintStd(string) {
    console.log(string);
}

module.exports = { 
    getTopCard, getTopInstant, getTopSorcery, 
    getPlayer, getTopCreature, getInstantPhase, 
    getTopEnchantment, getTopLands, getReaction, arrayShuffle,
    indexShuffle
};
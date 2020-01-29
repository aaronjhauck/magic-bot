const list = require("./data.json");

function getPlayer()         { return shuffle(list.players);      }
function getTopCard()        { return shuffle(list.topcards);     }
function getReaction()       { return shuffle(list.reactions);    }
function getTopLands()       { return shuffle(list.lands);        }
function getTopSorcery()     { return shuffle(list.soceries);     }
function getTopInstant()     { return shuffle(list.instants);     }
function getTopCreature()    { return shuffle(list.creatures);    } 
function getInstantPhase()   { return shuffle(list.instantphases);}
function getTopEnchantment() { return shuffle(list.enchantments); }

function shuffle(arr) { return arr[Math.floor(Math.random()*arr.length)]; }

function PrintStd(string) {
    console.log(string);
}

module.exports = { 
    getTopCard, getTopInstant, getTopSorcery, 
    getPlayer, getTopCreature, getInstantPhase, 
    getTopEnchantment, getTopLands, getReaction, PrintStd 
};
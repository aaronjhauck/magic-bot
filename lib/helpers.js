const list  = require("../resources/data.json");
const utils = require("node-blutils");

/**
 * Get random value
 */
function getPlayer()         { return utils.shuffle(list.players);       }
function getTopCard()        { return utils.shuffle(list.topcards);      }
function getReaction()       { return utils.shuffle(list.reactions);     }
function getTopLands()       { return utils.shuffle(list.lands);         }
function getTopSorcery()     { return utils.shuffle(list.soceries);      }
function getTopInstant()     { return utils.shuffle(list.instants);      }
function getTopCreature()    { return utils.shuffle(list.creatures);     } 
function getInstantPhase()   { return utils.shuffle(list.instantphases); }
function getTopEnchantment() { return utils.shuffle(list.enchantments);  }
function getSaltyCard()      { return utils.shuffle(list.salt);          }

module.exports = { 
    getTopCard, getTopInstant, getTopSorcery, 
    getPlayer, getTopCreature, getInstantPhase, 
    getTopEnchantment, getTopLands, getReaction,
    getSaltyCard
};
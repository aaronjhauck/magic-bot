var list = require("./data.json");

function getTopCard () {
    var card = list.topcards[Math.floor(Math.random()*list.topcards.length)];

    return card;
}

function getTopSorcery() {
    var spell = list.soceries[Math.floor(Math.random()*list.soceries.length)];

    return spell;
}

function getTopInstant() {
    var spell = list.instants[Math.floor(Math.random()*list.instants.length)];

    return spell;
}

function getPlayer() {
    var player = list.players[Math.floor(Math.random()*list.players.length)];

    return player;
}

function getTopCreature() {
    var creature = list.creatures[Math.floor(Math.random()*list.creatures.length)];

    return creature;
}

function PrintStd (string) {
    console.log(string);
}

module.exports = { getTopCard, getTopInstant, getTopSorcery, getPlayer, getTopCreature, PrintStd };
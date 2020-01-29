var fetch   = require("node-fetch");
var helpers = require("./helpers");

/*
-- Scryfall Functions --
The following functions utilize the scryfall api.
Most scryfall api calls require some kind of id from
the caller to fetch data. We are just using the endpoints that
require no input from the caller.
*/
async function getData(uri) {
    const response = await fetch(uri);

    return response.json();
}

async function getRandomGeneral() {
    var randomGeneral = "https://api.scryfall.com/cards/random?q=is%3Acommander";
    var data    = await getData(randomGeneral);
    var general = data.name;

    return general;
}

async function getRandomCard() {
    var randomCard = "https://api.scryfall.com/cards/random";
    var data = await getData(randomCard);

    if (data.set_type == "token") { 
        do {
            data = await getData(randomCard);
        }
        while(data.set_type == "token")
    }
    var card = data.name;

    return card;
}

/*
-- Helper Functions --
These are simply to make sentences.js
look a little cleaner and less noisy
*/
async function getCardArray(size) {
    var data   = [];
    var length = size;

    for(var i = 0; i < length; i++){
        data.push(await getRandomCard());
    }

    return data;
}

function getPlayerArray(size) {
    var data = [];
    var length = size;

    for(var i = 0; i < length; i++){
        data.push(helpers.getPlayer());
    }

    if (data[0] == data[1]) { 
        do {
            data[1] = helper.getPlayer();
        }
        while(data[0] == data[1])
    }

    return data;
}

function getInstantArray(size) {
    var data = [];
    var length = size;

    for(var i = 0; i < length; i++){
        data.push(helpers.getTopInstant());
    }

    return data;
}

function getSorceryArray(size) {
    var data = [];
    var length = size;

    for(var i = 0; i < length; i++){
        data.push(helpers.getTopSorcery());
    }

    return data;
}

module.exports = { 
    getRandomGeneral, getCardArray, getInstantArray,
    getPlayerArray, getSorceryArray
}
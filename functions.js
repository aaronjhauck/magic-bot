const fetch   = require("node-fetch")
    , helpers = require("./helpers");

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
async function getCardArray(size) {
    let data   = [];

    return await loadAsync(data, size, getRandomCard);
}

function getPlayerArray(size) {
    let data = [];
    data = load(data, size, helpers.getPlayer);

    if (data[0] == data[1]) { 
        do {
            data[1] = helpers.getPlayer();
        }
        while(data[0] == data[1])
    }
    return data;
}

function getInstantArray(size) {
    let data = [];
    
    return load(data, size, helpers.getTopInstant);
}

function getSorceryArray(size) {
    let data = [];
    
    return load(data, size, helpers.getTopSorcery);
}

function load(array, size, funct) {
    for(let i = 0; i < size; i++){
        array.push(funct());
    }
    return array;
}

async function loadAsync(array, size, funct) {
    for(let i = 0; i < size; i++){
        array.push(await funct());
    }
    return array;
}

module.exports = { 
    getRandomGeneral, getCardArray, getInstantArray,
    getPlayerArray, getSorceryArray
}
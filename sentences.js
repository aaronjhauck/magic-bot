var top = require("./helpers");
var fetch = require("node-fetch");
var randomGeneral = "https://api.scryfall.com/cards/random?q=is%3Acommander";
//var randomCard = "https://api.scryfall.com/cards/random";

async function getData(uri) {
    const response = await fetch(uri);

    return response.json();
}

async function getRandomGeneral() {
    var data = await getData(randomGeneral);
    var general = data.name;

    return general;
}

async function a () {
    var general = await getRandomGeneral();
    var card    = top.getTopCard();
    var player  = top.getPlayer();

    top.PrintStd(`${player} found a way to include ${card} in their ${general} deck`);
}

function b () {
    var player = top.getPlayer();
    var card   = top.getTopSorcery();

    top.PrintStd(`${player} attempts an endstep ${card}. The table doesn't protest.`);
}

function c() {
    var player = top.getPlayer();
    var card   = top.getTopInstant();

    top.PrintStd(`In their second main phase - ${player} jams ${card}`);
}

function d() {
    var player = top.getPlayer();
    var card   = top.getTopInstant();
    var creature = top.getTopCreature();

    top.PrintStd(`Moving to combat with ${creature}, ${player} left ${card} up to protect against any funny business`);
}

function e() {
    var player = top.getPlayer();

    top.PrintStd(`Hey ${player} - did ya read the card?`);
}

function getSentence() {
    var arry_of_functions = [
        a,
        b,
        c,
        d,
        e
    ];

    var pos = Math.floor(Math.random()*arry_of_functions.length);

    arry_of_functions[pos]();
}

module.exports = { getSentence };
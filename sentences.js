var top = require("./helpers");
var fetch = require("node-fetch");
var randomGeneral = "https://api.scryfall.com/cards/random?q=is%3Acommander";
var randomCard = "https://api.scryfall.com/cards/random";

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
    var data    = await getData(randomGeneral);
    var general = data.name;

    return general;
}

async function getRandomCard() {
    var data = await getData(randomCard);
    var card = data.name;

    return card;
}

/*
-- Sentence Functions --
There is probably a much better way of doing this, but 
for now - this implementation is fine. We want to generate 
a new random variable every time the function is called. To add a 
new sentence, define the function as a letter and add  it to the 
getSentence() method at the bottom of this file
*/
async function a () {
    var general = await getRandomGeneral();
    var card    = top.getTopCard();
    var player  = top.getPlayer();

    top.PrintStd(`${player} found a way to include ${card} in his ${general} deck.`);
}

function b () {
    var player  = top.getPlayer();
    var player2 = top.getPlayer();
    
    if (player == player2) { 
        do {
            player2 = top.getPlayer();
        }
        while(player == player2)
    }

    var phase = top.getInstantPhase();
    var card   = top.getTopSorcery();

    top.PrintStd(`${player} attempts to resolve ${card} at ${player2}'s ${phase}.`);
}

function c() {
    var player = top.getPlayer();
    var card   = top.getTopInstant();

    top.PrintStd(`In his second main phase, ${player} jams ${card}.`);
}

function d() {
    var player      = top.getPlayer();
    var card        = top.getTopInstant();
    var creature    = top.getTopCreature();
    var enchantment = top.getTopEnchantment();

    top.PrintStd(`Moving to combat with ${creature}, ${player} left ${card} up to protect his ${enchantment}.`);
}

function e() {
    var player = top.getPlayer();

    top.PrintStd(`Hey ${player} - did you read the card?`);
}

async function f() {
    var player = top.getPlayer();

    var a = await getRandomCard();
    var b = await getRandomCard();
    var c = top.getTopCard();
    var d = await getRandomCard();
    var e = top.getTopCard();

    top.PrintStd(`${player} mulled to a hand of ${a}, ${b}, ${c}, ${d}, and ${e}.`)
}

function g() {
    var player  = top.getPlayer();
    var player2 = top.getPlayer();

    if (player == player2) { 
        do {
            player2 = top.getPlayer();
        }
        while(player == player2)
    }

    var card   = top.getTopCard();
    var card2  = top.getTopInstant();

    top.PrintStd(`At a critical juncture, ${player} casts ${card}. ${player2} snap responds with ${card2}.`);
}

function h() {
    var player  = top.getPlayer();
    var player2 = top.getPlayer();
    
    if (player == player2) { 
        do {
            player2 = top.getPlayer();
        }
        while(player == player2)
    }

    var spell = top.getTopCard();
    var creature = top.getTopCreature();

    top.PrintStd(`Victory is close. With ${spell} in hand, ${player} slams ${creature}. ${player2} has no response.`);
}

function i() {
    var player      = top.getPlayer();
    var enchantment = top.getTopEnchantment();
    var spell       = top.getTopInstant();

    top.PrintStd(`An overwhelmed ${player} decides ${enchantment} is a threat on the board. He considers burning a ${spell}.`);
}

function j() {
    var player = top.getPlayer();

    top.PrintStd(`${player} declines to pay (2) for Smothering Tithe.`);
}

function k() { 
    var player   = top.getPlayer();
    var card = top.getTopCard();

    top.PrintStd(`During a cut, ${player} sighs while noticing his ${card} at the bottom of his deck.`);
}

function l() {
    var player = top.getPlayer();
    var card   = top.getTopSorcery();
    var card2  = top.getTopEnchantment();

    var mins   = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    top.PrintStd(`It's a toss up between ${card} and ${card2}. ${player} spends ${mins} minutes tutoring.`);
}

async function m() {
    var player = top.getPlayer();

    var a = await getRandomCard();
    var b = await getRandomCard();
    var c = await getRandomCard();

    top.PrintStd(`After activating Top - ${player} puts ${a}, ${b}, and ${c} back in the same order he found them in.`)
}

function n() {
    var player  = top.getPlayer();
    var player2 = top.getPlayer();

    if (player == player2) { 
        do {
            player2 = top.getPlayer();
        }
        while(player == player2)
    }

    var spell = top.getTopInstant();

    top.PrintStd(`${player} begins to scoop after ${player2}'s crucial ${spell}.`);
}

/* -- Random Sentence Generator --
We want to load our unique sentence functions 
into an array and then select an index and random
and fill the mad-lib variables at run time. When
defining a new sentence, make sure it's included 
in the array below
*/
function getSentence() {
    var arry_of_functions = [
        a, b, c,
        d, e, f,
        g, h, i,
        j, k, l,
        m, n
    ];

    var pos = Math.floor(Math.random()*arry_of_functions.length);

    arry_of_functions[pos]();
}

//Expose the only function that executes 
module.exports = { getSentence };
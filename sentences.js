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
-- Sentence Functions --
There is probably a much better way of doing this, but 
for now - this implementation is fine. We want to generate 
a new random variable every time the function is called. To add a 
new sentence, define the function as a letter and add  it to the 
getSentence() method at the bottom of this file
*/
async function a() {
    var general = await getRandomGeneral();
    var card    = top.getTopCard();
    var player  = top.getPlayer();

    return `${player} snuck a copy of ${card} into his ${general} deck.`;
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

    var phase  = top.getInstantPhase();
    var spell  = top.getTopSorcery();

    return `During ${player}'s ${phase}, ${player2} attempts an instant speed ${spell}.`;
}

function c() {
    var player = top.getPlayer();
    var spell  = top.getTopInstant();

    return `Moving to his second main phase, ${player} tanks and jams ${spell}.`;
}

function d() {
    var player      = top.getPlayer();
    var card        = top.getTopInstant();
    var creature    = top.getTopCreature();
    var enchantment = top.getTopEnchantment();

    return `Moving to combat with ${creature}, ${player} made sure to leave ${card} up to protect his ${enchantment}.`;
}

function e() {
    var player = top.getPlayer();

    return `Hey ${player} - did you read the card?`;
}

async function f() {
    var player = top.getPlayer();

    var a = top.getTopLands();
    var b = await getRandomCard();
    var c = top.getTopCard();
    var d = top.getTopLands();
    var e = top.getTopCard();

    return `${player} mulled to a hand of ${a}, ${b}, ${c}, ${d}, and ${e}.`;
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
    var spell  = top.getTopInstant();

    return `At a critical juncture, ${player} attempts to resolve ${card}. ${player2} snap responds with ${spell}.`;
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

    var card     = top.getTopCard();
    var creature = top.getTopCreature();
    var reaction = top.getReaction();

    return `Victory is close. With ${card} in hand, ${player} slams ${creature}. ${player2} ${reaction}.`;
}

function i() {
    var player      = top.getPlayer();
    var enchantment = top.getTopEnchantment();
    var spell       = top.getTopInstant();

    return `An overwhelmed ${player} decides ${enchantment} is a threat on the board. He considers burning a ${spell}.`;
}

function j() {
    var player = top.getPlayer();

    return `${player} declines to pay (2) for Smothering Tithe.`;
}

function k() { 
    var player = top.getPlayer();
    var card   = top.getTopCard();

    return `During a cut, ${player} sighs while noticing his ${card} at the bottom of his deck.`;
}

function l() {
    var player      = top.getPlayer();
    var spell       = top.getTopSorcery();
    var enchantment = top.getTopEnchantment();

    var mins   = Math.floor(Math.random() * (10 - 1 + 1)) + 1;

    return `It's a toss up between ${spell} and ${enchantment}, so ${player} spends ${mins} minutes tutoring.`;
}

async function m() {
    var player = top.getPlayer();

    var a = await getRandomCard();
    var b = top.getTopLands();
    var c = await getRandomCard();

    return `After activating Top - ${player} puts ${a}, ${b}, and ${c} back in the exact order he found them in.`;
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

    var spell = top.getTopSorcery();

    return `${player2}'s crucial, game winning ${spell} is put on the stack. ${player} is already shuffling for the next game`;
}

function o() {
    var player = top.getPlayer();
    var card   = top.getTopCard();

    return `It's clear to everyone at the table that ${player} has the ${card}.`;
}

function p() {
    var player   = top.getPlayer();
    var card     = top.getTopCard();
    var creature = top.getTopCreature();

    return `${player}'s hands shook uncontrollably as he held his two of his combo pieces - ${card} and ${creature}.`;
}

function q() {
    var player  = top.getPlayer();
    var sorcery = top.getTopSorcery();
    var instant = top.getTopInstant();

    return `Carefull not to tap out, ${player} casts ${sorcery} with ${instant} backup.`;
}

function r() {
    var player  = top.getPlayer();
    var player2 = top.getPlayer();

    if (player == player2) { 
        do {
            player2 = top.getPlayer();
        }
        while(player == player2)
    }

    var instant = top.getTopInstant();

    return `After looking at the top card of ${player}'s library, ${player2} decided to leave ${instant} right where it was`;
}

function s() {
    var player  = top.getPlayer();    
    var player2 = top.getPlayer();
    var player3 = top.getPlayer();
    var player4 = top.getPlayer();

    if (player == player2) { 
        do {
            player2 = top.getPlayer();
        }
        while(player == player2)
    }

    var instant  = top.getTopInstant();
    var instant2 = top.getTopInstant();
    var instant3 = top.getTopInstant();
    var sorcery  = top.getTopSorcery();

    return `The stack is ${player}'s ${instant} and ${player2}'s ${instant2} repsonding to ${player3}'s ${sorcery}. ${player4} clutches his ${instant3}, wondering if now is the time.`
}

function t() {
    var player  = top.getPlayer();
    var player2 = top.getPlayer();

    if (player == player2) { 
        do {
            player2 = top.getPlayer();
        }
        while(player == player2)
    }

    var creature = top.getTopCreature();
    var card     = top.getTopCard();

    return `${player} nearly punted the game for failing to read the text on ${player2}'s ${creature}. ${card} should help him stabilize.`;
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
        m, n, o,
        p, q, r,
        s,t
    ];

    var pos = Math.floor(Math.random()*arry_of_functions.length);

    return arry_of_functions[pos]();
}

//Expose the only function that executes 
module.exports = { getSentence };
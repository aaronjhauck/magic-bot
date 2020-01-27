var top = require("./helpers");
var fetch = require("node-fetch");
var randomGeneral = "https://api.scryfall.com/cards/random?q=is%3Acommander";
var randomCard = "https://api.scryfall.com/cards/random";

async function getData(uri) {
    const response = await fetch(uri);

    return response.json();
}

async function getRandomGeneral() {
    var data = await getData(randomGeneral);
    var general = data.name;

    return general;
}

async function getRandomCard() {
    var data = await getData(randomCard);
    var card = data.name;

    return card;
}
async function a () {
    var general = await getRandomGeneral();
    var card    = top.getTopCard();
    var player  = top.getPlayer();

    top.PrintStd(`${player} found a way to include ${card} in his ${general} deck`);
}

function b () {
    var player = top.getPlayer();
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

    top.PrintStd(`In their second main phase, ${player} jams ${card}`);
}

function d() {
    var player = top.getPlayer();
    var card   = top.getTopInstant();
    var creature = top.getTopCreature();
    var enchantment = top.getTopEnchantment();

    top.PrintStd(`Moving to combat with ${creature}, ${player} left ${card} up to protect his ${enchantment}`);
}

function e() {
    var player = top.getPlayer();

    top.PrintStd(`Hey ${player} - did you read the card?`);
}

async function f() {
    var player = top.getPlayer();
    var a = await getRandomCard();
    var b = await getRandomCard();
    var c = await getRandomCard();
    var d = await getRandomCard();
    var e = await getRandomCard();

    top.PrintStd(`${player} kept a double mull hand of ${a}, ${b}, ${c}, ${d}, and ${e}`)
}

function g() {
    var player = top.getPlayer();
    var player2 = top.getPlayer();

    if (player == player2) { 
        do {
            player2 = top.getPlayer();
        }
        while(player == player2)
    }

    var card   = top.getTopSorcery();
    var card2  = top.getTopInstant();

    top.PrintStd(`At a critical juncture, ${player} casts ${card}. ${player2} snap responds with ${card2}`);
}

function h() {
    var player = top.getPlayer();
    var player2 = top.getPlayer();
    
    if (player == player2) { 
        do {
            player2 = top.getPlayer();
        }
        while(player == player2)
    }

    var creature = top.getTopCreature();

    top.PrintStd(`Victory is close, ${player} slams ${creature}. ${player2} has no reponse.`);
}

function i() {
    var player = top.getPlayer();
    var enchantment = top.getTopEnchantment();

    top.PrintStd(`An overwhelmed ${player} misevaluates ${enchantment} as a threat on the board`);
}

function j() {
    var player = top.getPlayer();

    top.PrintStd(`${player} declines to pay (2) for Smothering Tithe`);
}

function k() { 
    var player = top.getPlayer();
    var creature = top.getTopCreature();

    top.PrintStd(`During a cut, ${player} notices ${creature} at the bottom of his deck`);
}

function l() {
    var player = top.getPlayer();
    var card = top.getTopSorcery();
    var card2 = top.getTopSorcery();

    var mins = Math.floor(Math.random() * 10);

    top.PrintStd(`${player} spends ${mins} tutoring because he can't decide between ${card} or ${card2}`);
}

function getSentence() {
    var arry_of_functions = [
        a,
        b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l
    ];

    var pos = Math.floor(Math.random()*arry_of_functions.length);

    arry_of_functions[pos]();
}

module.exports = { getSentence };
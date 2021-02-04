const helper = require("./helpers")
    , utils  = require("./utils");

//#region Sentence functions
const a = async() => {
    let general = await helper.getRandomGeneral();
    let card    = helper.getTopCard();
    let player  = helper.getPlayer();

    return `${player} snuck a copy of ${card} into his ${general} deck.`;
}

const b = () => {
    let players = helper.getPlayerArray(2);
    let phase   = helper.getInstantPhase();
    let sorcery = helper.getTopSorcery();

    return `During ${players[0]}'s ${phase}, ${players[1]} attempts an instant speed ${sorcery}.`;
}

const c = () => {
    let player    = helper.getPlayer();
    let saltyCard = helper.getSaltyCard();

    return `Moving to his second main phase, ${player} tanks and jams ${saltyCard}.`;
}

const d = () => {
    let player      = helper.getPlayer();
    let instant     = helper.getTopInstant();
    let creature    = helper.getTopCreature();
    let enchantment = helper.getTopEnchantment();

    return `Moving to combat with ${creature}, ${player} made sure to leave ${instant} up to protect his ${enchantment}.`;
}

const e = () => {
    let player = helper.getPlayer();

    return `I'm sorry ${player}, did you read the card?`;
}

const f = async() => {
    let player = helper.getPlayer();
    let card   = await helper.getCardArray(1);
    let lands  = helper.getLandArray(2);
    let cards  = helper.getTopCardArray(2);

    return `${player} mulled to a hand of ${lands[0]}, ${card[0]}, ${cards[0]}, ${lands[1]}, and ${cards[1]}.`;
}

const g = () => {
    let players   = helper.getPlayerArray(2);
    let saltyCard = helper.getSaltyCard();
    let instant   = helper.getTopInstant();

    return `At a critical juncture, ${players[0]} attempts to resolve ${saltyCard}. ${players[1]} snap responds with ${instant}.`;
}

const h = () => {
    let players   = helper.getPlayerArray(2);
    let saltyCard = helper.getSaltyCard();
    let creature  = helper.getTopCreature();
    let reaction  = helper.getReaction();

    return `Victory is close. With ${saltyCard} in hand, ${players[0]} slams ${creature}. ${players[1]} ${reaction}.`;
}

const i = () => {
    let player      = helper.getPlayer();
    let enchantment = helper.getTopEnchantment();
    let instant      = helper.getTopInstant();

    return `An overwhelmed ${player} decides ${enchantment} is a threat on the board. He considers burning a ${instant}.`;
}

const j = () => {
    let player = helper.getPlayer();

    let decision  = utils.shuffle([
        "decides", 
        "declines", 
        "forgets", 
        "wants", 
        "encourages others"
    ]);

    return `${player} ${decision} to pay for Smothering Tithe.`;
}

const k = () => { 
    let player = helper.getPlayer();
    let card   = helper.getTopCard();

    return `During a cut, ${player} sighs while noticing his ${card} at the bottom of his deck.`;
}

const l = () => {
    let player = helper.getPlayer();
    let lands  = helper.getLandArray(2);

    return `${player} is trying to pretend they had ${lands[0]} and ${lands[1]} untapped the whole time.`;
}

const m = async() => {
    let player = helper.getPlayer();
    let cards  = await helper.getCardArray(2);
    let land   = helper.getTopLands();

    return `After activating Top - ${player} puts ${cards[0]}, ${land}, and ${cards[1]} back in the exact order he found them in.`;
}

const n = () => {
    let players   = helper.getPlayerArray(2);
    let saltyCard = helper.getSaltyCard();

    return `${players[0]}'s crucial, game winning ${saltyCard} is put on the stack. ${players[1]} is already shuffling for the next game`;
}

const o = () => {
    let player    = helper.getPlayer();
    let saltyCard = helper.getSaltyCard();

    return `It's clear to everyone at the table that ${player} has the ${saltyCard}.`;
}

const p = () => {
    let player   = helper.getPlayer();

    return `"No, ${player} -- ETB and Cast are two different triggers."`;
}

const q = () => {
    let player    = helper.getPlayer();
    let saltyCard = helper.getSaltyCard();
    let instant   = helper.getTopInstant();

    return `Careful not to tap out, ${player} casts ${saltyCard} with ${instant} backup.`;
}

const r = () => {
    let players = helper.getPlayerArray(2);
    let instant = helper.getTopInstant();

    return `After looking at the top card of ${players[0]}'s library, ${players[1]} decided to leave ${instant} right where it was`;
}

const s = () => {
    let players  = helper.getPlayerArray(4);
    let instants = helper.getInstantArray(3);
    let sorcery  = helper.getTopSorcery();

    return `The stack is ${players[0]}'s ${instants[0]} and ${players[1]}'s ${instants[1]} responding to ${players[2]}'s ${sorcery}. ${players[3]} clutches his ${instants[2]}, wondering if now is the time.`
}

const t = () => {
    let players  = helper.getPlayerArray(2);
    let creature = helper.getTopCreature();
    let card     = helper.getTopCard();

    return `${players[0]} nearly punted the game for failing to read the text on ${players[1]}'s ${creature}. ${card} should help him stabilize.`;
}

const u = () => {
    let players   = helper.getPlayerArray(2);
    let saltyCard = helper.getSaltyCard();

    return `${players[0]} is miles away from their ${saltyCard} while ${players[1]} has them in the strip mine lock.`;
}

const v = () => {
    let players     = helper.getPlayerArray(2);
    let enchantment = helper.getTopEnchantment();
    let instant      = helper.getTopInstant();

    return `${players[0]} notices ${players[1]} forgot about the text on his ${enchantment}. A copy of ${instant} will be huge later.`;
}

const w = () => {
    let players  = helper.getPlayerArray(2);

    return `"See for yourself, I'm done answering questions" exclaims ${players[0]} when ${players[1]} asks if he's got any flying blockers.`;
}

const x = async() => {
    let players = helper.getPlayerArray(2);
    let general = await helper.getRandomGeneral();
    let sorcery = helper.getTopSorcery();

    return `${players[0]} is excited about his brand new ${general} deck. He'll be less so when ${players[1]} shows him ${sorcery}.`;
}

const y = () => {
    let player      = helper.getPlayer();
    let enchantment = helper.getTopEnchantment();
    let creature    = helper.getTopCreature();

    return `The playgroup pitched in and got ${player} a copy of ${enchantment} - which should pair well with his ${creature}.`;
}

const z = () => {
    let players = helper.getPlayerArray(3);
    let sorcery = helper.getTopSorcery();
    let complaint = utils.shuffle([
        "casual gameplay", 
        "the board state", 
        "Niv-Mizzet", 
        "missed land drops", 
        "Winter Orb", 
        "Elspeth"
    ]);

    return `${players[0]} and ${players[1]} complain about ${complaint} as ${players[2]} untaps and jams ${sorcery}.`;
}

const aa = () => {
	let players = helper.getPlayerArray(2);

	return `${players[0]} scrys a handful of cards during ${players[1]}'s turn and decides to scoop it up`;
}

const a1 = () => {
    let players   = helper.getPlayerArray(2);
    let saltyCard = helper.getSaltyCard();
    let card      = helper.getTopCard();

    return `${players[0]} thinks it's pretty unfair ${players[1]} runs a ${card}. Ironic coming from a guy playing ${saltyCard}.`;
}

const b1 = () => {
    let player    = helper.getPlayer();
    let saltyCard = helper.getSaltyCard();

    return `${player}'s ordered his phases draw, untap, declare attackers, undeclare, redeclare, cast ${saltyCard}, missed upkeep trigger, discard, land for turn.`;
}

const c1 = () => {
    let players = helper.getPlayerArray(1);
    let artifact = helper.getTopArtifact();

    return `No, ${players[0]} - we can't rewind because you forgot to activate your ${artifact}.`;
}

const d1 = () => {
    let players = helper.getPlayerArray(1);

    return `${players[0]} plays with his lands at the top of his playmat.`
}

const e1 = () => {
    let players  = helper.getPlayerArray(2);
    let creature = helper.getTopCreature();
    let instant  = helper.getTopInstant();

    return `${players[0]} should have waited on his ${creature}. ${players[1]} was practically telegraphing the ${instant}.`
}

const f1 = () => {
    let players = helper.getPlayerArray(1);
    let sorcery = helper.getTopSorcery();

    return `Sorry ${players[0]}, ${sorcery} won't save you this time.`
}

const g1 = () => {
    let players = helper.getPlayerArray(2);
    let creatures = helper.getCreatureArray(2);

    return `In careless combat, ${players[0]} swings ${creatures[0]} into ${players[1]}'s ${creatures[1]}.`;
}

const h1 = () => {
    let players = helper.getPlayerArray(2);
    let creatures = helper.getCreatureArray(1);

    return `No spells will resolve if ${players[0]} has anything to say about it. Looks like ${players[1]} is on the ${creatures[0]} beat down plan.`;
}

const i1 = () => {
    let players     = helper.getPlayerArray(2);
    let enchantment = helper.getTopEnchantment();
    let card        = helper.getSaltyCard();

    return `Still unsure what ${players[0]}'s ${enchantment} does, ${players[1]} assumes his ${card} will handle it.`;
}

const j1 = () => {
    let land = helper.getTopLands();
    let players = helper.getPlayerArray(1);

    return `"${land}, tapped. Pass.", exclaims ${players[0]}.`;
}

const k1 = () => {
    let players = helper.getPlayerArray(1);
    let creature = helper.getTopCreature();
    let enchantment = helper.getTopEnchantment();

    return `Fully tilted, ${players[0]} puts ${creature} and ${enchantment} on the board at the same time - paying for each after he cast them.`;
}

const l1 = () => {
    let players = helper.getPlayerArray(1);

    return `${players[0]} is absolutely in the tank.`;
}

const m1 = () => {
    let players = helper.getPlayerArray(1);
    let salt    = helper.getSaltyCard();

    return `It was a long road, but ${salt} finally brought ${players[0]} kicking and screaming across the finish line.`;
}

const n1 = () => {
    let card = utils.shuffle([
        'Pyroblast', 
        'Hydroblast', 
        'Veil', 
        'a Lily plus', 
        'the Dack minus'
    ]);

    let reaction = utils.shuffle([
        'a real beating', 
        'a bit overkill', 
        'a little late', 
        'pretty irrelevant'
    ]);

    return `Actually ${card} is ${reaction} here.`;
}

const o1 = () => {
    let player     = helper.getPlayer();
    let saltyCard  = helper.getSaltyCard();

    return `The threat has been identified - it's ${player}'s ${saltyCard}.`
}

const p1 = () => {
    let player      = helper.getPlayer();
    let topCreature = helper.getTopCreature();
    let topSorcery  = helper.getTopSorcery();
    let saltyCard   = helper.getSaltyCard();

    return `For ${player}, 8 life is chump change when Sylvan offers ${topCreature}, ${topSorcery}, and ${saltyCard}.`;
}

const q1 = () => {
    let player     = helper.getPlayer();
    let topInstant = helper.getTopInstant();

    return `Tanking on a pre-combat ${topInstant}, ${player} is finally starting to get on everyone's nerves.`;
}

const r1 = () => {
    let player  = helper.getPlayer();
    let topCard = helper.getTopCard();

    return `The Ashiok downtick is particularly brutal for ${player} as the only copy of ${topCard} gets sent to the the shadow realm.`;
}

const s1 = () => {
    let player = helper.getPlayer();

    return `"Well, I'm out of win cons" - ${player}.`;
}

const t1 = () => {
    let player  = helper.getPlayer();
    let phase   = helper.getInstantPhase();
    let sorcery = helper.getTopSorcery();

    return `Little tef finally let ${player} achieve the dream of a ${phase} ${sorcery}. Absolutley no one is impressed.`;
}

const u1 = () => {
    let player  = helper.getPlayer();
    let topCard = helper.getTopCard();

    return `${player} was always dead to a top deck ${topCard}.`;
}

const v1 = () => {
    let player       = helper.getPlayer();
    let topSaltyCard = helper.getSaltyCard();

    return `${player} is turbo-mulling to a ${topSaltyCard}.`;
}

const w1 = () => {
    let player      = helper.getPlayer();
    let topCreature = helper.getTopCreature();

    return `"Hey you bet. ${topCreature}. You absolutely bet, pal" - ${player}.`;
}

const x1 = () => {
    let player       = helper.getPlayer();
    let topSaltyCard = helper.getSaltyCard();

    return `After the game, ${player} entertained the playgroup with stories of past tourneys and showed off a binder page full of mint ${topSaltyCard} proxies.`;
}

//#region Sentence functions

//#region Sentence generator
let functArray = [
    a, c, d, e, g, i, j, l, m, 
    n, p, q, s, u, v, w, x, z,
    aa, a1, b1, c1, e1, f1, h1,
    i1, l1, m1, n1, o1, p1, q1,
    r1, s1, t1, u1, v1, x1
];
module.exports.getSentence = () => { return utils.shuffle(functArray)(); }
//#endregion Sentence generator
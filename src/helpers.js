const list        = require("./data.json")
    , fetch       = require("node-fetch");
    
const { shuffle, load, loadAsync } = require("./utils");

//#region Randomized single objects
module.exports.getPlayer         = () => { return shuffle(list.players);       }
module.exports.getTopCard        = () => { return shuffle(list.topcards);      }
module.exports.getReaction       = () => { return shuffle(list.reactions);     }
module.exports.getTopLands       = () => { return shuffle(list.lands);         }
module.exports.getTopSorcery     = () => { return shuffle(list.soceries);      }
module.exports.getTopInstant     = () => { return shuffle(list.instants);      }
module.exports.getTopCreature    = () => { return shuffle(list.creatures);     } 
module.exports.getInstantPhase   = () => { return shuffle(list.instantphases); }
module.exports.getTopEnchantment = () => { return shuffle(list.enchantments);  }
module.exports.getSaltyCard      = () => { return shuffle(list.salt);          }
module.exports.getTopArtifact    = () => { return shuffle(list.artifacts);     }
//#endregion Randomized single objects

//#region Randomized array objects
module.exports.getPlayerArray      = (size) => { return load(size, this.getPlayer);         }
module.exports.getInstantArray     = (size) => { return load(size, this.getTopInstant);     }
module.exports.getSorceryArray     = (size) => { return load(size, this.getTopSorcery);     }
module.exports.getTopCardArray     = (size) => { return load(size, this.getTopCard);        }
module.exports.getCreatureArray    = (size) => { return load(size, this.getTopCreature);    }
module.exports.getEnchantmentArray = (size) => { return load(size, this.getTopEnchantment); }
module.exports.getLandArray        = (size) => { return load(size, this.getTopLands);       }
module.exports.getSaltyCardArray   = (size) => { return load(size, this.getSaltyCard);      }
module.exports.getArtifactArray    = (size) => { return load(size, this.getTopArtifact);    }

//Async Card Array
module.exports.getCardArray        = async(size) => { return await loadAsync(size, this.getRandomCard); }
//#endregion Randomized array objects

//#region REST Methods
const getData = async(uri) => {
    const response = await fetch(uri);
    return response.json();
}

module.exports.getRandomGeneral = async() => {
    const randomGeneral = "https://api.scryfall.com/cards/random?q=is%3Acommander";
    const data    = await getData(randomGeneral);
    const general = data.name;

    return general;
}

module.exports.getRandomCard = async() => {
    const randomCard = "https://api.scryfall.com/cards/random";
    let data = await getData(randomCard);

    if (data.set_type == "token") { 
        do    { data = await getData(randomCard); }
        while (data.set_type == "token")
    }
    const card = data.name;

    return card;
}
//#endregion REST Methods
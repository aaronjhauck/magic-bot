module.exports.print = (str) => { console.log(str);   }
module.exports.warn  = (str) => { console.warn(str);  }
module.exports.err   = (str) => { console.error(str); }

module.exports.shuffle = (list) => {
    let counter = list.length;

    while (counter > 0) {
        let index = Math.floor(Math.random()*counter);
        counter--;

        let temp      = list[counter];
        list[counter] = list[index];
        list[index]   = temp;
    }

    return list[Math.floor(Math.random()*list.length)];
}

module.exports.load = (size, funct) => {
    let array = new Array(size);
    let len   = array.length;

    for(let i = 0; i < len; i++){
        let item = funct();
        if(array.includes(item)){
            do    { item = funct(); } 
            while (array.includes(item))
        }
        array[i] = item;
    }
    return array;
}

module.exports.loadAsync = async(size, funct) => {
    let array = new Array(size);
    let len = array.length;

    for(let i = 0; i < len; i++){
        array[i] = await funct();
    }
    return array;
}
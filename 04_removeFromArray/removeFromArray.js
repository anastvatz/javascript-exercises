const removeFromArray = function(array, ...args) {
    args.forEach(element => {
        if (array.includes(element)){
            
            let index = array.indexOf(element);
            
            let x = array.splice(index, 1);
        }
    });
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

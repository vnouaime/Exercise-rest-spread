// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
// }

const filterOutOdds = (...list) => list.filter((num) => num % 2 === 0)


// findMin(1,4,12,-3) // -3
// findMin(1,-1) // -1
// findMin(3,1) // 1

const findMin = (...list) => list.reduce((num, currentNum) => Math.min(...list))


// mergeObjects({a:1, b:2}, {c:3, d:4}) // {a:1, b:2, c:3, d:4}
const mergeObjects = (objectOne, objectTwo) => ({...objectOne, ...objectTwo})


// doubleAndReturnArgs([1,2,3],4,4) // [1,2,3,8,8]
// doubleAndReturnArgs([2],10,4) // [2, 20, 8]
const doubleAndReturnArgs = (arr, ...vals) => [...arr, ...vals.map(v => v * 2)]


//remove a random element in the items array and return a new array without that item. //
const removeRandom = (...items) => {
    let value = Math.floor(Math.random() * items.length);
    console.log(value);
    return [items.slice(0, value) + "," + items.slice(value + 1)];
    
}
  

// Return a new array with every item in array1 and array2
const extend = (array1, array2) => [...array1, ...array2]


// Return a new object with all the keys and values from obj and a new key/value pair 
const addKeyVal = (obj, key, val) => ({ ...obj, [key] : val })


// Return a new object with a key removed
const removeKey = (obj, key) => {
    let newObject = {...obj};
    delete newObject[key];
    return newObject;
}

// Combine two objects and return a new object
const combine = (objectOne, objectTwo) => ({...objectOne, ...objectTwo})


// Return a new object with a modified key and value
const update = (obj, key, val) => ({ ...obj, [key] : val})
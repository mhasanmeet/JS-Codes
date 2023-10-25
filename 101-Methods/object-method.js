
// Here is an Object
let data = {
    class10 : 20,
    class11: 30
}

// Return Object Keys
console.log(Object.keys(data));

// Returns Object Values
console.log(Object.values(data));

// Returns an Array with each keys and values of the objects
console.log(Object.entries(data));

// Object inheritance, create a new object by assign method
let data2 = Object.assign({}, data);
data2.class12 = 40;

console.log(data2);
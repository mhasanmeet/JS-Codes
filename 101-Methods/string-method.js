
let firstName = "mahmudul";
let lastName = "Hasan"
let fullName = "Mahmudul Hasan"

// CharAt(), Returns Character Index Number
console.log(firstName.charAt(3)); // OutPut: m

// charCodeAt(), Returns the unicode of character at that positions
console.log(lastName.charCodeAt(2)); // Retuen 115

// Concat(), Concatenation
console.log(firstName.concat(" ").concat(lastName)); // Return "Mahmudul Hasan"

// indexOf()
console.log(lastName.indexOf("N")); // Not Found, Default returns -1
console.log(lastName.indexOf("n")); // return 4

// lastIndexOf()
console.log(firstName.lastIndexOf("u"));

// match()
console.log(fullName.match("h")); // Return: [ 'h', index: 2, input: 'Mahmudul Hasan', groups: undefined ]

// replace()
// search()
// slice()
// split()
// substr()
// toLowerCase()
// toUpperCase()
// valueOf()

//find max value from array
let data = [10, 20, 30, 50, 60];
let maxValue = Math.max(...data);
console.log(maxValue)

//generate a random number between 1 to 100
let random = Math.floor(Math.random() * 100) + 1;
console.log(random)

//remove duplicate from array
let duplicateArray = [10, 30, 40, 10];
let removeDuplicate = [...new Set(duplicateArray)]
console.log(removeDuplicate)

//get current data
console.log(new Date().toString())

//find the minimum value from the array
let data2 = [10, 20, 30, 50, 60];
let minValue = Math.min(...data2)
console.log(minValue)
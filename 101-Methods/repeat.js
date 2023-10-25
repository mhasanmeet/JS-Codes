// Repeat In JavaScript

let data = "";

for (let i = 0; i < 5; i++){
    data += "🔥";
}

console.log(data);

// we can make it easy by existing method, by Array Method
let data2 = Array(5).join("🔥");
console.log(data2);

//We have another method
let data3 = "🔥".repeat(5);
console.log(data3);

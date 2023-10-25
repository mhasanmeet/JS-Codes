## JavaScript Best Practices

* (JavaScript best practices)[https://dev.to/dawsoncodes/write-better-code-by-following-these-javascript-best-practices-25mp]
* (Principles of Writing Consistent, Idiomatic JavaScript)[https://github.com/rwaldron/idiomatic.js/]
* (Google JavaScript Style Guide)[https://google.github.io/styleguide/jsguide.html]
* (Airbnb JavaScript Style Guide)[https://github.com/airbnb/javascript]
 

## Some best practices

<details>
<summary>Use `for...of` instead of `for` loops</summary>

```js

//❌ Using traditional for loops
const cities = ["Dhaka", "Rajshahi", "Khulna", "Barishal", "Sylhet"]
for (let i = 0; i < cities.length; i++) {
    const city = cities[i]
    console.log(city)
}


//✅ Using for...of loops
for(const city of cities) {
    console.log(city)
}

```
</details>



<details>
<summary>Do not make everything in one function, instead do in multiple function</summary>

```JS 
//❌ Do not make everything in one function
function calculateOrderTotal(order) {
    let total = 0;

    for (let i = 0; i < order.items.length; i++) {
        total += order.items[i].price * order.items[i].quantity
    }

    let tax = total * 0.07

    return total + tax
}


//✅ Do things in multiple function
function calculateOrderTotal(items) {
    let total = 0;

    for (let i = 0; i < items.length; i++){
        total += items[i].price * items[i].quantity
    }

    return total
}

function calculateTax(total) {
    return total * 0.07
}

function calculateOrderTotal(order) {
    let subTotal = calculateSubTotal(order.items)

    let tax = calculateTax(subTotal)

    return subtotal + tax
}
```
</details>



* Avoid hoisting in **Class**
* Avoid Mutating Function Arguments



<details>
<summary>Handle Promises Correctly</summary>

```JS
//❌ Not handling promises correctly
async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json()

    return data
}



//✅ Handling promises correctly
async function fetchData() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
      const data = await response.json()

      return data   
    } catch(error) {
      throw new Error(error)
    }
}

```
</details>



<details>
<summary>Avoid the Over-Nesting in your code</summary>

```JS
//❌ Nesting code blocks too much and not using the return keyword
function checkSum(num) {
    if (num > 0) {
        console.log("Number is positive")
    } else {
        if (num < 0) {
            console.log("Number is negative")
        } else {
            console.log("Number is Zero")
        }
    }
}



//✅ Using the return keyword instead of the else statement
function checkSum(sum) {
    if (num > 0) {
        console.log("Number is positive")
        return
    }

    if (num < 0) {
        console.log("Number is negative")
        return
    }

    console.log("Number is Zero")
}

```
</details>
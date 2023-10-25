// cart with local storage system
let shop = document.getElementById("shop");


// // let's get a empty basket array
// const basket = [];

// If basket have items in local storage, get items or basket is an default empty array 
let basket = JSON.parse(localStorage.getItem("cart")) || [];


const generateShop = () =>{
    // get the shopData by mapping and put into shop section
    return (shop.innerHTML = shopData.map((product) => {

        // destructuring the products objects value
        let {id, img, name, desc, price} = product;

        // search if there is any local storage data available
        const search = basket.find((quantity) => quantity.id === id) || [];

        // if item is not available then put default 0 and if available from LS then put the LS data
        const itemQty = search.item === undefined ? 0 : search.item;

        return `
        <div class="product" id=product-id-${id}>
            <img src="${img}" alt="">
    
            <div class="container">
                <h2>${name}</h2>
                <p>${desc}</p>
    
                <div class="price">
                    <p>$ ${price}</p>
    
                    <div class="qty">
                        <p class="btn" onClick="decrement(${id})">➖</p>
                        <p id=${id}>${itemQty}</p>
                        <p class="btn" onClick="increment(${id})">➕</p>
                    </div>
                </div>
            </div>
        </div>
        `
    }).join(""))
}

// initiate generate shop
generateShop()


// increment the item
const increment = (id) =>{
    // first find product id
    const search = basket.find((product) => product.id === id);

    // if product is not selected then select one
    if(search === undefined){
        basket.push({
            id,
            item: 1
        })
    }
    // if product selected then increment the item
    else{
        if (search.item < 50){
            search.item += 1;
        }
    }
    
    // initiate update function here
    updateItem(id);
    
    // set increment item in local storage
    localStorage.setItem("cart", JSON.stringify(basket));
}



// Decrement the item
const decrement = (id) =>{
    const search = basket.find((product) => product.id === id);

    // if there is not any item then stop, else if quantity is = 0, stop decrementing
    if(search === undefined) return
    else if(search.item === 0) return;
    // if quantity is not 0, then decrementing
    else{
        search.item -= 1;
    }
    
    // initiate update function here
    updateItem(id);

    // remove specific item from local storage if there is no product select against the specific item
    basket = basket.filter((product) => product.item !== 0 )
    // set decrement item in local storage
    localStorage.setItem("cart", JSON.stringify(basket));
}


// Update the item quantity of increment and decrement and show
const updateItem = (id) =>{
    // first find product id
    const search = basket.find((product) => product.id === id);

    // insert the update item number by dynamic id
    document.getElementById(id).innerHTML = search.item;

    // initiate calculation cart function here
    calcCart();
}


// calculate total quantity and update the cart number
const calcCart = () =>{
    // 
    const cartItem = document.getElementById("cart");
    const totalItem = (basket.map((qty) => qty.item).reduce((prev, next) => prev + next, 0));
    cartItem.innerHTML = totalItem;
}

// call function here so the cart total item show
calcCart()



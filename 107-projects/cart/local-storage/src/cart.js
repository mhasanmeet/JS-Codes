let totalBill = document.getElementById("total-bill");
let cartItem = document.getElementById("cart-items");

// If basket have items in local storage, get items or basket is an default empty array 
let basket = JSON.parse(localStorage.getItem("cart")) || [];


// calculate total quantity and update the cart number
const calcCart = () =>{
    // 
    const cartItem = document.getElementById("cart");
    let totalItem = (basket.map((qty) => qty.item).reduce((prev, next) => prev + next, 0));
    cartItem.innerHTML = totalItem;
};

// call function here so the cart total item show
calcCart();



// generate cart item section
const generateCartItem = () => {
    if(basket.length > 0){
        return (cartItem.innerHTML = basket.map((product) => {

        // destructuring the products objects value
        let {id, item} = product;

        // get item from data by id and match with LS id
        const search = shopData.find((item) => item.id === id) || [];

        // we can destructure search and get data and use without `search.img` to just `img`
        //const {img, name, sku} = search;

            return `
                <div class="products">                
                    <img src=${search.img} alt="">
                    <div class="details">
                        <h3>${search.name}</h3>
                        <p>${search.sku}</p>
                        <button onClick="removeItem(${id})" id="rm-item">❌</button>

                        <div class="price-item">
                            <p>Qty: </p>
                            <div class="qty">
                                <p class="btn" onClick="decrement(${id})">➖</p>
                                <p id=${id}>${item}</p>
                                <p class="btn" onClick="increment(${id})">➕</p>
                            </div>
                            <h3>$${search.price}</h3>
                            <h2>$${item * search.price}</h2>
                        </div>
                    </div>
                </div>
            `
        }).join(""));
    }
    else{
        totalBill.innerHTML = `
            <h2>Cart is empty</h2>
            <a href="index.html">
                <button>Back to home</button>
            </a> 
        `;
        cartItem.innerHTML = ``;
    }
};

// initiate generateCartItem function
generateCartItem();



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

    // render the generateCartItem function and remove item section if there is no item 
    generateCartItem();
    
    // set increment item in local storage
    localStorage.setItem("cart", JSON.stringify(basket));
};



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
    basket = basket.filter((product) => product.item !== 0 );

    // render the generateCartItem function and remove item section if there is no item 
    generateCartItem();

    // set decrement item in local storage
    localStorage.setItem("cart", JSON.stringify(basket));
};



// Update the item quantity of increment and decrement and show
const updateItem = (id) =>{
    // first find product id
    const search = basket.find((product) => product.id === id);

    // insert the update item number by dynamic id
    document.getElementById(id).innerHTML = search.item;

    // initiate calculation cart function here
    calcCart();

    // initiate calculation total amount function here
    calculateAmount();
};


// remove entire item by clicking cross check
const removeItem = (id) =>{
    const selectedItem  = id;
    
    // remove specific item from the basket
    basket = basket.filter((item) => item.id !== selectedItem);
    
    // render the generateCartItem function update the states of items
    generateCartItem();
    
    calculateAmount();

    // update top cart items
    calcCart();
    
    // then update local storage with modified items
    localStorage.setItem("cart", JSON.stringify(basket));
};

// calculate total amount
const calculateAmount = () =>{
    if(basket.length > 0){
        const amount = basket.map((product) => {
            // get local storage id, item by destructuring
            const {id, item} = product;

            // get item from data by id and match with LS id
            const search = shopData.find((item) => item.id === id) || [];

            // then get item and price from data and calculate by multiplying
            return item * search.price
        }).reduce((prev, next) => prev + next, 0)

        totalBill.innerHTML = `
            <h2>Total Amount $${amount}</h2>
            <button class="checkout">Checkout</button>
            <button onClick="clearCart()" class="rmAll">RemoveAll</button>
        `
    }
    else return
};

calculateAmount();



// clear entire cart 
const clearCart = () =>{
    // if clearCart onClick function clicked them remove item from LS and and section
    basket = [];
    // render cart item for update section
    generateCartItem();

    // update top cart items
    calcCart();
    
    // then update local storage after item removed
    localStorage.setItem("cart", JSON.stringify(basket));
}


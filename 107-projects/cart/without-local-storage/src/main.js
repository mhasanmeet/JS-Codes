let shop = document.getElementById("shop");

const generateShop = () =>{
    // get the shopData by mapping and put into shop section
    return (shop.innerHTML = shopData.map((product) => {

        // destructuring the products objects value
        let {id, img, name, desc, price} = product;

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
                        <p id=${id}>0</p>
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


// let's get a empty basket array first
const basket = [];


// increment the item
const increment = (id) =>{
    // first find product id
    const search = basket.find((product) => product.id === id)

    // if product is not selected then select one
    if(search === undefined){
        basket.push({
            id,
            item: 1
        })
    }
    // if product selected then increment the item
    else{
        search.item += 1;
    }

    // initiate update function here
    updateItem(id)
}



// Decrement the item
const decrement = (id) =>{
    const search = basket.find((product) => product.id === id)

    // if quantity is = 0, stop decrementing
    if(search.item === 0) return;

    // if quantity is not 0, then decrementing
    else{
        search.item -= 1;
    }

    // initiate update function here
    updateItem(id)
}


// Update the item quantity of increment and decrement and show
const updateItem = (id) =>{
    // first find product id
    const search = basket.find((product) => product.id === id)

    // insert the update item number by dynamic id
    document.getElementById(id).innerHTML = search.item

    // initiate calculation cart function here
    calcCart()
}


// calculate total quantity and update the cart number
const calcCart = () =>{
    // 
    const cartItem = document.getElementById("cart")
    const totalItem = (basket.map((qty) => qty.item).reduce((prev, next) => prev + next, 0));
    cartItem.innerHTML = totalItem;
}






let iconCart = document.querySelector('.cart');
let cart = document.querySelector('.cart');
let container = document.querySelector('.container');
let close = document.querySelector('.close');

iconCart.addEventListener('click', () => {
    if (cart.style.right === '0px') {
        cart.style.right = '-100px';
        container.style.transform = 'translateX(0)';
    } else {
        cart.style.right = '0px';
        container.style.transform = 'translateX(-400px)';
    }
});

close.addEventListener('click', () => {
    cart.style.right = '-100px';
    container.style.transform = 'translateX(0)';
});
let product = null;
//get data file json
fetch ('product.json')
.then( response => response.json())
.then(data => {
    products = data;
    addDataToHTML();
})
//show data in list html
function addDataToHTML(){
   //remove  data default in html
   let listProductHTML =document.querySelector('.listProduct')
   listProductHTML.innerHTML ='';

   // add new datas 
   if (products != null) {
    products.forEach(product => {
        let newProduct = document.createElement('div');
        newProduct.classList.add('item');
        newProduct.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <div class="price">$${product.price}</div>
            <button onclick="addCart(${product.id})">Add To Cart</button>
        `;
        listProductHTML.appendChild(newProduct);
    });
}

let listCart = {};

// Function to get cart data from cookies
function checkCart() {
    let cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('listCart='));
    if (cookieValue) {
        listCart = JSON.parse(cookieValue.split('=')[1]);
    }
}
checkCart();

function addCart(idProduct) {
    let productCopy = JSON.parse(JSON.stringify(products));
    let dataProduct = productCopy.find(product => product.id === idProduct);
    
    if (!dataProduct) return;
    
    if (!listCart[idProduct]) {
        listCart[idProduct] = { ...dataProduct, quantity: 1 };
    } else {
        listCart[idProduct].quantity++;
    }
    
    saveCart();
    addCartToHTML();
}

function saveCart() {
    let timesave = "expires=Thu, 31 Dec 2025 23:59:59 UTC";
    document.cookie = `listCart=${JSON.stringify(listCart)}; ${timesave}; path=/;`;
}

function addCartToHTML() {
    let listCartHTML = document.querySelector('.listCart');
    listCartHTML.innerHTML = '';
    let totalHTML = document.querySelector('.totalQuantity');
    let totalQuantity = 0;

    for (let id in listCart) {
        let product = listCart[id];
        let newCart = document.createElement('div');
        newCart.classList.add('item');
        newCart.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="content">
                <div class="name">${product.name}</div>
                <div class="price">$${product.price} / 1 product</div>
            </div>
            <div class="quantity">
                <button onclick="changeQuantity(${product.id}, '-')">-</button>
                <span class="value">${product.quantity}</span>
                <button onclick="changeQuantity(${product.id}, '+')">+</button>
            </div>
        `;
        listCartHTML.appendChild(newCart);
        totalQuantity += product.quantity;
    }
    totalHTML.innerText = totalQuantity;
}

function changeQuantity(idProduct, type) {
    if (listCart[idProduct]) {
        if (type === '-') {
            listCart[idProduct].quantity--;
            if (listCart[idProduct].quantity <= 0) {
                delete listCart[idProduct];
            }
        } else if (type === '+') {
            listCart[idProduct].quantity++;
        }
    }
    saveCart();
    addCartToHTML();
}

addCartToHTML();
}
const name = "soroush";
const num = 2;

// Product objects
const product1 = { image: "https://via.placeholder.com/300", title: "Product 1", price: 10, colors: ["red", "blue", "green"], sizes: ["S", "M", "L"] };
const product2 = { image: "https://via.placeholder.com/300", title: "Product 2", price: 20, colors: ["yellow", "black"], sizes: ["S", "M", "L"] };
const product3 = { image: "https://via.placeholder.com/300", title: "Product 3", price: 30, colors: ["pink", "purple", "orange"], sizes: ["S", "M", "L"] };
const product4 = { image: "https://via.placeholder.com/300", title: "Product 4", price: 40, colors: ["gray", "brown", "cyan", "blue"], sizes: ["S", "M", "L"] };
const products = [product1, product2, product3, product4];

let cart = [];

// Function to add product to cart
function addToCart(productName, selectedColor, selectedSize) {
  const product = products.find(p => p.title === productName);
  const cartItem = { ...product, selectedColor, selectedSize };
  cart.push(cartItem);
  alert(`${productName} added to the cart`);
  console.log(cartItem);
  updateCart();
}

// Function to update the cart display
function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const totalItems = document.getElementById('total-items');
  const totalPrice = document.getElementById('total-price');

  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(product => {
    cartItems.innerHTML += `<li>${product.title} - $${product.price} - Color: ${product.selectedColor} - Size: ${product.selectedSize}</li>`;
    total += product.price;
  });

  totalItems.textContent = cart.length;
  totalPrice.textContent = total.toFixed(2);
}

// Payment functions
function payWithPaypal() {
  alert('Paying with PayPal');
}

function payWithVisa() {
  alert('Paying with Visa Card');
}

function payWithCash() {
  alert('Paying with Cash on Delivery');
}

// Function to render products
window.onload = () => {
  const div = document.querySelector(".container");
  for (let i = 0; i < products.length; i++) {
    const product = products[i];
    div.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>$${product.price}</p>
        <div class="sizes">
          ${product.sizes.map(size => `<div class="size" data-size="${size}">${size}</div>`).join('')}
        </div>
        <div class="colors">
          ${product.colors.map(color => `<div class="color ${product.title.replace(/\s+/g, '-').toLowerCase()}-${color}" data-color="${color}"></div>`).join('')}
        </div>
        <button onclick="addToCart('${product.title}', getSelectedColor('${product.title}'), getSelectedSize('${product.title}'))">Add to cart</button>
      </div>`;
  }

  // Add event listeners for size and color selection
  document.querySelectorAll('.size').forEach(sizeElement => {
    sizeElement.addEventListener('click', function() {
      document.querySelectorAll(`.size[data-size]`).forEach(el => el.classList.remove('selected'));
      this.classList.add('selected');
    });
  });

  document.querySelectorAll('.color').forEach(colorElement => {
    colorElement.addEventListener('click', function() {
      document.querySelectorAll(`.color[data-color]`).forEach(el => el.classList.remove('selected'));
      this.classList.add('selected');
    });
  });
};

// Function to get selected color
function getSelectedColor(productTitle) {
  const selectedColorElement = document.querySelector(`.${productTitle.replace(/\s+/g, '-').toLowerCase()} .color.selected`);
  return selectedColorElement ? selectedColorElement.getAttribute('data-color') : null;
}

// Function to get selected size
function getSelectedSize(productTitle) {
  const selectedSizeElement = document.querySelector(`.${productTitle.replace(/\s+/g, '-').toLowerCase()} .size.selected`);
  return selectedSizeElement ? selectedSizeElement.getAttribute('data-size') : null;
}


//for loop



//array and object
//functions
//line 21 = use string and variable
//line 18-29 adding to the elements/Dom 
//the price is?















//alert('Welcome to the Shopping Page!');  


// Declaring variables
var productName = 'Product 1';
let productPrice = 10.00;
const currency = 'USD';

// Displaying variables in the console
console.log(productName);
console.log(productPrice);
console.log(currency);

// Function to display a welcome message
//function displayWelcomeMessage() {
   // alert('Welcome to the Shopping Page!');
//}

// Calling the function
//displayWelcomeMessage();



// Adding event listeners to all buttons
const buttons = document.querySelectorAll('.product button');
buttons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Function to change the product name
function changeProductName() {
    document.querySelector('.product h3').textContent = 'New Product Name';
}

// Calling the function
changeProductName();


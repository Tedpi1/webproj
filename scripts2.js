// Show a welcome message when the page loads
document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to NovaTech Electronics!");
});

// Function to change the background color
function changeBackground() {
    document.body.style.backgroundColor = "lightblue","black","red";
}

// Function to display product details when clicking on a product
function showProductDetails(productName) {
    alert("You selected: " + productName);
}

// Add event listeners for product images
document.addEventListener("DOMContentLoaded", function() {
    let productImages = document.querySelectorAll(".product-image");

    productImages.forEach(function(image) {
        image.addEventListener("click", function() {
            let productName = this.getAttribute("alt");
            showProductDetails(productName);
        });
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let categoryButtons = document.querySelectorAll(".category-item");
    let productContainer = document.getElementById("product-container");

    // Sample product data for each category
    const products = {
        "smart-gadgets": [
            { name: "Smart Watch", image: "C:/Users/user/Downloads/smart-watch.webp" , price: "$99" },
            { name: "Wireless Earbuds", image: "C:/Users/user/Downloads/earbuds.webp", price: "$79" },
            { name: "VR Headset", image: "C:/Users/user/Downloads/vr.webp", price: "$199" }
        ],
        "boards": [
            { name: "Arduino Board", image: "C:/Users/user/Downloads/board.jpg", price: "$45" },
            { name: "Raspberry Pi", image: "C:/Users/user/Downloads/raspberry.webp", price: "$55" }
        ],
        "accessories": [
            { name: "USB Hub", image: "C:/Users/user/Downloads/usb-hub.webp", price: "$20" },
            { name: "Gaming Mouse", image: "C:/Users/user/Downloads/mouse.webp", price: "$35" }
        ]
    };

    // Function to display products dynamically
    function displayProducts(category) {
        productContainer.innerHTML = ""; // Clear current products
        if (products[category]) {
            products[category].forEach(product => {
                let productItem = document.createElement("div");
                productItem.classList.add("product-item");
                productItem.innerHTML = `
                    <h3>${product.name}</h3>
                    <img src="${product.image}" alt="${product.name}" width="200">
                    <p class="price">${product.price} <span class="star-rating">★★★★</span></p>
                    <button>Add to Cart</button>
                `;
                productContainer.appendChild(productItem);
            });
        }
    }

    // Event listener for category buttons
    categoryButtons.forEach(button => {
        button.addEventListener("click", function () {
            let category = this.getAttribute("data-category");
            displayProducts(category);
        });
    });
})
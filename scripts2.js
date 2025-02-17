// Show a welcome message when the page loads
document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to NovaTech Electronics!");
});

// Function to change the background color
function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
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
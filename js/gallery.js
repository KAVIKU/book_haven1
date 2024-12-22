// Cart Functionality
const cart = [];
const viewCartButton = document.getElementById("view-cart");
const cartModal = document.getElementById("cart-modal");
const cartItems = document.getElementById("cart-items");
const totalPriceDisplay = document.getElementById("total-price");
const closeCartButton = document.getElementById("close-cart");
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// Update Cart Count
function updateCartCount() {
  viewCartButton.textContent = `View Cart (${cart.length})`;
}

// Update Cart Display
function updateCartDisplay() {
  cartItems.innerHTML = "";
  let totalPrice = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.onclick = () => {
      cart.splice(index, 1);
      updateCartDisplay();
      updateCartCount();
    };
    li.appendChild(removeButton);
    cartItems.appendChild(li);
    totalPrice += item.price;
  });

  totalPriceDisplay.textContent = `Total: $${totalPrice}`;
}

// Add to Cart
addToCartButtons.forEach(button => {
  button.addEventListener("click", (event) => {
    const product = event.target.closest(".gallery-item");
    const name = product.dataset.name;
    const price = parseFloat(product.dataset.price);
    cart.push({ name, price });
    updateCartCount();
    updateCartDisplay();
  });
});

// Open Cart Modal
viewCartButton.addEventListener("click", () => {
  cartModal.classList.remove("hidden");
});

// Close Cart Modal
closeCartButton.addEventListener("click", () => {
  cartModal.classList.add("hidden");
});

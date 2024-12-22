document.addEventListener("DOMContentLoaded", () => {
  // Cart Counter Updates
  const viewCartButton = document.getElementById("view-cart");

  let cartCount = 0; // Cart item count placeholder

  function updateCartCount(count) {
    viewCartButton.textContent = `View Cart (${count})`;
  }

  // Simulating Add to Cart Feature for Demo
  const featuredItems = document.querySelectorAll(".gallery-item");

  featuredItems.forEach((item) => {
    item.addEventListener("click", () => {
      cartCount += 1; // Increment cart count
      updateCartCount(cartCount);
      alert("Item added to cart!"); // Simple feedback
    });
  });

  // Navigate to Gallery on View Cart Click
  viewCartButton.addEventListener("click", () => {
    window.location.href = "gallery.html";
  });
});

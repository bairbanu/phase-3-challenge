let cartCount = 0;
let total = 0;

function addToCart(element) {
  const cart = document.getElementById('cart-item-count');

  cartCount++;
  cart.innerHTML = `(${cartCount})`;
}

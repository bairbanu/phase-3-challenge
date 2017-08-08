let cartCount = 0;
let total = 0;
let items = {};

function addToCart(element) {
  const cart = document.getElementById('cart-item-count');
  cartCount++;
  cart.innerHTML = `(${cartCount})`;

  const itemName = element.parentNode.childNodes[1].innerHTML;
  const itemCost = element.parentNode.childNodes[3].innerHTML;
  items[itemName] = itemCost;
  processTotal(itemCost);
  console.log('total::', total);
}

function processTotal(cost) {
  const value = cost.substr(1);
  total = Number(total) + Number(value);
  total = total.toFixed(2);
}

function showModal() {
  const modal = document.getElementById('my-modal');
  const btn = document.getElementById('cart-item-count');
  const close = document.getElementsByClassName('close')[0];
  const totalCost = document.getElementsByClassName('total-cost')[0];

  modal.style.display = 'block';
  totalCost.innerHTML = `$${total}`;

  close.onclick = function() {
      modal.style.display = 'none';
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
}

function clearCart() {
  items = {};
  total = 0;
  cartCount = 0;

  const modal = document.getElementById('my-modal');
  modal.style.display = 'none';

  const cart = document.getElementById('cart-item-count');
  cart.innerHTML = `(${cartCount})`;
}

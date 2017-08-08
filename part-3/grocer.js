let cartCount = 0;
let total = 0;
let items = [];

function addToCart(element) {
  const cart = document.getElementById('cart-item-count');
  cartCount++;
  cart.innerHTML = `(${cartCount})`;

  const itemName = element.parentNode.childNodes[1].innerHTML;
  const itemCost = element.parentNode.childNodes[3].innerHTML;
  items.push([itemName, itemCost]);
  processTotal(itemCost);
  console.log(items);
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
  showCartItems();

  close.onclick = function() {
      modal.style.display = 'none';
  }

  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = 'none';
      }
  }
}

function showCartItems() {
  if (items.length !== 0)
  items.forEach((item) => {
    // create item row
    const itemName = document.createElement('p');
    const itemNameText = document.createTextNode(`${item[0]}`);
    itemName.appendChild(itemNameText);

    const itemCost = document.createElement('p');
    const itemCostText = document.createTextNode(`${item[1]}`);
    itemCost.appendChild(itemCostText);

    const itemContainer = document.createElement('div');
    itemContainer.classList.add('modal-row');
    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemCost);

    //insert into right place
    const placeParent = document.getElementsByClassName('modal-column')[0];
    const placeCount = placeParent.childNodes.length;

    placeParent.insertBefore(itemContainer, placeParent.childNodes[placeCount - 2]);
  })
}

function clearCart() {
  items = [];
  total = 0;
  cartCount = 0;

  const modal = document.getElementById('my-modal');
  modal.style.display = 'none';

  const cart = document.getElementById('cart-item-count');
  cart.innerHTML = `(${cartCount})`;
}

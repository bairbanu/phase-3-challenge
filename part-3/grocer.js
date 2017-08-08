let cartCount = 0;
let total = 0;
const items = {};

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
// function showModal() {
//   // Get the modal
//   const modal = document.getElementById('my-modal');
//
//   // Get the button that opens the modal
//   const btn = document.getElementById("myBtn");
//
//   // Get the <span> element that closes the modal
//   const span = document.getElementsByClassName("close")[0];
//
//   // When the user clicks on the button, open the modal
//   btn.onclick = function() {
//       modal.style.display = "block";
//   }
//
//   // When the user clicks on <span> (x), close the modal
//   span.onclick = function() {
//       modal.style.display = "none";
//   }
//
//   // When the user clicks anywhere outside of the modal, close it
//   window.onclick = function(event) {
//       if (event.target == modal) {
//           modal.style.display = "none";
//       }
//   }
// }

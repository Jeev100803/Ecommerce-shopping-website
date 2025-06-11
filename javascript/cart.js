function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cartContainer = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');


  cartContainer.innerHTML = '';
  let total = 0;


  cartItems.forEach((item, index) => {
    const itemElement = document.createElement('div');
    itemElement.className = 'cart-item';


    itemElement.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="cart-item-image" />
      <div class="cart-item-details">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <p>₹${item.price}</p>
      </div>
      <button onclick="removeItem(${index})" class="remove-btn">Remove</button>
    `;


    cartContainer.appendChild(itemElement);
    total += item.price * item.quantity;
  });



  cartTotal.textContent = `Total: ₹${total}`;
}


function removeItem(index) {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cartItems.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cartItems));
  loadCart();
}

window.onload = loadCart;
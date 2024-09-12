import { cart, shipping, shippings, deliveryDate, orders, formatDate, addDays, placeOrderDays, ordersStatus } from "./utils.js";

// localStorage.clear();

let totalShipping = Number(localStorage.getItem('totalShipping')) || 0;

if (!shipping.length) {
  cart.forEach(() => {
    shipping.push(0);
  })
  console.log(shipping.length);
  localStorage.setItem('shipping',JSON.stringify(shipping))
}
console.log(shipping);
let totalTax = 0;

function deleteFromCart(i) {
  cart.splice(i, 1);
  totalShipping = 0;
  shipping.splice(i, 1);
  shipping.forEach((value) => {
    totalShipping += value;
  })
  console.log(cart);
  localStorage.setItem('cart', JSON.stringify(cart));
  localStorage.setItem('shipping', JSON.stringify(shipping));
  localStorage.setItem('totalShipping', JSON.stringify(totalShipping));
  updateCart();
  color();
}

function color() {
  document.querySelectorAll('.product-color-span').forEach((colorSpan) => {
    colorSpan.style.backgroundColor === 'white' ? colorSpan.style.color = 'black' : colorSpan.style.color = colorSpan.style.color;
  })
}

// localStorage.clear();


function updateCart() {

  console.log(shipping);
  console.log(cart)
  color();
  let orderSummuryHTML = '';
  let total = 0;

  cart.forEach((product, index) => {
    let delivery = deliveryDate(index);
    orderSummuryHTML += `
  <div class="cart-item-container">
    <div class="delivery-date">
      Delivery date: ${delivery}
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src="${product.imageUrl}">

      <div class="cart-item-details">

        <div class="product-name">
          ${product.name}
        </div>
        <div class="product-price">
          $${product.price}
        </div>

        <div class="product-color">
        ${product.color ? `
        Color: <span class="product-color-span" style="
        background-color: ${product.color};">${product.color}</span>
        ` : ``}
        </div>

        <div class="product-quantity">
          <span> Quantity: <span class="quantity-label">${product.quantity}</span>
          <input placeholder='New Qty' type="number" class="update-quantity-input js-update-input-${product.id}" value='${product.quantity}'>
          </span>
          <span class="update-quantity-link link-primary">Update
          </span>

          <span class="delete-quantity-link link-primary">
          <img class="product-image"
          src="./images/icons/close.png">
          </span>
        </div>

      </div>

      <div class="delivery-options"></div>
    </div>
  </div>
  `;
    total += Number(product.quantity) * Number(product.price);
  });

  document.querySelector('.order-summary').innerHTML = orderSummuryHTML;
  document.querySelector('.return-to-home-link').innerHTML = `${cart.length} items`;
  document.querySelector('.payment-summary-items').innerHTML = `Items (${cart.length}):`;

  document.querySelector('.payment-summary-total').innerHTML = `$${total.toFixed(2)}`;
  document.querySelector('.payment-summary-shipping').innerHTML = `$${totalShipping.toFixed(2)}`;
  document.querySelector('.payment-summary-total-noTax').innerHTML = `$${(total + totalShipping).toFixed(2)}`;

  totalTax = (total + totalShipping + ((total + totalShipping) * 0.1)).toFixed(2);

  document.querySelector('.payment-summary-total-tax').innerHTML = `$${totalTax}`;
  document.querySelector('.payment-summary-tax').innerHTML = `$${((total + totalShipping) * 0.1).toFixed(2)}`;

  document.querySelectorAll('.delete-quantity-link').forEach((span, i) => {
    span.addEventListener('click', () => {
      deleteFromCart(i);
    });
  })

  let updateInputs = document.querySelectorAll('.update-quantity-input');
  let updateSpans = document.querySelectorAll('.update-quantity-link');

  function checkUpdateInput(span, i) {
    if (Number(updateInputs[i].value) === 0 && updateInputs[i].value != '') {
      deleteFromCart(i);
    } else if (Number(updateInputs[i].value) > 0 && !(updateInputs[i].value.includes('.'))) {
      cart[i].quantity = Number(updateInputs[i].value);
      localStorage.setItem('cart', JSON.stringify(cart));
      updateCart();

      color();
      updateInputs[i].style.display = 'none';
      span.innerHTML = 'Update';
    } else if (isNaN(Number(updateInputs[i].value)) || Number(updateInputs[i].value) < 0 || updateInputs[i].value.includes('.')) {
      updateInputs[i].value = '';
      updateInputs[i].style.display = 'none';
      span.innerHTML = 'Update';
      updateCart();

      color();
    }
  }

  updateSpans.forEach((span, i) => {
    span.addEventListener('click', () => {
      if (span.innerHTML === 'Save') {
        checkUpdateInput(span, i);
      } else {
        console.log('Update');
        document.querySelectorAll('.quantity-label')[i].innerHTML = '';
        updateInputs[i].style.display = 'inline-block';
        updateInputs[i].addEventListener('keydown', (event) => {
          if (event.key === 'Enter') {
            checkUpdateInput(span, i);
          }
        })

        span.innerHTML = 'Save';
      }
    })
  })

  

  function deliveryOptions() {
    let today = new Date();
    let next7days = formatDate(addDays(today, 7));
    let next4days = formatDate(addDays(today, 4));
    let nextday = formatDate(addDays(today, 1));
    cart.forEach((product, index) => {
      document.querySelectorAll('.delivery-options')[index].innerHTML = `
    <div class="delivery-options-title">
    Choose a delivery option:
  </div>
  <div class="delivery-option">
    <input ${(shipping[index] === 0) ? 'checked' : ''} type="radio" class="delivery-option-input-${index}"
      name="delivery-option-${index + 1}">
    <div>
      <div class="delivery-option-date">${next7days}
      </div>
      <div class="delivery-option-price">FREE Shipping
      </div>
    </div>
  </div>
  <div class="delivery-option">
    <input ${(shipping[index] === 4.99) ? 'checked' : ''} type="radio" class="delivery-option-input-${index}"
      name="delivery-option-${index + 1}">
    <div>
      <div class="delivery-option-date">${next4days}
      </div>
      <div class="delivery-option-price">$4.99 - Shipping
      </div>
    </div>
  </div>
  <div class="delivery-option">
    <input ${(shipping[index] === 9.99) ? 'checked' : ''} type="radio" class="delivery-option-input-${index}"
      name="delivery-option-${index + 1}">
    <div>
      <div class="delivery-option-date">${nextday}
      </div>
      <div class="delivery-option-price">$9.99 - Shipping
      </div>
    </div>
  </div>
    `;
    })
  }
  deliveryOptions();
  cart.forEach((p, index) => {
    document.querySelectorAll(`.delivery-option-input-${index}`).forEach((option, i) => {
      option.addEventListener('click', () => {
        shipping[index] = (i === 0) ? 0 : (i === 1) ? 4.99 : (i === 2) ? 9.99 : undefined;
        totalShipping = 0;
        shipping.forEach((value) => {
          totalShipping += value;
        })
        localStorage.setItem('shipping', JSON.stringify(shipping));
        localStorage.setItem('totalShipping', JSON.stringify(totalShipping));
        updateCart();
        color();
      })
    });
  })

}

updateCart();
color();

document.querySelector('.place-order-button').addEventListener('click', () => {

  let placeOrderDay = formatDate(new Date());

  cart.length ? orders.unshift(cart) : '';
  cart.length ? shippings.unshift(shipping) : '';
  cart.length ? placeOrderDays.unshift(placeOrderDay) : '';
  cart.length ? ordersStatus.unshift('Waiting') : '';

  localStorage.setItem('orders', JSON.stringify(orders));
  localStorage.setItem('shippings', JSON.stringify(shippings));
  localStorage.setItem('placeOrderDays', JSON.stringify(placeOrderDays));
  localStorage.setItem('ordersStatus', JSON.stringify(ordersStatus));

  localStorage.getItem('user') ? window.location.href = 'orders.html' : window.location.href = './registration.html?redirect=orders.html';
});


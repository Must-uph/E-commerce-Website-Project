import { products } from "./data.js";
import { cart, shippings, shipping, deliveryDate, orders, placeOrderDays, ordersStatus } from "./utils.js";
// localStorage.clear();
function updateCartQuantity() {
  document.querySelector('.cart-quantity').innerHTML = `${cart.length}`;
}
updateCartQuantity();

console.log(orders);
console.log(shippings);

function updateOrders() {

  document.querySelector('.orders-grid').innerHTML = '';
  if (orders.length) {
    orders.forEach((order, orderIndex) => {
      document.querySelector('.orders-grid').innerHTML += `
      <div class="order-container">
        <div class="order-header"></div>
        <div class="order-details-grid"></div>
      </div>
      `;
      let total = 0;
      order.forEach((product, i) => {
        total += Number(product.price) * product.quantity + shippings[orderIndex][i] + (Number(product.price) * product.quantity + shippings[orderIndex][i]) * 0.1;
      });

      document.querySelectorAll('.order-header')[orderIndex].innerHTML = `
      <div class="order-header-left-section">
        <div class="order-date">
          <div class="order-header-label">Order Placed:</div>
          <div>${placeOrderDays[orderIndex]}</div>
        </div>
        <div class="order-total">
          <div class="order-header-label">Total:</div>
          <div>$${total.toFixed(2)}</div>
        </div>
        <div class="order-total">
          <div class="order-header-label">Status:</div>
          <div>${ordersStatus[orderIndex]}</div>
        </div>
      </div>
      <div class="order-header-right-section">
        <div class="product-actions">
          <button class="confirm-order-button button-secondary" data-order-index="${orderIndex}">
            <img class="action-icon" src="images/icons/shopping-cart-check.png">
            <span class="confirm-package">Confirm</span>
          </button>
          <button class="cancel-order-button button-secondary" data-order-index="${orderIndex}">
            <img class="action-icon" src="images/icons/delete.png">
            <span>Cancel</span> 
          </button>
        </div>
      </div>
        
      `;
      order.forEach((product, index) => {
        let delivery = deliveryDate(index);
        let html = `
        <div class="orderItem">
          <div class="product-image-container">
            <img src="${product.imageUrl}">
          </div>
    
          <div class="product-details">
            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>
            <div class="product-delivery-date">
              Arriving on: ${delivery}
            </div>
            <div class="product-quantity">
              Quantity: ${product.quantity}
            </div>
            <button class="buy-again-button button-primary" data-product-id="${product.id}" data-product-color="${product.color}">
              <img class="buy-again-icon" src="images/icons/shopping-cart-add.png">
              <span class="buy-again-message">Buy it again</span>
            </button>
            <button class="delete-button button-secondary" data-product-id="${product.id}" data-product-color="${product.color}" data-order-index="${orderIndex}">
              <img class="delete-icon" src="images/icons/trash.png">
              <span class="delete-message">Delete</span>
            </button>
          </div>
        </div>
      `;
        document.querySelectorAll('.order-details-grid')[orderIndex].innerHTML += html;
      });
    });


    document.querySelectorAll('.buy-again-button').forEach((btn) => {
      btn.addEventListener('click', () => {
        let id = btn.getAttribute('data-product-id');
        let color = btn.getAttribute('data-product-color');
        let added = false;
        cart.forEach((product) => {
          if (product.id === id) {
            if (!added && color && product.color === color) {
              console.log('same color');
              product.quantity++;
              shipping.push(0);
              localStorage.setItem('shipping', JSON.stringify(shipping));
              localStorage.setItem('cart', JSON.stringify(cart));
              added = true;
              updateCartQuantity();
            }
          }
        })
        cart.forEach((product) => {
          if (product.id === id) {
            if (!added && color && product.color != color) {
              added = true;
              console.log('not same color');
              products.forEach(product => {
                if (product.id === id) {
                  cart.push({
                    id: id,
                    name: product.name,
                    price: (product.newPrice / 100) ? (product.newPrice / 100).toFixed(2) : (product.priceCents / 100).toFixed(2),
                    imageUrl: product.colors[color],
                    color: color,
                    quantity: 1
                  });
                  shipping.push(0);
                  localStorage.setItem('shipping', JSON.stringify(shipping));
                  localStorage.setItem('cart', JSON.stringify(cart));
                  updateCartQuantity();
                }
              })
            }
          }
        })
        cart.forEach((product) => {
          if (product.id === id) {
            if (!added) {
              console.log('no color');
              product.quantity++;
              shipping.push(0);
              localStorage.setItem('shipping', JSON.stringify(shipping));
              localStorage.setItem('cart', JSON.stringify(cart));
              added = true;
              updateCartQuantity();
            }
          }
        })
        if (!added) {
          console.log('not added');
          products.forEach(product => {
            if (product.id === id) {
              cart.push({
                id: id,
                name: product.name,
                price: (product.newPrice / 100) ? (product.newPrice / 100).toFixed(2) : (product.priceCents / 100).toFixed(2),
                imageUrl: product.image,
                color: color,
                quantity: 1
              });
              shipping.push(0);
              localStorage.setItem('shipping', JSON.stringify(shipping));
              localStorage.setItem('cart', JSON.stringify(cart));
              updateCartQuantity();
            }
          })
        }
        btn.querySelector('span').innerHTML = 'Done';
        setTimeout(() => {
          btn.querySelector('span').innerHTML = 'Buy it again';
        }, 500);
      })
    });

    document.querySelectorAll('.delete-button').forEach((deleteButton) => {
      console.log(ordersStatus);
      deleteButton.addEventListener('click', () => {
        let orderIndex = deleteButton.getAttribute('data-order-index');
        if (ordersStatus[orderIndex] === 'Waiting') {
          let id = deleteButton.getAttribute('data-product-id');
          let color = deleteButton.getAttribute('data-product-color');
          orders[orderIndex].forEach((product, productIndex) => {
            if (product.id === id && product.color === color) {
              orders[orderIndex].splice(productIndex, 1);
              shippings[orderIndex][productIndex] = 0;
              localStorage.setItem('orders', JSON.stringify(orders));
              localStorage.setItem('shippings', JSON.stringify(shippings));
              if (orders[orderIndex].length === 0) {
                orders.splice(orderIndex, 1);
                shippings.splice(orderIndex, 1);
                placeOrderDays.splice(orderIndex, 1);
                ordersStatus.splice(orderIndex, 1);
                localStorage.setItem('ordersStatus', JSON.stringify(ordersStatus));
                localStorage.setItem('orders', JSON.stringify(orders));
                localStorage.setItem('shippings', JSON.stringify(shippings));
                localStorage.setItem('placeOrderDays', JSON.stringify(shippings));
              }
              updateOrders();
            }
          })
        }
      })
    })

    document.querySelectorAll('.cancel-order-button').forEach(cancel => {
      console.log(placeOrderDays);
      cancel.addEventListener('click', () => {
        let index = cancel.getAttribute('data-order-index');
        if (ordersStatus[index] === 'Waiting') {
          orders.splice(index, 1);
          shippings.splice(index, 1);
          placeOrderDays.splice(index, 1);
          ordersStatus.splice(index, 1);
          localStorage.setItem('orders', JSON.stringify(orders));
          localStorage.setItem('shippings', JSON.stringify(shippings));
          localStorage.setItem('placeOrderDays', JSON.stringify(placeOrderDays));
          localStorage.setItem('ordersStatus', JSON.stringify(ordersStatus));
          updateOrders();
        }
      })
    })
    document.querySelectorAll('.confirm-order-button').forEach(confirm => {
      confirm.addEventListener('click', () => {
        let index = confirm.getAttribute('data-order-index');
        if (ordersStatus[index] === 'Waiting') {
          window.location.href = `confirmation.html?index=${index}`;
        } else {
          confirm.querySelector('span').innerHTML = 'Confirmed';
        }
      })
    })

  } else {
    document.querySelector('.orders-grid').innerHTML = `<p>You Have No Orders (<a href="products.html">Back To Produts Page</a>)</p>`;
  }
}


updateOrders();
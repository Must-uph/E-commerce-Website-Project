import { products } from "./data.js";

export function findProdCart(productId,productColor) {
  let i;
  for (i = 0; i < cart.length; i++) {
    if (cart[i].id === productId) {
      if(productColor){
        if (cart[i].color === productColor) {
          return i;
        }
      } else {
        return i;
      }
    }
  }
  return false;
}

export let cart = JSON.parse(localStorage.getItem('cart')) || [];
export let orders = JSON.parse(localStorage.getItem('orders')) || [];
export let ordersStatus = JSON.parse(localStorage.getItem('ordersStatus')) || [];
export let shippings = JSON.parse(localStorage.getItem('shippings')) || [];
export let placeOrderDays = JSON.parse(localStorage.getItem('placeOrderDays')) || [];
export let shipping = JSON.parse(localStorage.getItem('shipping')) || [];

export function updateCartQuantity() {
document.querySelector('.cart-quantity').innerHTML = cart.length;
}


export function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

export function formatDate(date) {
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  
  const dayName = daysOfWeek[date.getDay()];
  const monthName = months[date.getMonth()];
  const day = date.getDate();
  
  return `${dayName}, ${monthName} ${day}`;
}

// Exemple d'utilisation
const today = new Date();
const daysToAdd = 7; // Nombre de jours à ajouter
const newDate = addDays(today, daysToAdd);
const formattedDate = formatDate(newDate);


export function deliveryDate(index) {
  let today = new Date();
  let next7days = formatDate(addDays(today, 7));
  let next4days = formatDate(addDays(today, 4));
  let nextday = formatDate(addDays(today, 1));

  let delivery = (shipping[index] === 0) ? next7days : (shipping[index] === 4.99) ? next4days : nextday;
  return delivery;
}

// localStorage.clear();

export function starsIcon(stars) {

  let result = stars * 10;
  if(result === 50 || result === 45 || result === 40 || result === 35 || result === 30 || result === 25 || result === 20 || result === 15 || result === 10 || result === 0){
    return result;
  } else if(result === 5){
    return '05';
  } else if(50 - result < 5) {
    return 50;
  } else if (45 - result < 5) {
    return 45;
  } else if(40 - result < 5) {
    return 40;
  } else if(35 - result < 5) {
    return 35;
  } else if(30 - result < 5) {
    return 30;
  } else if(25 - result < 5) {
    return 25;
  } else if(20 - result < 5) {
    return 20;
  } else if(15 - result < 5) {
    return 15;
  } else if(10 - result < 5) {
    return 10;
  } else if(5 - result < 5) {
    return 5;
  }
}
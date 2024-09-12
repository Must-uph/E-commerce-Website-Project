import { products } from "./data.js";
import { findProdCart, cart, updateCartQuantity, starsIcon, shipping } from "./utils.js";
let productsCategory = [];
// localStorage.clear();

function productsOfCat(cat) {
  let categoryProducts = [];
  products.forEach((product) => {
    if (product.category === cat) {
      categoryProducts.push(product);
    }
  });
  return categoryProducts;
}

activeCategory();

function activeCategory() {
  document.querySelectorAll('.category').forEach(category => {
    if (category.getAttribute('data-type') === localStorage.getItem('cat')) {
      category.classList.add('active-category');
      productsCategory = productsOfCat(category.getAttribute('data-type'));
      if (productsCategory.length === 0) { productsCategory = products; }
    } else {
      category.classList.remove('active-category');
    }
  });
}

document.querySelectorAll('.category').forEach(category => {
  category.addEventListener('click', () => {
    let cat = category.getAttribute('data-type');
    localStorage.setItem('cat', cat);
    productsCategory = productsOfCat(cat);
    if (productsCategory.length === 0) {
      productsCategory = products;
    }
    updateProductList(productsCategory);
    addToCart();
    activeCategory();
  });
});
updateProductList(productsCategory);

function updateProductList(productsList) {

  document.querySelector('title').innerHTML = `${localStorage.getItem('cat').charAt(0).toUpperCase() + localStorage.getItem('cat').slice(1)} Products`;
  const productsGrid = document.querySelector('.products-grid');
  productsGrid.innerHTML = '';
  document.querySelector('.all-products-sections').innerHTML = '';

  if (localStorage.getItem('cat') === 'all') {
    const categories = [...new Set(productsList.map(product => product.category))];

    let index = -1;
    categories.forEach(category => {
      const section = document.createElement('div');
      section.classList.add('category-section');

      const title = document.createElement('h3');
      title.classList.add('category-title');
      title.textContent = category.charAt(0).toUpperCase() + category.slice(1);

      const productList = document.createElement('div');
      productList.classList.add('product-list');
      productsList.forEach((product) => {
        if (product.category === category) {
          index++;
          productList.innerHTML += `
            <div class="product-container">
              <div class="product-image-container">
                <img class="product-image" src="${product.image}" data-id="${product.id}">
              </div>
              <div data-id="${product.id}" class="product-name limit-text-to-2-lines">
                ${product.name}
              </div>
              <div class="product-rating-container">
                <img class="product-rating-stars" src="images/ratings/rating-${starsIcon(product.rating.stars)}.png">
                <div class="product-rating-count link-primary">
                  ${product.rating.count}
                </div>
              </div>
              <div class="product-price">
              <span class="old-price" style="${product.newPrice ? `text-decoration: line-through;
              color: rgb(255, 0, 0);` : ''}">$${(product.priceCents / 100).toFixed(2)}</span>
              <span class="new-price">${product.newPrice ? `$${(product.newPrice / 100).toFixed(2)}` : ``}</span>
              </div>
              <div class="product-quantity-container">
                <select id="${product.id}">
                  <option selected value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </div>
              <div class="product-spacer" data-index="${index}" data-product-id="${product.id}"></div>
                <div class="added-to-cart" data-product-id="${product.id}">
                  <img src="images/icons/checkmark.png">
                  Added
                </div>
              <button class="add-to-cart-button button-primary" data-product-id="${product.id}">
                Add to Cart
              </button>
            </div>`;
        }
      });

      section.appendChild(title);
      section.appendChild(productList);
      document.querySelector('.all-products-sections').appendChild(section);
    });
  } else {
    productsList.forEach((product, index) => {
      productsGrid.innerHTML += `
        <div class="product-container">
          <div class="product-image-container">
            <img class="product-image" src="${product.image}" data-id="${product.id}">
          </div>
          <div data-id="${product.id}" class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>
          <div class="product-rating-container">
            <img class="product-rating-stars" src="images/ratings/rating-${starsIcon(product.rating.stars)}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.count}
            </div>
          </div>
          <div class="product-price">
          <span class="old-price" style="${product.newPrice ? `text-decoration: line-through;
          color: rgb(255, 0, 0);` : ''}">$${(product.priceCents / 100).toFixed(2)}</span>
          <span class="new-price">${product.newPrice ? `$${(product.newPrice / 100).toFixed(2)}` : ``}</span>
          </div>
          <div class="product-quantity-container">
            <select id="${product.id}">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
          <div class="product-spacer" data-index="${index}"></div>
          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>
          <button class="add-to-cart-button button-primary" data-product-id="${product.id}">
            Add to Cart
          </button>
        </div>`;
    });
  }

  spacerGenerater();
  productDetails();
  // scrollEffect();
  revealEffect();
}

// localStorage.clear();

function spacerGenerater() {
  if (localStorage.getItem('cat') != 'all') {
    productsCategory.forEach((p, index) => {
      if (p.colors) {
        document.querySelectorAll('.product-spacer')[index].innerHTML = ``;
        for (let i in Object.keys(p.colors)) {
          
          document.querySelectorAll('.product-spacer')[index].innerHTML += `
          <span data-position="${document.querySelectorAll('.product-spacer')[index].getAttribute('data-index')}" class="colors" style="background-color: ${Object.keys(p.colors)[i]};" data-img="${Object.values(p.colors)[i]}"></span>
          `;
        }
      }
    });
  
    addColorSpanInteraction();

  } else {

    const categories = [...new Set(productsCategory.map(product => product.category))];
    categories.forEach(category => {
      productsCategory.forEach((product,index) => {
        if (product.category === category) {
          document.querySelectorAll('.product-spacer').forEach(spacer => {
            if(spacer.getAttribute('data-product-id') === product.id) {
              if (product.colors) {
                for (let i in Object.keys(product.colors)) {
                  spacer.innerHTML += `
                  <span data-position="${index}" data-spacer="${spacer.getAttribute('data-index')}" class="colors" style="background-color: ${Object.keys(product.colors)[i]};" data-img="${Object.values(product.colors)[i]}"></span>
                  `;
                }
              }
            }
          })
        }
      })
    })

    addColorSpanInteraction();
  }
}

function addColorSpanInteraction() {
  document.querySelectorAll('.product-container').forEach(product => {
      product.querySelectorAll('.colors').forEach(color => {
          const colorPosition = color.getAttribute('data-position');
          const productPosition = color.getAttribute('data-spacer');
          
          const currentProduct = productsCategory[colorPosition];


          if (currentProduct.image === color.getAttribute('data-img')) {
              color.classList.add('colors-active');
          } else {
              color.classList.remove('colors-active');
          }

          color.addEventListener('click', () => {
            console.log(`${currentProduct.name} ${productPosition}`);
            if (localStorage.getItem('cat') === 'all') {
              document.querySelectorAll('.product-image')[productPosition].src = color.getAttribute('data-img');
            } else {
              document.querySelectorAll('.product-image')[colorPosition].src = color.getAttribute('data-img');
            }
              currentProduct.image = color.getAttribute('data-img');
              product.querySelectorAll('.colors').forEach(c => {
                  if (currentProduct.image === c.getAttribute('data-img')) {
                      c.classList.add('colors-active');
                  } else {
                      c.classList.remove('colors-active');
                  }
              });

              products.forEach(p => {
                  if (p.id === currentProduct.id) {
                      p.image = currentProduct.image;
                  }
              });

              // localStorage.setItem('products', JSON.stringify(products));
          });
      });
  });
}

// localStorage.clear();


function addToCart() {
  const addCartBtn = document.querySelectorAll('.add-to-cart-button');

  addCartBtn.forEach((btnElement) => {
    btnElement.addEventListener('click', () => {
      const productId = btnElement.getAttribute('data-product-id');
      productsCategory.forEach((product, index) => {
        if (product.id === productId) {
          if(localStorage.getItem('cat') === 'all') {
            let addedToCart;
            document.querySelectorAll('.added-to-cart').forEach(addedDiv => {
              if (addedDiv.getAttribute('data-product-id') === productId) {
                addedToCart = addedDiv;
              }
            }) 
            addedToCart.style.opacity = '1';
            setTimeout(function () {
              addedToCart.style.opacity = '0';
            }, 500);
            clearTimeout();
          } else {
            document.querySelectorAll('.added-to-cart')[index].style.opacity = '1';
            setTimeout(function () {
              document.querySelectorAll('.added-to-cart')[index].style.opacity = '0';
            }, 500);
            clearTimeout();
          }
          if (product.colors) {
            if (findProdCart(productId, Object.keys(product.colors)[Object.values(product.colors).indexOf(`${product.image}`)]) || findProdCart(productId, Object.keys(product.colors)[Object.values(product.colors).indexOf(`${product.image}`)]) === 0) {
              cart[findProdCart(productId, Object.keys(product.colors)[Object.values(product.colors).indexOf(`${product.image}`)])].quantity += Number(document.getElementById(productId).value);
              updateCartQuantity();
              localStorage.setItem('cart', JSON.stringify(cart));
              document.getElementById(`${product.id}`).value = 1;
            } else {
              cart.push({
                id: product.id,
                name: product.name,
                price: (product.newPrice / 100) ? (product.newPrice / 100).toFixed(2) : (product.priceCents / 100).toFixed(2),
                imageUrl: product.image,
                color: Object.keys(product.colors)[Object.values(product.colors).indexOf(`${product.image}`)] || '',
                quantity: Number(document.getElementById(`${product.id}`).value)
              });
            }
          } else {
            if (findProdCart(productId, undefined) || findProdCart(productId, undefined) === 0) {
              cart[findProdCart(productId, undefined)].quantity += Number(document.getElementById(productId).value);
              updateCartQuantity();
              localStorage.setItem('cart', JSON.stringify(cart));
              document.getElementById(`${product.id}`).value = 1;
            } else {
              cart.push({
                id: product.id,
                name: product.name,
                price: (product.newPrice / 100) ? (product.newPrice / 100).toFixed(2) : (product.priceCents / 100).toFixed(2),
                imageUrl: product.image,
                color: '',
                quantity: Number(document.getElementById(`${product.id}`).value)
              });
            }
          }
          updateCartQuantity();
          productDetails();
          shipping.push(0);
          localStorage.setItem('shipping', JSON.stringify(shipping));
          localStorage.setItem('cart', JSON.stringify(cart));
          document.getElementById(`${product.id}`).value = 1;
        }
      });
    });
  });
}

addToCart();

updateCartQuantity();

function sortProductsBy(criteria, order) {
  if (criteria === "rating" && order === "ascending") {
    productsCategory.sort((a, b) => {
      if (a.rating.stars > b.rating.stars) {
        return 1;
      } else if (a.rating.stars < b.rating.stars) {
        return -1;
      } else {
        if (a.rating.count > b.rating.count) {
          return 1;
        } else if (a.rating.count < b.rating.count) {
          return -1;
        } else {
          return 0;
        }
      }
    });
  } else if (criteria === "rating" && order === "descending") {
    productsCategory.sort((a, b) => {
      if (a.rating.stars < b.rating.stars) {
        return 1;
      } else if (a.rating.stars > b.rating.stars) {
        return -1;
      } else {
        if (a.rating.count < b.rating.count) {
          return 1;
        } else if (a.rating.count > b.rating.count) {
          return -1;
        } else {
          return 0;
        }
      }
    });
  } else if (criteria === "price" && order === "ascending") {
    productsCategory.sort((a, b) => a.priceCents - b.priceCents);
  } else if (criteria === "price" && order === "descending") {
    productsCategory.sort((a, b) => b.priceCents - a.priceCents);
  }
  updateProductList(productsCategory);
  addToCart();
  productDetails();
}

document.querySelector('#sort-options').addEventListener('change', () => {
  document.querySelector('#sort-options').querySelectorAll('option').forEach((option) => {
    if (option.value === document.querySelector('#sort-options').value) {
      let criteria = option.getAttribute('data-option');
      let order = option.getAttribute('data-order');
      console.log(`${criteria} , ${order}`)
      sortProductsBy(criteria, order);
    }
  })
})

// Search Interaction

// function search() {
//   // window.location.href = './products.html';
//   let searchList = [];
//   let search = document.querySelector('.search-bar').value;
//   if (search) {
//     products.forEach((item) => {
//       if (item.keywords.includes(search) || item.name.includes(search)) {
//         searchList.push(item);
//       }
//     });
//     productsCategory = searchList;
//     productsCategory.sort((a, b) => b.rating.stars - a.rating.stars);
//     updateProductList(searchList);
//     addToCart();
//     productDetails();
//     document.querySelector('.search-bar').value = '';
//   }
// }

// document.querySelector('.search-button').addEventListener('click', () => {
//   search();
// });

// document.querySelector('.search-bar').addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     search();
//   }
// });

function search() {
  let searchList = [];
  let search = document.querySelector('.search-bar').value.toLowerCase();

  if (search) {
    products.forEach((item) => {
      let nameLower = item.name.toLowerCase();
      let keywordsLower = item.keywords.map(keyword => keyword.toLowerCase());

      if (keywordsLower.includes(search) || nameLower.includes(search)) {
        searchList.push(item);
      }
    });

    productsCategory = searchList;
    productsCategory.sort((a, b) => b.rating.stars - a.rating.stars);
    updateProductList(searchList);
    addToCart();
    productDetails();
    document.querySelector('.search-bar').value = '';
  }
}

// function updateSuggestions() {
//   let search = document.querySelector('.search-bar').value.toLowerCase();
//   let suggestions = [];

//   if (search) {
//     products.forEach((item) => {
//       let nameLower = item.name.toLowerCase();
//       let keywordsLower = item.keywords.map(keyword => keyword.toLowerCase());

//       if (nameLower.includes(search) || keywordsLower.some(keyword => keyword.includes(search))) {
//         suggestions.push(item.name);
//       }
//     });

//     displaySuggestions(suggestions);
//   } else {
//     clearSuggestions();
//   }
// }

// function displaySuggestions(suggestions) {
//   let suggestionBox = document.querySelector('.suggestion-box');
//   suggestionBox.innerHTML = '';

//   suggestions.forEach((suggestion) => {
//     let suggestionItem = document.createElement('div');
//     suggestionItem.classList.add('suggestion-item');
//     suggestionItem.textContent = suggestion;

//     suggestionItem.addEventListener('click', () => {
//       document.querySelector('.search-bar').value = suggestion;
//       search();
//     });

//     suggestionBox.appendChild(suggestionItem);
//   });
// }

// function clearSuggestions() {
//   document.querySelector('.suggestion-box').innerHTML = '';
// }

document.querySelector('.search-button').addEventListener('click', () => {
  search();
  // clearSuggestions();
});

// document.body.addEventListener('click', () => {
//   clearSuggestions();
// });

document.querySelector('.search-bar').addEventListener('keydown', (event) => {
  // updateSuggestions();
  if (event.key === 'Enter') {
    search();
    // clearSuggestions();
  }
});

//_____________________________________
function productDetails() {
  document.querySelectorAll('.product-name').forEach(name => {
    name.addEventListener('click', () => {
      localStorage.setItem('id', name.getAttribute('data-id'))
      window.location.href = '../product-details.html';
    })
  })
  document.querySelectorAll('.product-image').forEach(img => {
    img.addEventListener('click', () => {
      localStorage.setItem('id', img.getAttribute('data-id'))
      window.location.href = '../product-details.html';
    })
  })
}


// _______________Reveal Element on Scroll__________________

function revealEffect() {
  window.addEventListener('scroll', reveal);

  function reveal() {
    var reveals = document.querySelectorAll('.product-container');
    for (var i = 0; i < reveals.length; i++) {
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if (revealtop < windowheight - revealpoint) {
        reveals[i].classList.add('product-container--visible');
      } else {
        reveals[i].classList.remove('product-container--visible');
      }
    }
  }
}

// ________________________________________________________
import { products } from "./data.js";
import { findProdCart, cart, updateCartQuantity, starsIcon, shipping } from "./utils.js";

let productReviews = JSON.parse(localStorage.getItem('productReviews')) || [];
updateCartQuantity();

function product(id) {
  products.forEach(p => {
    if (p.id === id) {
      document.querySelector('title').innerHTML = `${p.name}`;
      document.querySelector('main').innerHTML += `
      <div class="product-info-container">
      
      <div class="product-img-container">
      <img src="${p.image}" class="product-image">
      </div>
      <div class="product-details-container">
      <div class="product-name">${p.name}</div>
      <div class="product-rating">
          <div class="product-rating-stars"></div>
          <div class="product-rating-count"></div>
          </div>
          
          <div>
          <span class="old-price" style="${p.newPrice ? `text-decoration: line-through;
            color: rgb(255, 0, 0);` : ''}">$${(p.priceCents / 100).toFixed(2)}</span>
            <span class="new-price">${p.newPrice ? `$${(p.newPrice / 100).toFixed(2)}` : ``}</span>
            </div>
            
            <div class="product-category" style="font-weight: bold;">
            Category: ${p.category.charAt(0).toUpperCase() + p.category.slice(1)}
            </div>
            
            <div class="product-colors"></div>
            
            <div class="product-quantity">
            <select id="${p.id}">
            <option value="1" selected>1</option>
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
  
          <div class="product-purchase">
            <button class="button-primary add-to-cart-button">Add To Cart</button>
          </div>

        </div>

      </div>
      
    </div>
    <div class="description-reviews">
    <div class="section description active-section">Description</div>
      <div class="section reviews">Reviews</div>
    </div>
    <div class="product-description">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet, tempora unde! Sint asperiores omnis culpa quae consectetur voluptate eaque. Animi adipisci corporis soluta! Doloremque ipsum, voluptatibus, molestiae fugit amet beatae exercitationem rem quaerat dicta placeat illum ipsa officia. Quibusdam error ex dignissimos assumenda excepturi obcaecati, ipsam facere earum? Suscipit quis deleniti eos odio ab at fugiat placeat reiciendis. Nesciunt nemo voluptatibus animi sed labore debitis aliquid suscipit mollitia error, quas laborum laboriosam quod soluta inventore voluptatem. Perferendis voluptatem id deserunt sequi laudantium ipsum omnis maxime inventore error quasi.
    </div>
    <div class="product-reviews">
      <div class="add-review-container">
        <div class="form">
          <div class="review-input-container">
            <textarea type="text" class="review-message" placeholder="Type your Review" required></textarea>
          </div>
          <div class="rating-container">
            <div class="rating">
              <span class="star" data-stars="1">
                <p>1</p>
                <img src="./images/icons/star.png" class="star-icon" alt="">
              </span>
              <span class="star" data-stars="2">
                <p>2</p>
                <img src="./images/icons/star.png" class="star-icon" alt="">
              </span>
              <span class="star" data-stars="3">
                <p>3</p>
                <img src="./images/icons/star.png" class="star-icon" alt="">
              </span>
              <span class="star" data-stars="4">
                <p>4</p>
                <img src="./images/icons/star.png" class="star-icon" alt="">
              </span>
              <span class="star" data-stars="5">
                <p>5</p>
                <img src="./images/icons/star.png" class="star-icon" alt="">
              </span>
            </div>
            <button class="add-review-button button-secondary">Add Review</button>
            <div class="review-added">
              <img src="./images/icons/check.png">
              <p>Your Review Added Successfully</p>
            </div>
            <div class="registration-error">
              <img src="./images/icons/warning.png">
              <p>You Need To (<a href="./registration.html?redirect=product-details.html">Register</a>)</p>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-controls">
        <button class="prev-button">❮</button>
        <div class="carousel-container">
          <div class="carousel-wrapper">
            <div class="carousel"></div>
          </div>
            
            
          <div class="carousel-indicators"></div>
        </div>
        <button class="next-button">❯</button>
      </div>
    </div>
    <div class="title">Related Products</div>
    <div class="products-grid"></div>
`;

      products.forEach((product) => {
        if (product.category === p.category && product.id != p.id) {
          document.querySelector('.products-grid').innerHTML += `
          <div class="product-container">
            <div class="product-image-container">
              <img class="product-related-image" src="${product.image}" data-id="${product.id}">
            </div>
      
            <div data-id="${product.id}" class="product-related-name limit-text-to-2-lines">
              ${product.name}
            </div>
      
            <div class="product-related-price">
            <span class="old-price" style="${product.newPrice ? `text-decoration: line-through;
            color: rgb(255, 0, 0);` : ''}">$${(product.priceCents / 100).toFixed(2)}</span>
            <span class="new-price">${product.newPrice ? `$${(product.newPrice / 100).toFixed(2)}` : ``}</span>
            </div>
          </div>
          `;
        }
      })
    }
  });
}
product(localStorage.getItem('id'));

function ratingUpdate() {
  let id = localStorage.getItem('id');
  products.forEach(p => {
    if (p.id === id) {
      document.querySelector('.product-rating-count').innerHTML = `${p.rating.count}`;
      document.querySelector('.product-rating-stars').innerHTML = `
      <img src="/images/ratings/rating-${starsIcon(p.rating.stars)}.png" class="product-rating-image">`
        ;
    }
  })
}
ratingUpdate();


let currentIndex = 0;

function updateCarousel() {
  const carousel = document.querySelector('.carousel');
  const slides = document.querySelectorAll('.review-container');
  const totalSlides = slides.length;

  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

  document.querySelectorAll('.carousel-indicators span').forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.style.backgroundColor = '#000';
    } else {
      indicator.style.backgroundColor = '#333';
    }
  });
}

let reviewsCount = 0;

document.querySelector('.next-button').addEventListener('click', () => {
  if (currentIndex < reviewsCount - 1) {
    currentIndex++;
    updateCarousel();
  }
});

document.querySelector('.prev-button').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
});

function reviewsGenerater() {
  const carousel = document.querySelector('.carousel');
  carousel.innerHTML = '';

  productReviews.forEach(product => {
    if (product.id === localStorage.getItem('id')) {
      document.querySelector('.prev-button').style.display = 'block';
      document.querySelector('.next-button').style.display = 'block';
      product.reviews.forEach(review => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review-container');
        reviewElement.innerHTML = `
        <div class="review-header">
        <div class="user-ptofil">
        <div class="user-profil-icon">
                  <img src="images/icons/account.png" alt="">
                </div>
                <div class="user-name">
                  <p class="name">
                    ${review.reviewer.username}
                  </p>
                  <p class="email">
                    ${review.reviewer.email}
                  </p>
                </div>
              </div>
              <div class="review-stars">
                <img src="./images/ratings/rating-${review.stars}0.png" alt="">
              </div>
            </div>
            <div class="review-comment">
              ${review.reviewMessage}
            </div>
        `;
        carousel.appendChild(reviewElement);
      });
    }
  });

  const indicators = document.querySelector('.carousel-indicators');
  indicators.innerHTML = '';

  productReviews.forEach((product) => {
    if (product.id === localStorage.getItem('id')) {
      reviewsCount = product.reviews.length;
    }
  })

  for (let i = 0; i < reviewsCount; i++) {
    let indicator = document.createElement('span');
    indicator.addEventListener('click', () => {
      currentIndex = i;
      updateCarousel();
    });
    indicators.appendChild(indicator);
  }
  updateCarousel();
}

reviewsGenerater();


document.querySelectorAll('.product-related-name').forEach(name => {
  name.addEventListener('click', () => {
    localStorage.setItem('id', name.getAttribute('data-id'))
    window.location.href = '../product-details.html';
  })
})

document.querySelectorAll('.product-related-image').forEach(img => {
  img.addEventListener('click', () => {
    localStorage.setItem('id', img.getAttribute('data-id'))
    window.location.href = '../product-details.html';
  })
})


function descriptionActive() {
  localStorage.setItem('sectionActive', 'description');
  document.querySelector('.product-description').style.display = 'block';
  document.querySelector('.product-reviews').style.display = 'none';
  document.querySelector('.description').classList.add('active-section');
  document.querySelector('.reviews').classList.remove('active-section');
}

function reviewsActive() {
  localStorage.setItem('sectionActive', 'reviews');
  document.querySelector('.product-description').style.display = 'none';
  document.querySelector('.product-reviews').style.display = 'grid';
  document.querySelector('.description').classList.remove('active-section');
  document.querySelector('.reviews').classList.add('active-section');
  reviewsGenerater();
}

function sectionsShow() {
  if (localStorage.getItem('sectionActive') === 'description') {
    descriptionActive();
  } else if (localStorage.getItem('sectionActive') === 'reviews') {
    reviewsActive();
  }

  document.querySelectorAll('.section').forEach((section) => {
    section.addEventListener('click', () => {
      section.classList.contains('description') ? descriptionActive() :
        reviewsActive();
    })
  })
}

sectionsShow();



console.log(productReviews);

function addReview() {

  let stars = Number(localStorage.getItem('stars'));
  let reviewMessage = document.querySelector('.review-message').value;
  if (reviewMessage && stars && JSON.parse(localStorage.getItem('user'))) {
    document.querySelector('.review-message').value = ``;
    if (productReviews.length) {
      localStorage.setItem('founded', 'no');
      productReviews.forEach(product => {
        if (product.id === localStorage.getItem('id')) {
          localStorage.setItem('founded', 'yes');
          product.reviews.push({
            reviewMessage: reviewMessage,
            stars: stars,
            reviewer: JSON.parse(localStorage.getItem('user'))
          });
        }
      });
      if (localStorage.getItem('founded') === 'no') {
        productReviews.push({
          id: localStorage.getItem('id'),
          reviews: [{
            reviewMessage: reviewMessage,
            stars: stars,
            reviewer: JSON.parse(localStorage.getItem('user'))
          }]
        });
      }
    } else {
      console.log('no reviews')
      productReviews.push({
        id: localStorage.getItem('id'),
        reviews: [{
          reviewMessage: reviewMessage,
          stars: stars,
          reviewer: JSON.parse(localStorage.getItem('user'))
        }]
      });
    }
    products.forEach(product => {
      if (product.id === localStorage.getItem('id')) {
        product.rating.stars = (product.rating.stars * product.rating.count + stars) / (product.rating.count + 1);
        product.rating.count++;
        localStorage.setItem('products', JSON.stringify(products));
        ratingUpdate();
      }
    })

    localStorage.setItem('productReviews', JSON.stringify(productReviews));

    document.querySelector('.review-message').style.border = 'none';
    document.querySelector('.rating').style.borderColor = 'rgba(0,0,0,0)';

    document.querySelector('.review-added').style.opacity = '1';
    document.querySelector('.registration-error').style.opacity = '0';
    setTimeout(() => {
      document.querySelector('.review-added').style.opacity = '0';
    }, 2500);
    clearTimeout();
    localStorage.removeItem('stars');
    reviewsGenerater();
  } else if (!reviewMessage) {
    document.querySelector('.review-message').style.border = '3px solid red';
  } else if (!stars) {
    document.querySelector('.rating').style.borderColor = 'red';
  } else {
    document.querySelector('.registration-error').style.opacity = '1';
  }

}

function addActiveClass() {
  document.querySelectorAll('.star').forEach((star) => {
    if (star.getAttribute('data-stars') === localStorage.getItem('stars')) {
      star.classList.add('star-active');
    } else {
      star.classList.remove('star-active');
    }
  })
}

document.querySelectorAll('.star').forEach((star) => {
  star.addEventListener('click', () => {
    let stars = star.getAttribute('data-stars');
    localStorage.setItem('stars', stars);
    star.classList.add('star-active');
    addActiveClass();
  })
});

document.querySelector('.add-review-button').addEventListener('click', () => {
  addReview();
  addActiveClass();
  reviewsGenerater();
});

document.querySelector('.review-message').addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    addReview();
    addActiveClass();
    reviewsGenerater();
  }
});


products.forEach(p => {
  if (p.id === localStorage.getItem('id')) {
    if (p.colors) {
      for (let i in Object.keys(p.colors)) {
        document.querySelector('.product-colors').innerHTML += `
        <span class="colors" style="background-color: ${Object.keys(p.colors)[i]};" data-img="${Object.values(p.colors)[i]}"></span>
        `;
      }

      document.querySelector('.product-colors').querySelectorAll('.colors').forEach(color => {
        (p.image === color.getAttribute('data-img')) ? color.classList.add('colors-active') : color.classList.remove('colors-active');
        color.addEventListener('click', () => {
          document.querySelector('.product-image').src = color.getAttribute('data-img');
          p.image = color.getAttribute('data-img');
          document.querySelectorAll('.colors').forEach(color => {
            (p.image === color.getAttribute('data-img')) ? color.classList.add('colors-active') : color.classList.remove('colors-active');
          });
        });
      });
    }

    document.querySelector('.add-to-cart-button').addEventListener('click', () => {
      const productId = p.id;
      if (p.colors) {
        if (findProdCart(productId, Object.keys(p.colors)[Object.values(p.colors).indexOf(`${p.image}`)]) || findProdCart(productId, Object.keys(p.colors)[Object.values(p.colors).indexOf(`${p.image}`)]) === 0) {
          cart[findProdCart(productId, Object.keys(p.colors)[Object.values(p.colors).indexOf(`${p.image}`)])].quantity += Number(document.getElementById(productId).value);
        } else {
          cart.push({
            id: p.id,
            name: p.name,
            price: (p.newPrice / 100) ? (p.newPrice / 100).toFixed(2) : (p.priceCents / 100).toFixed(2),
            imageUrl: p.image,
            color: Object.keys(p.colors)[Object.values(p.colors).indexOf(`${p.image}`)],
            quantity: Number(document.getElementById(`${p.id}`).value)
          });
          shipping.push(0);
        }
      } else {
        if (findProdCart(productId, undefined) || findProdCart(productId, undefined) === 0) {
          cart[findProdCart(productId, undefined)].quantity += Number(document.getElementById(productId).value);
        } else {
          cart.push({
            id: p.id,
            name: p.name,
            price: (p.newPrice / 100) ? (p.newPrice / 100).toFixed(2) : (p.priceCents / 100).toFixed(2),
            imageUrl: p.image,
            color: '',
            quantity: Number(document.getElementById(`${p.id}`).value)
          });
          shipping.push(0);
        }
      }
      updateCartQuantity();
      localStorage.setItem('shipping', JSON.stringify(shipping));
      localStorage.setItem('cart', JSON.stringify(cart));
      document.getElementById(`${p.id}`).value = 1;
    });

  }

})
document.getElementById('open-slide-bar').addEventListener('click', function () {
  console.log('open slidebar');
  document.querySelector('.slide-bar').classList.add('open');
  document.querySelector('#open-slide-bar').style.display = 'none';
});
document.getElementById('close-slide-bar').addEventListener('click', function () {
  console.log('close slidebar');
  document.querySelector('.slide-bar').classList.remove('open');
  document.querySelector('#open-slide-bar').style.display = 'block';
});
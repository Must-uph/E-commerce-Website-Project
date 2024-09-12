import { ordersStatus } from "./utils.js";

const toast = document.getElementById('toast');

function confirmToast() {
  toast.classList.remove('show');
  document.querySelector('.container').style.filter = '';
}


const shippingForm = document.getElementById('shipping-form');
shippingForm.querySelectorAll('input').forEach(input => {
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      shippingForm.reportValidity();
      loginCheckValidity();
    }
  })
})

function loginCheckValidity() {
  if (shippingForm.reportValidity()) {
    const fullName = document.getElementById('full-name').value.trim();
    const address = document.getElementById('address').value.trim();
    const city = document.getElementById('city').value.trim();
    const postalCode = document.getElementById('postal-code').value.trim();

    if (!/\w+\s\w+/.test(fullName)) {
      toast.innerHTML = `
      <div class="toast-content">
        <span class="close-btn" id="closeToast">&times;</span>
        <h2>Order Confirmation</h2>
        <div class="toast-message">
          <img src="./images/icons/remove.png">
          <p>Please enter your full name with at least a first and last name</p>
        </div>
        <button id="confirmToastBtn" class="toast-confirm-btn">
          OK
        </button>
      </div>
      `;
      toast.style.backgroundColor = 'darkred';
      toast.classList.add('show');
      
      document.querySelector('.container').style.filter = 'blur(5px)';


      const closeToast = document.getElementById('closeToast');
      const confirmToastBtn = document.getElementById('confirmToastBtn');

      closeToast.addEventListener('click', function () {
        confirmToast();
      });

      confirmToastBtn.addEventListener('click', function () {
        confirmToast();
      });
      return;
    }

    if (address.split(' ').length < 2) {
      toast.innerHTML = `
      <div class="toast-content">
        <span class="close-btn" id="closeToast">&times;</span>
        <h2>Order Confirmation</h2>
        <div class="toast-message">
          <img src="./images/icons/remove.png">
          <p>Please enter a valid address with at least two words</p>
        </div>
        <button id="confirmToastBtn" class="toast-confirm-btn">
          OK
        </button>
      </div>
      `;
      toast.style.backgroundColor = 'darkred';
      toast.classList.add('show');
      
      document.querySelector('.container').style.filter = 'blur(5px)';


      const closeToast = document.getElementById('closeToast');
      const confirmToastBtn = document.getElementById('confirmToastBtn');

      closeToast.addEventListener('click', function () {
        confirmToast();
      });

      confirmToastBtn.addEventListener('click', function () {
        confirmToast();
      });
      return;
    }

    if (city.includes(' ')) {
      toast.innerHTML = `
      <div class="toast-content">
        <span class="close-btn" id="closeToast">&times;</span>
        <h2>Order Confirmation</h2>
        <div class="toast-message">
          <img src="./images/icons/remove.png">
          <p>City should be a single word</p>
        </div>
        <button id="confirmToastBtn" class="toast-confirm-btn">
          OK
        </button>
      </div>
      `;
      toast.style.backgroundColor = 'darkred';
      toast.classList.add('show');
      
      document.querySelector('.container').style.filter = 'blur(5px)';


      const closeToast = document.getElementById('closeToast');
      const confirmToastBtn = document.getElementById('confirmToastBtn');

      closeToast.addEventListener('click', function () {
        confirmToast();
      });

      confirmToastBtn.addEventListener('click', function () {
        confirmToast();
      });
      return;
    }

    if (!/^\d{5}$/.test(postalCode)) {
      toast.innerHTML = `
      <div class="toast-content">
        <span class="close-btn" id="closeToast">&times;</span>
        <h2>Order Confirmation</h2>
        <div class="toast-message">
          <img src="./images/icons/remove.png">
          <p>Please enter a valid 5-digit Postal Code</p>
        </div>
        <button id="confirmToastBtn" class="toast-confirm-btn">
          OK
        </button>
      </div>
      `;
      toast.style.backgroundColor = 'darkred';
      toast.classList.add('show');
      
      document.querySelector('.container').style.filter = 'blur(5px)';


      const closeToast = document.getElementById('closeToast');
      const confirmToastBtn = document.getElementById('confirmToastBtn');

      closeToast.addEventListener('click', function () {
        confirmToast();
      });

      confirmToastBtn.addEventListener('click', function () {
        confirmToast();
      });
      return;
    }

    document.getElementById('payment-section').classList.remove('hidden');
    shippingForm.classList.add('hidden');
    document.getElementById('payment-title').classList.remove('hidden');
    document.getElementById('shipping-title').classList.add('hidden');
    document.querySelector('.progress-container').querySelector('progress').value = '50';
    // document.getElementById('circle-step-1').classList.remove('active');
    // document.getElementById('circle-step-2').classList.add('active');
    // document.querySelectorAll('.progress-step')[0].querySelector('.progress-title').classList.add('active');
    // document.querySelectorAll('.progress-step')[1].querySelector('.progress-title').classList.add('active');
    shippingForm.reportValidity();
  } else {
    shippingForm.reportValidity();
  }
}
document.getElementById('next-to-payment').addEventListener('click', function (event) {
  event.preventDefault();
  loginCheckValidity();
});

document.getElementById('payment-method').addEventListener('change', function () {
  const methods = document.querySelectorAll('.payment-method');
  methods.forEach(method => {
    method.classList.remove('active');
    const inputs = method.querySelectorAll('input');
    inputs.forEach(input => {
      input.required = false;
    });
  });
  const selectedMethod = document.getElementById(this.value);
  if (selectedMethod) {
    selectedMethod.classList.add('active');
    const inputs = selectedMethod.querySelectorAll('input');
    inputs.forEach(input => {
      input.required = true;
    });
  }
});

function getQueryParameter(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const index = Number(getQueryParameter('index'));

document.getElementById('payment-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const paymentMethod = document.getElementById('payment-method').value;

  if (paymentMethod === 'credit-card') {
    const cardNumber = document.getElementById('card-number').value.trim();
    const expiryDate = document.getElementById('expiry-date').value.trim();
    const cvv = document.getElementById('cvv').value.trim();

    if (!/^\d{16}$/.test(cardNumber)) {
      toast.innerHTML = `
        <div class="toast-content">
          <span class="close-btn" id="closeToast">&times;</span>
          <h2>Order Confirmation</h2>
          <div class="toast-message">
            <img src="./images/icons/remove.png">
            <p>Please enter a valid 16-digit card number</p>
          </div>
          <button id="confirmToastBtn" class="toast-confirm-btn">
            OK
          </button>
        </div>
      `;
      toast.style.backgroundColor = 'darkred';
      toast.classList.add('show');
      
      document.querySelector('.container').style.filter = 'blur(5px)';

      const closeToast = document.getElementById('closeToast');
      const confirmToastBtn = document.getElementById('confirmToastBtn');

      closeToast.addEventListener('click', function () {
        confirmToast();
      });

      confirmToastBtn.addEventListener('click', function () {
        confirmToast();
      });
      return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
      toast.innerHTML = `
        <div class="toast-content">
          <span class="close-btn" id="closeToast">&times;</span>
          <h2>Order Confirmation</h2>
          <div class="toast-message">
            <img src="./images/icons/remove.png">
            <p>Please enter a valid expiry date in MM/YY format</p>
          </div>
          <button id="confirmToastBtn" class="toast-confirm-btn">
            OK
          </button>
        </div>
      `;
      toast.style.backgroundColor = 'darkred';
      toast.classList.add('show');
      
      document.querySelector('.container').style.filter = 'blur(5px)';


      const closeToast = document.getElementById('closeToast');
      const confirmToastBtn = document.getElementById('confirmToastBtn');

      closeToast.addEventListener('click', function () {
        confirmToast();
      });

      confirmToastBtn.addEventListener('click', function () {
        confirmToast();
      });
      return;
    }

    if (!/^\d{3}$/.test(cvv)) {
      toast.innerHTML = `
        <div class="toast-content">
          <span class="close-btn" id="closeToast">&times;</span>
          <h2>Order Confirmation</h2>
          <div class="toast-message">
            <img src="./images/icons/remove.png">
            <p>Please enter a valid 3-digit CVV</p>
          </div>
          <button id="confirmToastBtn" class="toast-confirm-btn">
            OK
          </button>
        </div>
      `;
      toast.style.backgroundColor = 'darkred';
      toast.classList.add('show');
      
      document.querySelector('.container').style.filter = 'blur(5px)';


      const closeToast = document.getElementById('closeToast');
      const confirmToastBtn = document.getElementById('confirmToastBtn');

      closeToast.addEventListener('click', function () {
        confirmToast();
      });

      confirmToastBtn.addEventListener('click', function () {
        confirmToast();
      });
      return;
    }
  } else if (paymentMethod === 'paypal') {
    const paypalEmail = document.getElementById('paypal-email').value.trim();

    if (!/\S+@\S+\.\S+/.test(paypalEmail)) {
      toast.innerHTML = `
        <div class="toast-content">
          <span class="close-btn" id="closeToast">&times;</span>
          <h2>Order Confirmation</h2>
          <div class="toast-message">
            <img src="./images/icons/remove.png">
            <p>Please enter a valid PayPal email address</p>
          </div>
          <button id="confirmToastBtn" class="toast-confirm-btn">
            OK
          </button>
        </div>
      `;
      toast.style.backgroundColor = 'darkred';
      toast.classList.add('show');
      
      document.querySelector('.container').style.filter = 'blur(5px)';


      const closeToast = document.getElementById('closeToast');
      const confirmToastBtn = document.getElementById('confirmToastBtn');

      closeToast.addEventListener('click', function () {
        confirmToast();
      });

      confirmToastBtn.addEventListener('click', function () {
        confirmToast();
      });
      return;
    }
  }
  toast.innerHTML = `
  <div class="toast-content">
    <span class="close-btn" id="closeToast">&times;</span>
    <h2>Order Confirmation</h2>
    <div class="toast-message">
      <img src="./images/icons/check.png">
      <p>Your Order Confirmed Successfully!</p>
    </div>
    <button id="confirmToastBtn" class="toast-confirm-btn">
      OK
    </button>
  </div>
  `;
  toast.style.backgroundColor = 'darkgreen';
  toast.classList.add('show');
  
  document.querySelector('.container').style.filter = 'blur(5px)';

  const closeToast = document.getElementById('closeToast');
  const confirmToastBtn = document.getElementById('confirmToastBtn');
  document.querySelector('.progress-container').querySelector('progress').value = '100';

  closeToast.addEventListener('click', function () {
    confirmToast();
  });

  confirmToastBtn.addEventListener('click', function () {
    confirmToast();
    ordersStatus[index] = 'Confirmed';
    localStorage.setItem('ordersStatus', JSON.stringify(ordersStatus));
    window.location.href = './orders.html';
  });
});
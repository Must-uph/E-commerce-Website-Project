let users = JSON.parse(localStorage.getItem('users')) || [];

const toast = document.getElementById('toast');

let login = false;
let signup = false;

console.log(users);

// localStorage.clear();

function getQueryParameter(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

const redirectPage = getQueryParameter('redirect') || 'principal.html';

document.getElementById('signup-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  users.forEach((user) => {
    if (user.username === username) {
      signup = true;
      toast.innerHTML = `
        <div class="toast-content">
          <span class="close-btn" id="closeToast">&times;</span>
          <h2>Registration</h2>
          <div class="toast-message">
            <img src="./images/icons/remove.png">
            <p>Username already exists!</p>
          </div>
          <button id="confirmToastBtn" class="toast-confirm-btn">
            OK
          </button>
        </div>
      `;
      toast.style.backgroundColor = 'darkred';
      toast.classList.add('show');
      document.querySelector('.main').style.filter = 'blur(5px)';

      const closeToast = document.getElementById('closeToast');
      const confirmToastBtn = document.getElementById('confirmToastBtn');

      closeToast.addEventListener('click', function () {
        signup = false;
        toast.classList.remove('show');
        document.querySelector('.main').style.filter = '';
      });
      confirmToastBtn.addEventListener('click', function () {
        toast.classList.remove('show');
        document.querySelector('.main').style.filter = '';
        signup = false;
      });
      return;
    }
  })
  if (!signup &&  !/^[A-Za-z0-9@]{8,}$/.test(password)) {
    toast.innerHTML = `
    <div class="toast-content">
      <span class="close-btn" id="closeToast">&times;</span>
      <h2>Registration</h2>
      <div class="toast-message">
        <img src="./images/icons/remove.png">
        <p>Please enter a valid 8-characters password at least</p>
      </div>
      <button id="confirmToastBtn" class="toast-confirm-btn">
        OK
      </button>
    </div>
  `;
    toast.style.backgroundColor = 'darkred';
    toast.classList.add('show');
    document.querySelector('.main').style.filter = 'blur(5px)';
    const closeToast = document.getElementById('closeToast');
    const confirmToastBtn = document.getElementById('confirmToastBtn');

    closeToast.addEventListener('click', function () {
      
      toast.classList.remove('show');
      document.querySelector('.main').style.filter = '';
    });
    confirmToastBtn.addEventListener('click', function () {
      toast.classList.remove('show');
      document.querySelector('.main').style.filter = '';
    });
    return;
  } else if (!signup && /^[A-Za-z0-9@]{8,}$/.test(password)) {
    const user = {
      username: username,
      email: email,
      password: password
    };
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('user', JSON.stringify(user));

    toast.innerHTML = `
    <div class="toast-content">
      <span class="close-btn" id="closeToast">&times;</span>
      <h2>Registration</h2>
      <div class="toast-message">
        <img src="./images/icons/check.png">
        <p>User registered successfully!</p>
      </div>
      <button id="confirmToastBtn" class="toast-confirm-btn">
        Continue
      </button>
    </div>
  `;
    toast.style.backgroundColor = 'darkgreen';
    toast.classList.add('show');
    document.querySelector('.main').style.filter = 'blur(5px)';
    const closeToast = document.getElementById('closeToast');
    const confirmToastBtn = document.getElementById('confirmToastBtn');

    closeToast.addEventListener('click', function () {
      
      toast.classList.remove('show');
      document.querySelector('.main').style.filter = '';
    });
    confirmToastBtn.addEventListener('click', function () {
      toast.classList.remove('show');
      document.querySelector('.main').style.filter = '';
      window.location.href = redirectPage;
    });
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-email').value = '';
    document.getElementById('signup-password').value = '';

    return;
  }
});



document.getElementById('login-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  users.forEach((user) => {
    if (user.password === password && user.username === username) {
      login = true;
      localStorage.setItem('user', JSON.stringify(user));

      toast.innerHTML = `
        <div class="toast-content">
          <span class="close-btn" id="closeToast">&times;</span>
          <h2>Registration</h2>
          <div class="toast-message">
            <img src="./images/icons/check.png">
            <p>Logged in successfully!</p>
          </div>
          <button id="confirmToastBtn" class="toast-confirm-btn">
            Continue
          </button>
        </div>
      `;
      toast.style.backgroundColor = 'darkgreen';
      toast.classList.add('show');
      document.querySelector('.main').style.filter = 'blur(5px)';
      const closeToast = document.getElementById('closeToast');
      const confirmToastBtn = document.getElementById('confirmToastBtn');

      closeToast.addEventListener('click', function () {
        
        toast.classList.remove('show');
        document.querySelector('.main').style.filter = '';
      });
      confirmToastBtn.addEventListener('click', function () {
        toast.classList.remove('show');
        document.querySelector('.main').style.filter = '';
        window.location.href = redirectPage;
      });
      document.getElementById('login-username').value = '';
      document.getElementById('login-password').value = '';

    } else if (user.password != password && user.username === username) {
      login = true;

      toast.innerHTML = `
        <div class="toast-content">
          <span class="close-btn" id="closeToast">&times;</span>
          <h2>Registration</h2>
          <div class="toast-message">
            <img src="./images/icons/remove.png">
            <p>Incorrect password!</p>
          </div>
          <button id="confirmToastBtn" class="toast-confirm-btn">
           OK
          </button>
        </div>
      `;
      toast.style.backgroundColor = 'darkred';
      toast.classList.add('show');
      document.querySelector('.main').style.filter = 'blur(5px)';
      const closeToast = document.getElementById('closeToast');
      const confirmToastBtn = document.getElementById('confirmToastBtn');

      closeToast.addEventListener('click', function () {
        
        toast.classList.remove('show');
        document.querySelector('.main').style.filter = '';
      });
      confirmToastBtn.addEventListener('click', function () {
        toast.classList.remove('show');
        document.querySelector('.main').style.filter = '';
      });
    }
  })

  if (!login) {

    toast.innerHTML = `
        <div class="toast-content">
          <span class="close-btn" id="closeToast">&times;</span>
          <h2>Registration</h2>
          <div class="toast-message">
            <img src="./images/icons/remove.png">
            <p>Username does not exist!</p>
          </div>
          <button id="confirmToastBtn" class="toast-confirm-btn">
            OK
          </button>
        </div>
      `;
    toast.style.backgroundColor = 'darkred';
    toast.classList.add('show');
    document.querySelector('.main').style.filter = 'blur(5px)';
    const closeToast = document.getElementById('closeToast');
    const confirmToastBtn = document.getElementById('confirmToastBtn');

    closeToast.addEventListener('click', function () {
      
      toast.classList.remove('show');
      document.querySelector('.main').style.filter = '';
    });
    confirmToastBtn.addEventListener('click', function () {
      toast.classList.remove('show');
      document.querySelector('.main').style.filter = '';
    });
  }
});
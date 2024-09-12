function slidebar() {
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
}

slidebar();
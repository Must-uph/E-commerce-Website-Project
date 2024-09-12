document.querySelectorAll('.category').forEach(category => {
  category.addEventListener('click', () => {
    let cat = category.getAttribute('data-type').toLowerCase();
    localStorage.setItem('cat', cat);
    window.location.href = `./products.html`;
  })
}); 
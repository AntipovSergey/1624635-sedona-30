let button = document.querySelector('.search-form-button');
let form_show = document.querySelector('.search-form-hide');

button.addEventListener('click', function(evt) {
  evt.preventDefault();
  form_show.classList.toggle('search-form-hide');
  form_show.classList.toggle('search-form-show');
});


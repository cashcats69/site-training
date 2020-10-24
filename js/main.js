let menuToggle = document.querySelector('#menu-toggle');
let menu = document.querySelector('.sidebar');
menuToggle.addEventListener('click', function(event){
  event.preventDefault(); // не забудь, ебло, что ты отключаешь клик.
  menu.classList.toggle('visible');
})
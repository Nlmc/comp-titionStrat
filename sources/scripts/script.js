var button = document.querySelector('#cross');
var form = document.querySelector('.popup-content .subscribe');
var logo = document.querySelector('.popup-content .logocontainer figure');
var popup = document.querySelector('.popup-header');
var infos = document.querySelector('.infos');
var contact = document.querySelector('#contact');
var header = document.querySelector('.popup-header');
console.log(button, popup);

contact.addEventListener('click', function(){
  header.classList.toggle('hidden');
  cross.classList.toggle('faded');
});

button.addEventListener('click', function(){
  header.classList.toggle('hidden');
  cross.classList.toggle('faded');
});

var button = document.querySelector('#cross');
var form = document.querySelector('.popup-content .subscribe');
var logo = document.querySelector('.popup-content .logocontainer figure');
var popup = document.querySelector('.popup-header');
var infos = document.querySelector('.infos');

console.log(button, popup);

cross.addEventListener('click', function(){
  popup.classList.toggle('expanded');

  setTimeout(function(){
    logo.classList.toggle('hidden');
    form.classList.toggle('hidden');
    cross.classList.toggle('hidden');
    infos.classList.toggle('hidden');
  }, 350);
})

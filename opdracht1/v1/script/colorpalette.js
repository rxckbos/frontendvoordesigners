//*Foto blue
/*
var buttonblue = document.getElementsByClassName('.blue_button');
var imagered = document.getElementsByClassName('.red-image');

function startbluefilter() {
      imagered.classList.toggle('.red-image-invisible');
}

buttonblue.addEventListener('click', startbluefilter);
*/



//BUTTONBLUE
var buttonblue = document.querySelector('.buttonblue');
var imagered = document.querySelector('.imagered');

function startbutton() {
  buttonblue.classList.toggle('startbutton');
}

function hideimagered() {
  imagered.classList.toggle('hideimagered');
}

buttonblue.addEventListener('click', startbutton);
buttonblue.addEventListener('click', hideimagered);

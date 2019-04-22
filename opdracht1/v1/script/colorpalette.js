//BUTTONBLUE
/*
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
*/

var buttonblue = document.querySelector('.buttonblue');
var imagered = document.querySelector('.imagered');
var imageAll = document.querySelector('img');

function startbutton() {
  buttonblue.classList.toggle('startbutton');
}

function hideimagered() {  
    imageAll.classList.toggle('hideallimages');
  /*imagered.classList.add('hideimagered');*/
}

buttonblue.addEventListener('click', startbutton);
buttonblue.addEventListener('click', hideimagered);
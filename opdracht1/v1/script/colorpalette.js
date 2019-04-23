//BUTTONBLUE
var buttonblue = document.querySelector('.buttonblue');
var imageyellow = document.querySelectorAll('.imageyellow');
var imagered = document.querySelectorAll('.imagered');
var imagegreen = document.querySelectorAll('.imagegreen');

function startbutton() {
  buttonblue.classList.toggle('startbutton');
}

function hideForBlue() {
    for(var hideimageyellow of imageyellow){
        console.log(hideimageyellow);
        hideimageyellow.classList.toggle('hideimageyellow');
    }
    
    for(var hideimagered of imagered){
        console.log(hideimagered);
        hideimagered.classList.toggle('hideimagered');
    }
    
    for(var hideimagegreen of imagegreen){
        console.log(hideimagegreen);
        hideimagegreen.classList.toggle('hideimagegreen');
    }
}

buttonblue.addEventListener('click', startbutton);
buttonblue.addEventListener('click', hideForBlue);
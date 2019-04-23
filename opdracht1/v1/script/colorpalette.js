//Filter on blue images.
//Variables for al images and buttons
var buttonblue = document.querySelector('.buttonblue');
var buttonyellow = document.querySelector('.buttonyellow');

var imageblue = document.querySelectorAll('.imageblue');
var imageyellow = document.querySelectorAll('.imageyellow');
var imagered = document.querySelectorAll('.imagered');
var imagegreen = document.querySelectorAll('.imagegreen');

//Select button blue
function buttonbluetransform() {
  buttonblue.classList.toggle('startbutton');
}

//Select button yellow
function buttonyellowtransform() {
    buttonyellow.classlist.toggle('startbutton');
}

//Hide all images with other color
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

//Blue button
buttonblue.addEventListener('click', buttonbluetransform);
buttonblue.addEventListener('click', hideForBlue);

//Yellow Button
buttonyellow.addEventListener('click', buttonyellowtransform);




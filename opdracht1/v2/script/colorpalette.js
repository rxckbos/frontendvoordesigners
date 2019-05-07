//-------------------------------------Filter on blue images.
//Variables for al images and buttons
var buttonblue = document.querySelector('.buttonblue');

var imageblue = document.querySelectorAll('.imageblue');
var imageyellow = document.querySelectorAll('.imageyellow');
var imagered = document.querySelectorAll('.imagered');
var imagegreen = document.querySelectorAll('.imagegreen');

//Select button blue
function buttonbluetransform() {
  buttonblue.classList.add('startbutton');
}

//Hide all images with other color
function hideForBlue() {
    for(var hideimageyellow of imageyellow){
        //console.log(hideimageyellow);
        hideimageyellow.classList.add('hideimageyellow');
    }
    
    for(var hideimagered of imagered){
        hideimagered.classList.add('hideimagered');
    }
    
    for(var hideimagegreen of imagegreen){
        hideimagegreen.classList.add('hideimagegreen');
    }
    
    for(var showimageblue of imageblue){
        showimageblue.classList.remove('hideimageblue');
    }
    
    buttonred.classList.remove('startbutton');   
    buttonyellow.classList.remove('startbutton');
    buttongreen.classList.remove('startbutton');
}

//Blue button
buttonblue.addEventListener('click', buttonbluetransform);
buttonblue.addEventListener('click', hideForBlue);



//-------------------------------------Filter on yellow images.

//Variables for al images and buttons
var buttonyellow = document.querySelector('.buttonyellow');

//Select button yellow
function buttonyellowtransform() {
    buttonyellow.classList.add('startbutton');
}

//Hide all images with other color
function hideForYellow() {
    for(var hideimageblue of imageblue){
        hideimageblue.classList.add('hideimageblue');
    }
    
    for(var hideimagered of imagered){
        hideimagered.classList.add('hideimagered');
    }
    
    for(var hideimagegreen of imagegreen){
        hideimagegreen.classList.add('hideimagegreen');
    }
    
    for(var showimageyellow of imageyellow){
        showimageyellow.classList.remove('hideimageyellow');
    }
    
    buttonblue.classList.remove('startbutton');   
    buttonred.classList.remove('startbutton');
    buttongreen.classList.remove('startbutton');
}

//Yellow Button
buttonyellow.addEventListener('click', buttonyellowtransform);
buttonyellow.addEventListener('click', hideForYellow);



//-------------------------------------Filter on Red images.

//Variables for al images and buttons
var buttonred = document.querySelector('.buttonred');

//Select button red
function buttonredtransform() {
    buttonred.classList.add('startbutton');
}

//Hide all images with other color
function hideForRed() {
    for(var hideimageyellow of imageyellow){
        hideimageyellow.classList.add('hideimageyellow');
    }
    
    for(var hideimageblue of imageblue){
        hideimageblue.classList.add('hideimageblue');
    }
    
    for(var hideimagegreen of imagegreen){
        hideimagegreen.classList.add('hideimagegreen');
    }
    
    for(var showimagered of imagered){
        showimagered.classList.remove('hideimagered');
    }
    
    buttonblue.classList.remove('startbutton');   
    buttonyellow.classList.remove('startbutton');
    buttongreen.classList.remove('startbutton');
}

//Red Button
buttonred.addEventListener('click', buttonredtransform);
buttonred.addEventListener('click', hideForRed);


//-------------------------------------Filter on Green images.

//Variables for al images and buttons
var buttongreen = document.querySelector('.buttongreen');

//Select button Green
function buttongreentransform() {
    buttongreen.classList.add('startbutton');
}

//Hide all images with other color
function hideForGreen() {
    for(var hideimageyellow of imageyellow){
        hideimageyellow.classList.add('hideimageyellow');
    }
    
    for(var hideimageblue of imageblue){
        hideimageblue.classList.add('hideimageblue');
    }
    
    for(var hideimagered of imagered){
        hideimagered.classList.add('hideimagered');
    }
    
    for(var showimagegreen of imagegreen){
        showimagegreen.classList.remove('hideimagegreen');
    }
    
    buttonblue.classList.remove('startbutton');   
    buttonyellow.classList.remove('startbutton');
    buttonred.classList.remove('startbutton');
}

//Green Button
buttongreen.addEventListener('click', buttongreentransform);
buttongreen.addEventListener('click', hideForGreen);




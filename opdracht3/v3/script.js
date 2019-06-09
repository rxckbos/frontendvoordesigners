var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var section = document.querySelector('section'); //Deze section wordt gevuld met content
var button = document.querySelector('button'); //Button om films te laden (json content)
var laadElement = document.querySelector('span'); //Loading gif
var uitlegN = document.querySelector('p'); //uitleg 'N' voor verkennen films
var scrollButton = document.querySelector('.scroll-button'); //scroll naar eerste film

//Scroll naar volgende film met 'N'
document.body.onkeydown = function scrollWin(scroll) {
    var code = scroll.keyCode;
    if (code === 78) { // key code for N
        window.scrollBy(0, 720);
    }
};

//Scroll naar eerste film
function scrollTop() {
    window.scrollTo(0, 800); //814px zorgt ervoor dat hij naar de eerste film gaat
}

scrollButton.onclick = function () {
    scrollTop(); //functie uitvoeren
}

//json laden
function laadContent() {
    var request = new XMLHttpRequest();
    request.open('get', uri);
    request.responseType = 'json';
    request.send();
    console.log("loadimagesmetXHR", request);

    //Listener aanroepen na laden json
    request.addEventListener("load", function () {
        setTimeout(function () { //Timer voor loading gif zetten

            //zorgt voor een display none na 2 seconden
            laadElement.classList.remove('show');

            var data = request.response;
            console.log("request is geladen: ", request.response);

            //functie die html elementen aanmaakt en daar de json data in stopt
            maakhtml(data);

            //Druk op 'N' om de films te bekijken
            uitlegN.classList.add('show');

            //Scroll-button weergeven
            scrollButton.classList.add('show');
            
            window.scrollTo(0, 800);

        }, 2000) //timer op 2 seconden
    });
}

//Button om te beginnen met het ontdekken van de films
button.onclick = function () {
    laadElement.classList.add('show'); //weergeven van loading gif
    section.innerHTML = ""; //section leeg halen
    laadContent(); //functie uitvoeren (hierboven)
}

//json data toewijzen aan HTML
function maakhtml(jsondata) {
    var film = jsondata;

    //For loop zodat elke film wordt toegewezen in aan HTML
    console.log("films", film.length)
    for (var i = 0; i < film.length; i++) {

        //Alle elementen van 1 film komen in een article
        var myArticle = document.createElement('article');
        
        //HTML elementen voor elke film
        var myimg = document.createElement('img');
        var myH2 = document.createElement('h2');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');

        //Json data voor elke film
        myimg.setAttribute("src", film[i].cover)
        myH2.textContent = film[i].title;
        myH3.textContent = film[i].genres;
        myPara1.textContent = film[i].plot;

        //Alle elementen in article
        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myimg);
        section.appendChild(myArticle);
    }
}

/*
var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var header = document.querySelector('header');
var section = document.querySelector('section');

console.log('section', section);

//json laden

console.log("loadimagesmetXHR");
var request = new XMLHttpRequest();
request.open('get', uri);
request.responseType = 'json';
request.send();

request.addEventListener("load", function () {
    var data = request.response;
    console.log("request is geladen: ", request.response);
    //er is data
    //nu kun je iets doen
    section.textContent = JSON.stringify(data);

    function populateHeader(jsonObj) {
        var myH1 = document.createElement('h1');
        myH1.textContent = jsonObj['squadName'];
        header.appendChild(myH1);

        var myPara = document.createElement('p');
        myPara.textContent = 'Hometown: ' + jsonObj['homeTown'] + ' // Formed: ' + jsonObj['formed'];
        header.appendChild(myPara);
    }
});

*/

var uri = "https://koopreynders.github.io/frontendvoordesigners/opdracht3/json/movies.json";

var header = document.querySelector('header');
var section = document.querySelector('section');

console.log("section", section);


//json laden enzo


var request = new XMLHttpRequest();
request.open('get', uri);
request.responseType = 'json';
request.send();
console.log("loadimagesmetXHR", request);

//als json is geladen dan wordt dexe listener aangeroepen
request.addEventListener("load", function () {
    var data = request.response;
    console.log("request is geladen: ", request.response);

    //roep een functie die html elementen aanmaakt en daar de json data in stopt
    maakhtml(data);

});


button.addEventListener('click', laadJson);

function maakhtml(jsondata) {
    var film = jsondata;

    console.log("films?", film.length)
    for (var i = 0; i < film.length; i++) {

        //HTML elementen voor elke film
        var myArticle = document.createElement('article'); //elke film een article

        var myimg = document.createElement('img');
        var myH2 = document.createElement('h2');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');

        //Json data voor elke film
        myimg.setAttribute("src", film[i].cover)
        myH2.textContent = film[i].title;
        myH3.textContent = 'Genre: ' + film[i].genres;
        myPara1.textContent = 'Plot: ' + film[i].plot;

        //HTML elementen voor elke film
        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myimg);
        section.appendChild(myArticle);

    }
    //einde van for loop
}

let nav = '<nav><a href="index.html">HOME</a>'+'<nav><a href="contact.html">KONTAKT</a>'+'<a href="mapy.html">MAPA</a>'+'<a href=#3>BLOG</a>'+'<a href=#4>QUIZ</a></nav>';
let elem = document.querySelector('.navbar');
elem.innerHTML = nav

//pobranie referencji do przycisku
let button = document.querySelector('#bg');

//załączenie nasłuchiwacza
button.addEventListener('click', ()=> {
  //pobranie referencji do tła strony
  let body = document.getElementsByTagName('body')[0];

  //zmiana tła strony - losowanie kolorów
  body.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
});

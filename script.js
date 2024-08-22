var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay:50,
    deleteSpeed:5
});

typewriter.typeString('Hey there !')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString('Nice to meet you.')
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("My name is Jack.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm a student at Brunel University London.")
    .pauseFor(1000)
    .deleteAll()
    .pauseFor(500)
    .typeString("I'm studying computer science.")
    .pauseFor(1000)
    .deleteAll()
    .typeString("Thanks for visiting !")
    .pauseFor(1000)
    .deleteAll()
    .start();

// When the user scrolls down 20px from the top of the document, slide down the navbar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
    document.getElementById("nav").style.top = "0";
  } else {
    document.getElementById("nav").style.top = "-70px";
  }
}



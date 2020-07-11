// Detecting button clicked
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonClicked = this.innerHTML;
    makeSound(buttonClicked);
    buttonAnimation(buttonClicked);
  });
}

// Detection keyboard pressed
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

//
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3").play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3").play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3").play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3").play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3").play();
      break;
    case "k":
      var kickBass = new Audio("sounds/kick-bass.mp3").play();
      break;
    case "l":
      var crash = new Audio("sounds/crash.mp3").play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(key) {
  var activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

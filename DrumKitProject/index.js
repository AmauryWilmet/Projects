var buttons = document.querySelectorAll("button");
var currentButtonGlobal = null;

buttons.forEach(function(currentButton) {
  var nameAudio = '';
  currentButton.addEventListener('mousedown', function() {
    currentButtonGlobal = currentButton;
    animeButton(currentButton);
    console.log(currentButton.className);
    switch(currentButton.className) {
      case "w drum":
        nameAudio = 'sounds/tom-1.mp3';
      break;
      case "a drum":
        nameAudio = 'sounds/tom-2.mp3';
      break;
      case "s drum":
        nameAudio = 'sounds/tom-3.mp3';
      break;
      case "d drum":
        nameAudio = 'sounds/tom-4.mp3';
      break;
      case "j drum":
        nameAudio = 'sounds/snare.mp3';
      break;
      case "k drum":
        nameAudio = 'sounds/crash.mp3';
      break;
      case "l drum":
        nameAudio = 'sounds/kick-bass.mp3';
      break;
    }
    var audio = new Audio(nameAudio);
    audio.play();
  });
  currentButton.addEventListener("mouseup", function() {
    clearAnimate(currentButton);
  });
});

document.addEventListener('keydown', (e) => {
  var nameAudio = '';
  switch(e.code) {
    case "KeyW":
      nameAudio = 'sounds/tom-1.mp3';
      animeButton(buttons[0]);
    break;
    case "KeyQ":
      nameAudio = 'sounds/tom-2.mp3';
      animeButton(buttons[1]);
    break;
    case "KeyS":
      nameAudio = 'sounds/tom-3.mp3';
      animeButton(buttons[2]);
    break;
    case "KeyD":
      nameAudio = 'sounds/tom-4.mp3';
      animeButton(buttons[3]);
    break;
    case "KeyJ":
      nameAudio = 'sounds/snare.mp3';
      animeButton(buttons[4]);
    break;
    case "KeyK":
      nameAudio = 'sounds/crash.mp3';
      animeButton(buttons[5]);
    break;
    case "KeyL":
      nameAudio = 'sounds/kick-bass.mp3';
      animeButton(buttons[6]);
    break;
    default:
      nameAudio = "default";
    break;
  }
  if (nameAudio != "default") {
    var audio = new Audio(nameAudio);
    audio.play();
  }
});

document.addEventListener('keyup', (e) => {
  switch(e.code) {
    case "KeyW":
      nameAudio = 'sounds/tom-1.mp3';
      clearAnimate(buttons[0]);
    break;
    case "KeyQ":
      nameAudio = 'sounds/tom-2.mp3';
      clearAnimate(buttons[1]);
    break;
    case "KeyS":
      nameAudio = 'sounds/tom-3.mp3';
      clearAnimate(buttons[2]);
    break;
    case "KeyD":
      nameAudio = 'sounds/tom-4.mp3';
      clearAnimate(buttons[3]);
    break;
    case "KeyJ":
      nameAudio = 'sounds/snare.mp3';
      clearAnimate(buttons[4]);
    break;
    case "KeyK":
      nameAudio = 'sounds/crash.mp3';
      clearAnimate(buttons[5]);
    break;
    case "KeyL":
      nameAudio = 'sounds/kick-bass.mp3';
      clearAnimate(buttons[6]);
    break;
    default:
      nameAudio = "default";
    break;
  }
});

function animeButton(button) {
  button.style.boxShadow = '1px 1px 2px rgba(255, 255, 255, 0.5)';
  button.style.opacity = '0.7';
}

function clearAnimate(button) {
  button.style.boxShadow = 'none';
  button.style.opacity = '1';
}

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var title = document.querySelector('h1');
var imageDiceeOne = document.querySelector('.img1');
var imageDiceeTwo = document.querySelector('.img2');
var iconLeft = document.querySelector('#left-icon');
var iconRight = document.querySelector('#right-icon');
iconLeft.style.display = 'none';
iconRight.style.display = 'none';

imageDiceeOne.setAttribute('src', 'images/dice' + randomNumber1 + '.png');
imageDiceeTwo.setAttribute('src', 'images/dice' + randomNumber2 + '.png');

if (randomNumber1 > randomNumber2)  {
  title.innerHTML = 'Player 1 Wins !';
  iconLeft.style.display = 'block';
} else if (randomNumber1 < randomNumber2) {
  title.innerHTML = 'Player 2 Wins !';
  iconRight.style.display = 'block';
} else {
  title.innerHTML = 'Draw !';
  iconRight.style.display = 'block';
  iconLeft.style.display = 'block';
}

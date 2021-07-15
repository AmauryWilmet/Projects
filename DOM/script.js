document.querySelector('h1').innerHTML = "YEs";
var button = document.querySelector('button');
button.style.color = 'red';
button.style.backgroundColor = 'blue';
button.innerHTML = 'ZZZZZZ';
button.onclick = function() {
  console.log("ok");
}

console.log(button.attributes);

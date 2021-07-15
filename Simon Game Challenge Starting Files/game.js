$(function() {
  var buttonColours = ['green', 'red', 'yellow', 'blue'];
  var randomPatternColours = [];
  var userClickedPattern = [];
  var gameIsStarted = false;
  var index = 0;
  var lv = 0;

  $('div[type="button"]').click(function() {
    if (gameIsStarted) {
      var userChosenColour = $(this).attr('id');
      var audio = new Audio('sounds/' + userChosenColour + '.mp3');
      console.log(randomPatternColours + '\n');
      userClickedPattern.push(userChosenColour);
      $(this).fadeOut(100).fadeIn(100);
      audio.play();
      checkAnswer();
    }
  });

  $("body").keydown(function(event) {
    if (gameIsStarted == false) {
      setTimeout(playAnimeAndSoundRandomColor, 1000);
    }
    gameIsStarted = true;
  });

  function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    return randomNumber;
  }

  function checkAnswer() {
    index += 1;
    console.log(index - 1);
    console.log(randomPatternColours[index - 1]);
    if (userClickedPattern[index - 1] != randomPatternColours[index - 1]) {
      gameOver();
    } else {
      if (userClickedPattern.length === randomPatternColours.length) {
        setTimeout(playAnimeAndSoundRandomColor, 1000);
        lv+=1;
        userClickedPattern = [];
        index = 0;
      }
    }
  }

  function gameOver() {
    var audio = new Audio("sounds/wrong.mp3");
    audio.play();
    $('h1').text("Press A Key to Restart");
    gameIsStarted = false;
    lv = 0;
    userClickedPattern = [];
    randomPatternColours = [];
    index = 0;
  }

  function playAnimeAndSoundRandomColor() {
    if (gameIsStarted) {
      randomChosenColour = buttonColours[nextSequence()];
      randomPatternColours.push(randomChosenColour);
      var audio = new Audio('sounds/' + randomChosenColour + '.mp3');
      audio.play();
      $('#' + randomChosenColour).fadeOut(100).fadeIn(100);
      $('h1').text('Level ' + lv);
    }
  }

});

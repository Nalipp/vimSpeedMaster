
console.log('hi');
function newGame() {
  // initiates playerElement
  // initiates score
  var gameTarget = createGameTarget() // initiates gameElement

  console.log(gameTarget.getLeftPosition());

  listenKeypress() // listens to document for keypress
}

function listenKeypress() {
  var player = document.querySelector('#player');

  document.addEventListener('keyup', function(event) {
    var keyCode = event.which;
    if (keyCode === 74 || keyCode === 40) playerPosition(moveDirection, combo);
    if (keyCode === 75 || keyCode === 38) playerPosition(moveDirection, combo); 
    if (keyCode === 72 || keyCode === 37) playerPosition(moveDirection, combo);
    if (keyCode === 76 || keyCode === 39) playerPosition(moveDirection, combo);
    
    // if (snow1.getLeftPosition() === player.style.left && snow1.getTopPosition() === player.style.top) {
    //   gameScore.incrementScore1();
    //   score.textContent = gameScore.getScore();

    //   snow = document.querySelector('#snow');
    //   snow.remove()
    //   snow1 = null;

    //   snow1 = createGameElement('snow');
    // }
  });
}

function createGameTarget() {
  var target = document.querySelector('#game-target'); 
  var topPosition = (Math.floor(Math.random() * 660 / 20) * 20) + 'px';
  var leftPosition = (Math.floor(Math.random() * 1240 / 20) * 20) + 'px';
  target.style.top = topPosition;
  target.style.left = leftPosition;
  return {
    getLeftPosition: function() {
      return leftPosition; 
    },
    getTopPosition: function() {
      return topPosition;
    },
  }
}

function createPlayer(direction, combo) {
  var multipler = combo;
    
  var topPosition = 340; 
  var leftPosition = 620; 

  // updates current top and left position (including combo)
  return {
    getCurrentTop : function() {
      return currentTop;
    },
    getCurrentLeft : function() {
      return currentLeft;
    },
    updateTopPosition : function(newValue) {
      var currentValue = Number(player.style.top.slice(0, -2));
      var topPosition = currentValue += newValue; 
    }
    updateLeftPosition : function(newValue) {
      var currentValue = Number(player.style.left.slice(0, -2));
      var leftPosition = currentValue += newValue; 
    }
  }
  
}


// function moveLeft1(player, numCombo) {
//   var multipler = numCombo.getMultiplier()
//   var num = Number(player.style.left.slice(0, -2))
//   incrementNum = 20 * multipler; 
//   if ((num - incrementNum) > 0) {
//     num -= incrementNum;
//   } else {
//     num = 0;
//   }
//   player.style.left = num + 'px';
//   numCombo.emptyMultiplier();
// }

function captureCombo() {
}

function updateScore() {
}

function createPlayerElement() {
}

function movePlayer(direction, combo) {
}

function resetGame() {
}

function initiateTimer() {
}

// function moveDown1(player, numCombo) {
// }

// function moveUp1(player, numCombo) {
// }

// function moveRight1(player, numCombo) {
// }

// function moveLeft1(player, numCombo) {
// }

newGame();



console.log('man');

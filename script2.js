$(function() {
  var maxWidth = 1260;
  var maxHeight = 680;

  var startTime = Date.now(); 
  var numCombo = captureCombo();
  var elementTime = createElementTime();

  function newGame() {
    createGameTarget(); 
    createGameTarget();
    // createGameTime();

    playerListen();
  }

  function playerListen() {
    $(document).on('keyup', function(e) {
      var keyCode = e.which;
      numCombo.filterNums(String.fromCharCode(e.which));

      var combo = numCombo.getMultiplier();
      if (keyCode === 72 || keyCode === 37) movePos('left', combo);
      if (keyCode === 76 || keyCode === 39) movePos('right', combo);
      if (keyCode === 75 || keyCode === 38) movePos('up', combo);
      if (keyCode === 74 || keyCode === 40) movePos('down', combo);
    });

    function movePos(direction, combo) {
      var $player = $('#player');
      var $playerPos = $('#player').offset();
      var multipler;

      switch (direction) {
        case 'left':
          if ($playerPos.left - (combo * 20) < 1) $player.css('left', 0);
          else if ($playerPos.left > 1) $player.css('left', '-=' + 20 * combo);
          break;
        case 'right':
          if ($playerPos.left + (combo * 20) > maxWidth) $player.css('left', maxWidth);
          else if ($playerPos.left < maxWidth) $player.css('left', '+=' + 20 * combo);
          break;
        case 'up':
          if ($playerPos.top - (combo * 20) < 1) $player.css('top', 0);
          else if ($playerPos.top > 1) $player.css('top', '-=' + 20 * combo);
          break;
        case 'down':
          if ($playerPos.top + (combo * 20) > maxHeight) $player.css('top', maxHeight);
          else if ($playerPos.top < maxHeight) $player.css('top', '+=' + 20 * combo);
          break;
      }
      numCombo.emptyMultiplier();
      checkTargetMatch();
    }

    function checkTargetMatch() {
      var playerPos = $('#player').offset();
      $('.game-target').each(function() {
        var targetPos = $(this).offset();
        if (targetPos.top === playerPos.top && targetPos.left === playerPos.left) {
          createGameTarget(); 
          flashBackground();
          $(this).remove();
          createGameTarget(); 
        }
      });
    }
  }; 

  function flashBackground() {
    elementTime.setEndTime();
    var elementSpeed = elementTime.getTotalDifference();
      console.log(elementSpeed);
    elementTime.resetStartTime();
    var speed;

    switch (true) {
      case (elementSpeed < 1000): 
        console.log('less than 1000')
        updateScore(1600);
        speed = 100;
        break;
      case (elementSpeed < 2000): 
        console.log('less than 2000')
        updateScore(800);
        speed = 150;
        break;
      case (elementSpeed < 3000): 
        console.log('less than 3000')
        updateScore(400);
        speed = 200;
        break;
      case (elementSpeed < 4000): 
        console.log('less than 4000')
        updateScore(200);
        speed = 250;
        break;
      default:
        console.log('more than 4000')
        updateScore(100);
        speed = 300;
    }

    $('body').toggleClass('flash-background', speed).toggleClass('flash-background', speed * 2);
  }

  function createElementTime() {
    var startTime = Date.now();
    var endTime = null;
    return {
      resetStartTime: function() {
        startTime = Date.now();
      }, 
      setEndTime: function() {
        endTime = Date.now();
      },
      getTotalDifference: function() {
        return endTime - startTime;
      },
    }
  }

  function updateScore(points) {
    $score = $('#score')
    var newTotal = Number($score.text()) + points;
    $score.text(newTotal);
  }


  function random(position) {
    if (position === 'top') return (Math.floor(Math.random() * maxHeight / 20) * 20);
    if (position === 'left') return (Math.floor(Math.random() * maxWidth / 20) * 20);  
  }

  function createGameTarget() {
    $("#player").after('<span class="game-target"></span>');

    $(".game-target").eq(0).css({
      'top': random('top'),
      'left': random('left'),
    });
  }

  function captureCombo() {
    var comboArr = [];
    return {
      filterNums: function(key) {
        if (!isNaN(Number(key))) comboArr.push(key);
      },
      getMultiplier: function() {
        return Number(comboArr.join('')) || 1;
      },
      emptyMultiplier: function() {
        comboArr = [];
      }
    }
  }

  function resetGame() {
  }

  function initiateTimer() {
  }

  newGame();
});


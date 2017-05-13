$(function() {
  var maxWidth = 1260;
  var maxHeight = 680;

  var startTime = Date.now(); 
  var numCombo = captureCombo();

  function newGame() {
    createGameTarget(); 
    createGameTarget();

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
          updateScore(100)
          $(this).animate({
            // heght: "toggle",
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            height: 100,
            width: 100,
          }, 400);
        }
      });
    }

  }; 

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

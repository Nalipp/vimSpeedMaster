$(function() {
  var maxWidth = 1260;
  var maxHeight = 680;

  function newGame() {
    createGameTarget(); 
    createGameTarget();

    $('.game-target').each(function() {
      console.log($(this).offset());
    });

    getDirection();
  }

  function getDirection() {
    $(document).on('keyup', function(e) {
      var keyCode = e.which;
      var combo = null;

      console.log(keyCode); 
      if (keyCode === 72 || keyCode === 37) movePlayer('left', combo);
      if (keyCode === 76 || keyCode === 39) movePlayer('right', combo);
      if (keyCode === 75 || keyCode === 38) movePlayer('up', combo);
      if (keyCode === 74 || keyCode === 40) movePlayer('down', combo);
    });

    function movePlayer(direction, combo) {
      var $player = $('#player');
      var $playerPos = $('#player').offset();

      switch (direction) {
        case 'left':
          if ($playerPos.left > 1) $player.css('left', '-=' + 20);
          break;
        case 'right':
          if ($playerPos.left < maxWidth) $player.css('left', '+=' + 20);
          break;
        case 'up':
          if ($playerPos.top > 1) $player.css('top', '-=' + 20);
          break;
        case 'down':
          if ($playerPos.top < maxHeight) $player.css('top', '+=' + 20);
          break;
      }
      console.log($('#player').offset());
    }
  }; 

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
});

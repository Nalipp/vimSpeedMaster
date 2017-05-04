$(function() {
  var maxWidth = 1260;
  var maxHeight = 680;

  var numCombo = captureCombo();

  function newGame() {
    createGameTarget(); 
    createGameTarget();

    $('.game-target').each(function() {
      console.log($(this).offset());
    });

    movePlayer();
  }

  function movePlayer() {
    $(document).on('keyup', function(e) {
      var keyCode = e.which;
      numCombo.filterNums(String.fromCharCode(e.which));

      var combo = numCombo.getMultiplier();

      console.log(keyCode); 
      if (keyCode === 72 || keyCode === 37) movePos('left', combo);
      if (keyCode === 76 || keyCode === 39) movePos('right', combo);
      if (keyCode === 75 || keyCode === 38) movePos('up', combo);
      if (keyCode === 74 || keyCode === 40) movePos('down', combo);
    });

    function movePos(direction, combo) {
      console.log('combo'); 
      console.log(combo);
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
      console.log($('#player').offset());
      numCombo.emptyMultiplier();
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
    var comboArr = [];
    return {
      filterNums: function(key) {
        if (!isNaN(Number(key))) {
          comboArr.push(key);
          console.log('added num key ' + key);
        } else if (key === 'Escape') {
          comboArr = [];
          console.log('emptied all num keys');
        };
        console.log(comboArr);
      },
      getMultiplier: function() {
        var num = Number(comboArr.join('')); 
        if (num !== 0) return num;
        return 1;
      },
      emptyMultiplier: function() {
        comboArr = [];
      }
    }
  }



  // function captureNum() {
  //   var multiplerArr = [];
  //   return {
  //     filterNums: function(key) {
  //       if (!isNaN(Number(key))) { 
  //         multiplerArr.push(key);
  //         console.log('added num key ' + key);
  //       } else if (key === 'Escape') {
  //         multiplerArr = [];
  //         console.log('emptied all num keys');
  //       };
  //       console.log(multiplerArr);
  //     },
  //     getMultiplier: function() {
  //       num = Number(multiplerArr.join('')); 
  //       if (num !== 0) return num;
  //       return 1;
  //     },
  //     emptyMultiplier: function() {
  //       multiplerArr = [];
  //     }
  //   }
  // }

  function updateScore() {
  }

  function createPlayerElement() {
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

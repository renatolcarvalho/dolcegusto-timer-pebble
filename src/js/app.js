/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');
var levelCoffee = 1;
var Vibe = require('ui/vibe');
var Light = require('ui/light');

var windTiming = new UI.Window({ fullscreen: true });

var imageCoffee = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  image: 'images/hotdrink.png'
});

var imageDone = new UI.Image({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  image: 'images/checkedmark.png'
});

function startTimer(time)
{
  windTiming.add(imageCoffee);
  windTiming.show();
  setTimeout(function(){ 
      Vibe.vibrate('double'); 
      Light.on('long');   
      
      windTiming.remove(imageCoffee);
      windTiming.add(imageDone);
    }, time);
}

var main = new UI.Card({
  title: 'D. Gusto Timer',  
  subtitle: 'Select Level',
  body: levelCoffee,
  subtitleColor: 'indigo', // Named colors
  bodyColor: '#9a0036', // Hex colors
  action: {
    select: 'images/time.png',
  }
});

main.show();

main.on('click', 'up', function(e) {
  
  if (levelCoffee < 7)
  {
    levelCoffee = levelCoffee + 1;
    main.body(levelCoffee);
  }
  
});

main.on('click', 'down', function(e) {
  if (levelCoffee > 1)
  {
    levelCoffee = levelCoffee - 1;
    main.body(levelCoffee);
  }  
});

main.on('click', 'select', function(e) {
  
  if (levelCoffee == 1)
  {
    startTimer(8000);
  }
  else if (levelCoffee == 2)
  {
    startTimer(10000);
  }
  else if (levelCoffee == 3)
  {
    startTimer(15000);
  }
  else if (levelCoffee == 4)
  {
    startTimer(21000);
  }
  else if (levelCoffee == 5)
  {
    startTimer(24000);
  }
  else if (levelCoffee == 6)
  {
    startTimer(28000);
  }
  else if (levelCoffee == 7)
  {
    startTimer(38000);
  }
});
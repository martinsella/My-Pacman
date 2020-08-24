//definimos la variable más importante del juego y seteamos las configuraciones primordiales para que el juego funcione.
var config = {
  type: Phaser.AUTO,
  width: 810, 
  height: 600, 
  scale: {
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
  physics: {
    default: "arcade", 
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  scene: [scene1, scene2], //escenas que abarcan al juego (menús, niveles, etc).
};

//inicializamos phaser con los ajustes definidos anteriormente.
var game = new Phaser.Game(config);

//declaramos las variables que se usarán a lo largo del juego.
var map;
var tileset;
var player;
var fantasma;
var frames;
var cursors;
var solid;
var level;
var random;
var velX;
var velX2;
var velY = 90;
var velY2 = 90;
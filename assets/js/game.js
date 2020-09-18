import scene1 from "./scene1.js";
import scene2 from "./scene2.js";

//definimos la variable más importante del juego y seteamos las configuraciones primordiales para que el juego funcione.
var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH, //centramos el juego a la mitad de la ventana del navegador.
    width: 810, //ancho de la pantalla.
    height: 600, //alto de la pantalla.
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
game = new Phaser.Game(config);

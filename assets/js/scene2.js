import Pacman from "./pacman.js";
import Ghost from "./ghost.js";
import { ghost } from "./ghost.js";

class scene2 extends Phaser.Scene {
  constructor() {
    super("game");
  }

  create() {
    //creamos el mapa tileado y le seteamos un color de fondo.
    game.config.backgroundColor.setTo(50, 50, 50);
    map = this.make.tilemap({ key: "tilemap" });
    tileset = map.addTilesetImage("tiles", "tilemap-image");

    //generamos el tilemap, dependiendo si se desea jugar el nivel 1 o 2.
    if (level == 1) {
      solid = map
        .createStaticLayer("map", tileset, 0, 0)
        .setCollisionByProperty({ solid: true });
      points = map.createDynamicLayer("points", tileset, 0, 0);
    } else {
      solid = map
        .createStaticLayer("map2", tileset, 0, 0)
        .setCollisionByProperty({ solid: true });
      points = map.createDynamicLayer("points2", tileset, 0, 0);
    }

    text = this.add.text(352, 214, "Puntaje: " + contPoints, {
      fill: "white",
      font: "20px Bahnschrift",
    });

    player = new Pacman({ scene: this, x: 405, y: 270 });

    //creamos las animaciones del personaje.
    this.anims.create({
      key: "right",
      frames: this.anims.generateFrameNames("atlas", {
        start: 0,
        end: 5,
        prefix: "1_",
        suffix: ".png",
      }),
      framerate: 10,
      repeat: 0,
    });

    this.anims.create({
      key: "left",
      frames: this.anims.generateFrameNames("atlas", {
        start: 6,
        end: 11,
        prefix: "1_",
        suffix: ".png",
      }),
      framerate: 10,
      repeat: 0,
    });

    this.anims.create({
      key: "down",
      frames: this.anims.generateFrameNames("atlas", {
        start: 12,
        end: 17,
        prefix: "1_",
        suffix: ".png",
      }),
      framerate: 10,
      repeat: 0,
    });

    this.anims.create({
      key: "up",
      frames: this.anims.generateFrameNames("atlas", {
        start: 18,
        end: 23,
        prefix: "1_",
        suffix: ".png",
      }),
      framerate: 10,
      repeat: 0,
    });

    //seteamos las animaciones del fantasma.
    this.anims.create({
      key: "right2",
      frames: this.anims.generateFrameNames("atlas", {
        start: 24,
        end: 25,
        prefix: "1_",
        suffix: ".png",
      }),
      framerate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "left2",
      frames: this.anims.generateFrameNames("atlas", {
        start: 26,
        end: 27,
        prefix: "1_",
        suffix: ".png",
      }),
      framerate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "down2",
      frames: this.anims.generateFrameNames("atlas", {
        start: 28,
        end: 29,
        prefix: "1_",
        suffix: ".png",
      }),
      framerate: 10,
      repeat: -1,
    });

    this.anims.create({
      key: "up2",
      frames: this.anims.generateFrameNames("atlas", {
        start: 30,
        end: 31,
        prefix: "1_",
        suffix: ".png",
      }),
      framerate: 10,
      repeat: -1,
    });

    fantasma = new Ghost({ scene: this, x: 405, y: 45 });
    cursors = this.input.keyboard.createCursorKeys();

    //añadimos los colliders y seteamos funciones flechas.
    this.physics.add.collider(player, solid);
    this.physics.add.overlap(player, points);
    this.physics.add.collider(fantasma, solid, ghost, null, this);
    this.physics.add.collider(
      player,
      fantasma,
      () => {
        alert("¡Has perdido!");
        contPoints = 0;
        velY = 90;
        velX = 0;
        this.scene.start("main");
      },
      null,
      this
    );

    points.setTileIndexCallback(
      6,
      (sprite, tile) => {
        points.removeTileAt(tile.x, tile.y);
        contPoints++;
        this.updateText();
        return false;
      },
      this
    );
    points.setTileIndexCallback(
      12,
      (sprite, tile) => {
        points.removeTileAt(tile.x, tile.y);
        contPoints += 5;
        this.updateText();
        return false;
      },
      this
    );
  }

  updateText() {
    console.log("xd");
    text.setText("Puntaje: " + contPoints);
    if (contPoints == 294) {
      contPoints = 0;
      velY = 90;
      velX = 0;
      alert("¡Has ganado!");
      this.scene.start("main");
    }
    return false;
  }
}
export default scene2;

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
    } else {
      solid = map
        .createStaticLayer("map2", tileset, 0, 0)
        .setCollisionByProperty({ solid: true });
    }

    //creamos al jugador.
    player = this.physics.add
      .sprite(405, 270, "atlas", "1_0.png")
      .setScale(0.85)
      .setCollideWorldBounds(true); //el jugador choca con los extremos/límites del mundo (no se puede ir de la pantalla).

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

    //creamos el fantasma.
    fantasma = this.physics.add
      .sprite(405, 30, "atlas", "1_24.png")
      .setScale(0.85)
      .setVelocityY(velY)
      .anims.play("down2", true)
      .setCollideWorldBounds(true);

    //creamos los controles.
    cursors = this.input.keyboard.createCursorKeys();

    //añadimos los colliders y seteamos funciones flechas.
    this.physics.add.collider(player, solid);
    this.physics.add.collider(fantasma, solid, () => {random = Phaser.Math.Between(0, 2);
        if (velY == 90) {
          if (random == 0) {
            velY = -90;
            fantasma.setVelocityY(velY).anims.play("up2", true);
          } else if (random == 1) {
            velY = 0;
            velX = 90;
            fantasma.setVelocityX(velX).anims.play("right2", true);
          } else if (random == 2) {
            velY = 0;
            velX = -90;
            fantasma.setVelocityX(velX).anims.play("left2", true);
          }
        } else if (velY == -90) {
          if (random == 0) {
            velY = 90;
            fantasma.setVelocityY(velY).anims.play("down2", true);
          } else if (random == 1) {
            velY = 0;
            velX = 90;
            fantasma.setVelocityX(velX).anims.play("right2", true);
          } else if (random == 2) {
            velY = 0;
            velX = -90;
            fantasma.setVelocityX(velX).anims.play("left2", true);
          }
        } else if (velX == 90) {
          if (random == 0) {
            velX = -90;
            fantasma.setVelocityX(velX).anims.play("left2", true);
          } else if (random == 1) {
            velX = 0;
            velY = 90;
            fantasma.setVelocityY(velY).anims.play("down2", true);
          } else if (random == 2) {
            velX = 0;
            velY = -90;
            fantasma.setVelocityY(velY).anims.play("up2", true);
          }
        } else if ((velX = -90)) {
          if (random == 0) {
            velX = 90;
            fantasma.setVelocityX(velX).anims.play("right2", true);
          } else if (random == 1) {
            velX = 0;
            velY = 90;
            fantasma.setVelocityY(velY).anims.play("down2", true);
          } else if (random == 2) {
            velX = 0;
            velY = -90;
            fantasma.setVelocityY(velY).anims.play("up2", true);
          }
        }
      }, null, this);
    this.physics.add.collider(player, fantasma, () => this.scene.start("game"), null, this);
  }

  update() {
    //seteamos la segunda parte de los controles y la ejecución de animaciones.
    if (cursors.left.isDown && cursors.up.isDown) {
      player.anims.play("left", true).setVelocityX(-80).setVelocityY(-80);
    } else if (cursors.left.isDown && cursors.down.isDown) {
      player.anims.play("left", true).setVelocityX(-80).setVelocityY(80);
    } else if (cursors.right.isDown && cursors.up.isDown) {
      player.anims.play("right", true).setVelocityX(80).setVelocityY(-80);
    } else if (cursors.right.isDown && cursors.down.isDown) {
      player.anims.play("right", true).setVelocityX(80).setVelocityY(80);
    } else if (cursors.left.isDown) {
      player.anims.play("left", true).setVelocityX(-90);
    } else if (cursors.right.isDown) {
      player.anims.play("right", true).setVelocityX(90);
    } else {
      player.setVelocityX(0);
    }

    if (cursors.left.isDown && cursors.up.isDown) {
      player.anims.play("left", true).setVelocityX(-80).setVelocityY(-80);
    } else if (cursors.left.isDown && cursors.down.isDown) {
      player.anims.play("left", true).setVelocityX(-80).setVelocityY(80);
    } else if (cursors.right.isDown && cursors.up.isDown) {
      player.anims.play("right", true).setVelocityX(80).setVelocityY(-80);
    } else if (cursors.right.isDown && cursors.down.isDown) {
      player.anims.play("right", true).setVelocityX(80).setVelocityY(80);
    } else if (cursors.down.isDown) {
      player.anims.play("down", true).setVelocityY(90);
    } else if (cursors.up.isDown) {
      player.anims.play("up", true).setVelocityY(-90);
    } else {
      player.setVelocityY(0);
    }
  }
}
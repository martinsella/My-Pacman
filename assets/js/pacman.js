class Pacman extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "atlas", "1_0.png");
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.scene.events.on("update", this.update, this);
    this.setScale(0.85).setCollideWorldBounds(true); //el jugador choca con los extremos/límites del mundo (no se puede ir de la pantalla).
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
export default Pacman;

class Ghost extends Phaser.Physics.Arcade.Sprite {
  constructor(config) {
    super(config.scene, config.x, config.y, "atlas", "1_24.png");
    config.scene.add.existing(this);
    config.scene.physics.add.existing(this);
    this.setScale(0.85)
      .setVelocityY(velY)
      .anims.play("down2", true)
      .setCollideWorldBounds(true);
  }
}

export function ghost() {
  random = Phaser.Math.Between(0, 2);
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
}
export default Ghost;

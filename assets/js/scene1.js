class scene1 extends Phaser.Scene {
  constructor() {
    super("main");
  }

  preload() {
    this.load.image("tilemap-image", "assets/images/tiles.png");
    this.load.tilemapTiledJSON("tilemap", "assets/json/tiles.json");
    this.load.atlas(
      "atlas",
      "assets/images/atlas.png",
      "assets/json/atlas.json"
    );
  }

  create() {
    //mensaje de bienvenida y advertencia acerca de la versión.
    alert("Bienvenidos a la primera versión del juego (v0.1). Sepan entender las limitaciones de la misma (comportamiento torpe de los fantasmas, etc), ya que no se halla terminado. ¡Gracias y que lo disfrutes!");

    //seteamos un color al background.
    game.config.backgroundColor.setTo(50, 50, 50);
    //añadimos el número de versión del juego.
    this.add.text(750, 560, "v0.1", {fill: "white",font: "25px Bahnschrift",});
    //añadimos los botones que redigirán al nivel 1 o 2.
    this.add
      .image(285, 315, "atlas", "1_32.png")
      .setInteractive()
      .on("pointerdown", () => {level = 1; this.scene.start("game");});
    this.add
      .image(515, 315, "atlas", "1_33.png")
      .setInteractive()
      .on("pointerdown", () => {level = 2; this.scene.start("game");});
  }
}
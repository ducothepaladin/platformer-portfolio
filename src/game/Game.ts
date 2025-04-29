import Renderer from "./Renderer";
import Player from "./entities/Player";
import GameObject from "./Objects";
import InputHandler from "./Input";
import Background from "./entities/Background";
import Door from "./entities/Door";
import { DoorLable } from "./entities/Label";

export default class Game {
  private renderer: Renderer;
  private objects: GameObject[];
  private input: InputHandler;

  constructor(canvas: HTMLCanvasElement, tilesize: number, dialog: HTMLDivElement) {
    this.renderer = new Renderer(canvas);
    this.input = new InputHandler();

    const door1 = new Door(
      canvas.width - tilesize * 17,
      canvas.height - tilesize * 8,
      tilesize * 2,
      tilesize * 2,
      'about'
    );
    const label1 = new DoorLable(
      door1.x,
      door1.y - tilesize,
      tilesize * 2,
      tilesize - tilesize / 3,
      "About Me"
    );

    const door2 = new Door(
      canvas.width - tilesize * 3,
      canvas.height - tilesize * 12,
      tilesize * 2,
      tilesize * 2,
      'skills'
    );
    const label2 = new DoorLable(
      door2.x,
      door2.y - tilesize,
      tilesize * 2,
      tilesize - tilesize / 3,
      "Skills"
    );

    const door3 = new Door(
      canvas.width - tilesize * 15,
      canvas.height - tilesize * 15,
      tilesize * 2,
      tilesize * 2,
      'about'
    );
    const label3 = new DoorLable(
      door3.x,
      door3.y - tilesize,
      tilesize * 2,
      tilesize - tilesize / 3,
      "Projects"
    );

    const door4 = new Door(
      canvas.width - tilesize * 3,
      canvas.height - tilesize * 27,
      tilesize * 2,
      tilesize * 2,
      'about'
    );
    const label4 = new DoorLable(
      door4.x,
      door4.y - tilesize,
      tilesize * 2,
      tilesize - tilesize / 3,
      "Certificates"
    );

    const door5 = new Door(
      canvas.width - tilesize * 17,
      canvas.height - tilesize * 27,
      tilesize * 2,
      tilesize * 2,
      'about'
    );
    const label5 = new DoorLable(
      door5.x,
      door5.y - tilesize,
      tilesize * 2,
      tilesize - tilesize / 3,
      "Contact"
    );

    const player = new Player(
      canvas.width - tilesize * 15,
      canvas.height - tilesize / 4,
      tilesize - tilesize / 8,
      tilesize * 2 - tilesize / 4,
      this.input,
      [door1, door2, door3, door4, door5],
      dialog,
      canvas.width
    );






    const background = new Background(canvas);

    this.objects = [
      background,
      door1,
      label1,
      door2,
      label2,
      door3,
      label3,
      door4,
      label4,
      door5,
      label5,
      player,
    ];
  }

  start() {
    this.renderer.render(this.objects);
  }
}

import GameObject from "../Objects";
import InputHandler from "../Input";
import Door from "./Door.ts";
import player from "../../assets/img/player-img/Idle/1.png";
import { preloadImages } from "../../helpers/game-common.ts";
import {
  idleLeftUrls,
  idleRightUrls,
  runRightUrls,
  runLeftUrls,
  jumpUrls,
  fallLeftUrls,
  fallRightUrls,
} from "../../assets/data/img-url";
import { CollisionObjectsSet, Collision } from "../Collision";
import { homePagecollision } from "../../assets/data/collisions.ts";
import { ducoDialogs } from "../../assets/data/dialog.ts";

export default class Player extends GameObject {
  private input: InputHandler;
  private display: string;
  private idleRight: HTMLImageElement[];
  private idleLeft: HTMLImageElement[];
  private runRight: HTMLImageElement[];
  private runLeft: HTMLImageElement[];
  private jump: HTMLImageElement[];
  private fallRight: HTMLImageElement[];
  private fallLeft: HTMLImageElement[];
  private speed: number;
  private collisionBlocks: Collision[];
  private isIdleRight: boolean;
  private isFallRight: boolean;
  private doorObjs: Door[];
  private dialog: HTMLDivElement;
  private isDialog: boolean;
  private canvasWidth: number;
  private isDoorOpen: boolean;
  private navUrl: string;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    input: InputHandler,
    doorObjs: Door[],
    dialog: HTMLDivElement,
    canvasWidth: number
  ) {
    const img = new Image();
    img.src = player;

    super(
      x,
      y,
      w,
      h,
      "red",
      img,
      0,
      0,
      w * 2,
      h,
      w / 2 - (w * 3) / 2,
      h / 2 - (h * 1.5) / 2,
      w * 3,
      h * 1.4
    );

    this.input = input;
    this.display = "IDLE_RIGHT";
    this.idleRight = [];
    this.idleLeft = [];
    this.runRight = [];
    this.runLeft = [];
    this.jump = [];
    this.fallRight = [];
    this.fallLeft = [];
    this.speed = w / 8;
    this.isIdleRight = true;
    this.isFallRight = true;
    this.collisionBlocks = new CollisionObjectsSet(
      homePagecollision
    ).createCollisionObjects();
    this.doorObjs = doorObjs;
    this.dialog = dialog;
    this.isDialog = true;
    this.isDoorOpen = false;
    this.canvasWidth = canvasWidth;
    this.navUrl = "";
  }

  update(): void {
    this.frameAnimation();
    this.applyMovement();
    this.checkLeftAndRightCollisions();
    this.applyGravity();
    this.checkVerticalCollisions();
    this.inputHandle();
    this.updateJumpAndFallingAnimation();
    this.updateDialog();
    this.dialogCheck();
    this.doorCheck();
    window.scrollTo(this.x, this.y - window.innerHeight / 3);
  }

  updateDialog(): void {
    this.dialog.style.opacity = this.isDialog ? "1" : "0";
    if (typeof this.x === "number" && typeof this.width === "number" && typeof this.canvasWidth === "number") {
      this.dialog.style.left = `${
        this.x + this.width * 8 > this.canvasWidth
          ? this.x - this.width * 8
          : this.x - this.width
      }px`;
    } else {
      console.error("Invalid values for x, width, or canvasWidth");
    }
    this.dialog.style.top = `${this.y - this.height * 1.5}px`;
  }

  dialogCheck(): void {
    if (
      this.input.isPressed("w") || this.input.isPressed("ArrowUp") ||
      this.input.isPressed("a") || this.input.isPressed("ArrowLeft") ||
      this.input.isPressed("d") || this.input.isPressed("ArrowRight")
    )
      this.isDialog = false;
  }

  inputHandle(): void {
    if (
      (this.input.isPressed("w") || this.input.isPressed("ArrowUp")) &&
      this.isGround
    ) {
      this.velocity.y = -Math.min(this.width / 2, 15);
      this.isGround = false;
    } else if (this.input.isPressed("a") || this.input.isPressed("ArrowLeft")) {
      if (this.isGround) this.display = "RUN_LEFT";
      this.isIdleRight = false;
      this.isFallRight = false;
      this.velocity.x = -this.speed;
    } else if (
      this.input.isPressed("d") ||
      this.input.isPressed("ArrowRight")
    ) {
      if (this.isGround) this.display = "RUN_RIGHT";
      this.isIdleRight = true;
      this.isFallRight = true;
      this.velocity.x = this.speed;
    } else if (this.input.isPressed("e")) {
      if(this.isDoorOpen) {
        const navigateEvent = new CustomEvent("navigate", {detail: {route: `/${this.navUrl}`}});
        window.dispatchEvent(navigateEvent);
      }
    } else {
      if (this.isGround)
        this.isIdleRight
          ? (this.display = "IDLE_RIGHT")
          : (this.display = "IDLE_LEFT");
      this.velocity.x = 0;
    }
  }

  updateJumpAndFallingAnimation() {
    if (!this.isGround) {
      if (this.velocity.y < 0) {
        this.display = "JUMP";
      } else {
        this.display = this.isFallRight ? "FALL_RIGHT" : "FALL_LEFT";
      }
    }
  }

  applyMovement(): void {
    this.x += this.velocity.x;
  }

  checkLeftAndRightCollisions(): void {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const block = this.collisionBlocks[i];

      if (
        this.x <= block.x + block.width &&
        this.x + this.width >= block.x &&
        this.y <= block.y + block.height &&
        this.y + this.height >= block.y
      ) {
        if (this.velocity.x < -1) {
          this.x = block.x + block.width + 0.05;
        } else if (this.velocity.x > 1) {
          this.x = block.x - this.width - 0.05;
        }
        return;
      }
    }
  }

  checkVerticalCollisions(): void {
    for (let i = 0; i < this.collisionBlocks.length; i++) {
      const block = this.collisionBlocks[i];

      if (
        this.x <= block.x + block.width &&
        this.x + this.width >= block.x &&
        this.y <= block.y + block.height &&
        this.y + this.height >= block.y
      ) {
        if (this.velocity.y < 0) {
          this.velocity.y = 0;
          this.y = block.y + block.height + 0.05;
        } else if (this.velocity.y > 0) {
          this.velocity.y = 0;
          this.y = block.y - this.height - 0.05;
          this.isGround = true;
        }
        return;
      }
      this.isGround = false;
    }
  }

  async frameLoader(): Promise<void> {
    if (
      this.idleRight.length === 0 ||
      this.idleLeft.length === 0 ||
      this.runRight.length === 0 ||
      this.runLeft.length === 0 ||
      this.jump.length === 0 ||
      this.fallLeft.length === 0 ||
      this.fallRight.length === 0
    ) {
      try {
        this.idleRight = await preloadImages(idleRightUrls);
        this.idleLeft = await preloadImages(idleLeftUrls);
        this.runRight = await preloadImages(runRightUrls);
        this.runLeft = await preloadImages(runLeftUrls);
        this.jump = await preloadImages(jumpUrls);
        this.fallLeft = await preloadImages(fallLeftUrls);
        this.fallRight = await preloadImages(fallRightUrls);
      } catch (er) {
        console.log(er);
        return;
      }
    }

    if (
      !this.idleRight.every((img) => img.complete) ||
      !this.idleLeft.every((img) => img.complete) ||
      !this.runRight.every((img) => img.complete) ||
      !this.runLeft.every((img) => img.complete) ||
      !this.jump.every((img) => img.complete) ||
      !this.fallLeft.every((img) => img.complete) ||
      !this.fallRight.every((img) => img.complete)
    )
      return;
  }

  async frameAnimation(): Promise<void> {
    await this.frameLoader();

    let animation: HTMLImageElement[] = [];

    if (this.display === "IDLE_RIGHT") {
      this.bFrame = 10;
      animation = this.idleRight;
    } else if (this.display === "IDLE_LEFT") {
      this.bFrame = 10;
      animation = this.idleLeft;
    } else if (this.display === "RUN_RIGHT") {
      this.bFrame = 6;
      animation = this.runRight;
    } else if (this.display === "RUN_LEFT") {
      this.bFrame = 6;
      animation = this.runLeft;
    } else if (this.display === "JUMP") {
      this.bFrame = 4;
      animation = this.jump;
    } else if (this.display === "FALL_RIGHT") {
      this.bFrame = 4;
      animation = this.fallRight;
    } else if (this.display === "FALL_LEFT") {
      this.bFrame = 4;
      animation = this.fallLeft;
    }

    super.updateFrame(animation.length);
    if (this.frame <= animation.length) {
      if (animation[this.frame]) {
        this.img = animation[this.frame];
      } else {
        return;
      }
    }
  }

  doorCheck(): void {
    this.doorObjs.forEach((door, i) => {
      if (
        door.x + this.width * 3 >= this.x &&
        door.x - this.width * 3 <= this.x &&
        door.y + this.height * 1.2 >= this.y &&
        door.y - this.height * 1.2 <= this.y
      ) {
        door.open();
        this.navUrl = door.url;
        this.isDialog = true;
        this.isDoorOpen = true;
        this.dialog.innerHTML = ducoDialogs[i];
      } else {
        door.close();
      }
    });
    this.doorObjs.every((door) => !door.isOpen) && (this.isDoorOpen = false);
  }
}

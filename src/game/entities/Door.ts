import GameObject from "../Objects";
import door from "@/assets/img/door-img/door-opening/0.png";
import { doorUrls } from "../../assets/data/img-url";
import { preloadImages } from "../../helpers/game-common";

export default class Door extends GameObject {
  private doors: HTMLImageElement[];
  public isOpen: boolean;
  public url: string;

  constructor(x: number, y: number, w: number, h: number, url: string) {
    const img = new Image();
    img.src = door;

    super(
      x,
      y,
      w,
      h,
      "blue",
      img,
      0,
      0,
      w,
      h,
      w / 2 - w / 2,
      h / 2 - h / 2,
      w,
      h
    );

    this.doors = [];
    this.isOpen = false;
    this.bFrame = 6;
    this.url = url;
  }

  update(): void {
    this.frameAnimation();
  }

  updateFrame(): void {
    this.eFrame++;
    if (this.eFrame % this.bFrame === 0) {
      if (this.isOpen) {
        if (this.frame <= this.doors.length) {
          this.frame++;
        }
      } else if(!this.isOpen) {
        if (this.frame >= 1) {
          this.frame--;
        }
      }
    }
  }

  open(): void {
    if(!this.isOpen) {
        this.isOpen = true;
    }
  }

  close(): void {
    if(this.isOpen) {
        this.isOpen = false;
    }
  }

  async frameAnimation(): Promise<void> {
    await this.frameLoader();
    this.updateFrame();
    if(this.frame < this.doors.length) {
        this.img = this.doors[this.frame];
    }
  }

  async frameLoader(): Promise<void> {
    if (this.doors.length === 0) {
      try {
        this.doors = await preloadImages(doorUrls);
      } catch (ers) {
        console.log(ers);
        return;
      }
    }

    if (!this.doors.every((img) => img.complete)) return;
  }
}

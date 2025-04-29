export default class GameObject {
  x: number;
  y: number;
  width: number;
  height: number;
  color: string;
  gravity: number;
  velocity: { x: number; y: number };
  isGround: boolean;
  img: HTMLImageElement;
  sx: number;
  sy: number;
  sw: number | null;
  sh: number | null;
  dx: number;
  dy: number;
  dw: number | null;
  dh: number | null;
  frame: number;
  eFrame: number;
  bFrame: number;

  constructor(
    x: number,
    y: number,
    width: number,
    height: number,
    color: string,
    img: HTMLImageElement,
    sx: number = 0,
    sy: number = 0,
    sw: number | null = null,
    sh: number | null = null,
    dx: number = 0,
    dy: number = 0,
    dw: number | null = null,
    dh: number | null = null
  ) {
    this.x = x;
    this.y = y;
    this.img = img;
    this.width = width;
    this.height = height;
    this.color = color;
    this.gravity = 0.8;
    this.velocity = { x: 0, y: 0 };
    this.isGround = false;
    this.sx = sx;
    this.sy = sy;
    this.sw = sw;
    this.sh = sh;
    this.dx = dx;
    this.dy = dy;
    this.dw = dw;
    this.dh = dh;
    this.frame = 0;
    this.eFrame = 0;
    this.bFrame = 10;
  }

  update(): void {

  }

  applyGravity(): void {
    this.velocity.y += this.gravity;
    this.y += this.velocity.y;
  }

  checkGroundCollision(floor: number): void {
    if (this.y + this.height >= floor) {
      this.y = floor - this.height;
      if(this.isGround) {
        this.velocity.y = 0;
      }
      this.isGround = true;
    } else {
      this.isGround = false;
    }
  }

  updateFrame(frameL: number): void {
    this.eFrame++;

    if (this.eFrame % this.bFrame === 0) {
      this.frame++;
      if (this.frame > frameL) {
        this.frame = 1;
        this.eFrame = 0;
      }
    }
  }


  draw(ctx: CanvasRenderingContext2D): void {

    // ctx.fillStyle = this.color;
    // ctx.fillRect(this.x, this.y, this.width, this.height);

    ctx.drawImage(
      this.img,
      0,
      0,
      this.img.width,
      this.img.height,
      this.x + this.dx,
      this.y + this.dy,
      this.dw ?? ctx.canvas.width,
      this.dh ?? ctx.canvas.height
    );
  }
}

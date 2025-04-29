import { calculateCanvasSize } from "../helpers/game-common.ts";

export class Collision {
  x: number;
  y: number;
  width: number;
  height: number;

  constructor(x: number, y: number, width: number, height: number) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}

export class CollisionObjectsSet {
  tile: number;
  detectArr: number[];

  constructor(detectArr: number[]) {
    this.tile = calculateCanvasSize().newTileSize;
    this.detectArr = detectArr;
  }

  parse2D(): number[][] {
    const col = Math.floor(calculateCanvasSize().width / this.tile);
    const rows = [];
    for (let i = 0; i < this.detectArr.length; i += col) {
      rows.push(this.detectArr.slice(i, i + col));
    }
    return rows;
  }

  createCollisionObjects():Collision[] {
    const objects: Collision[] = [];
    this.parse2D().forEach((row, y1) => {
      row.forEach((block, x1) => {
        if (block == 7) {
          objects.push(new Collision(x1 * this.tile,y1 * this.tile, this.tile, this.tile ));
        } else if (block == 4) {
          objects.push(new Collision(x1 * this.tile,y1 * this.tile, this.tile, this.tile/5 ));
        }
      });
    });

    return objects;
  }
}

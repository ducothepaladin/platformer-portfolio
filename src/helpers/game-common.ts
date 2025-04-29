

import { ASPECT_RATIO, TILE_COLS, TILE_ROWS } from "../constants/game-constants";


export const calculateCanvasSize = () => {

    const windowW = window.innerWidth;
    const windowH = window.innerHeight * 2;

    let width = windowW;
    let height = width / ASPECT_RATIO;

    if(height > windowH) {
        height = windowH;
        width = height * ASPECT_RATIO;
    }

    let newTileSize = Math.floor(width / TILE_COLS);
    newTileSize = Math.min(newTileSize, Math.floor(height / TILE_ROWS))

    width = newTileSize * TILE_COLS;
    height = newTileSize * TILE_ROWS;

    return { width, height, newTileSize };
}


export const preloadImages = (imagePaths: string[]): Promise<HTMLImageElement[]> => {
  return Promise.all(
    imagePaths.map((path) => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.src = path;
        img.onload = () => resolve(img);
        img.onerror = reject;
      });
    })
  );
};





  export const createObjects = (arr: any[], mainPageCollisionBlock: []): any[] => {
    const objects: any[] = [];
    arr.forEach((row, y1) => {
      row.forEach((block: any, x1: any) => {
        if (block == 7) {
          objects.push({
            ...mainPageCollisionBlock,
            position: { x: x1 * 64, y: y1 * 64 },
          });
        } else if (block == 4) {
          objects.push({
            ...mainPageCollisionBlock,
            position: { x: x1 * 64, y: y1 * 64 },
            height: 16,
          });
        }
      });
    });
  
    return objects;
  };
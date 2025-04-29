import GameObject from "../Objects";
import background from "../../assets/img/background.jpg"



export default class Background extends GameObject {
    

    constructor(canvas: HTMLCanvasElement) {
        const img = new Image();
        img.src = background;
        super(0, 0, canvas.width, canvas.height, "black", img);
    }


    update(): void {
        
    }



}
import GameObject from "../Objects";
import ribbon from "@/assets/img/objects/Ribbon_Yellow_3Slides.png"

export class DoorLable extends GameObject {

        label: string;

    constructor(x: number, y: number, w: number, h: number, label: string) {

        const img = new Image();
        img.src = ribbon;
        
        super(x, y, w, h, "blue", img)
        this.label = label;

    }

    update() {
        
    }


    draw(ctx: CanvasRenderingContext2D) {


        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);

        ctx.font = `${this.width/8}px serif`
        ctx.textAlign = "center";
        ctx.fillText(this.label, this.x + this.width/2, this.y + this.height/ 2);

    }
}
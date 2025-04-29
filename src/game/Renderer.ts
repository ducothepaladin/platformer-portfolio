import GameObject from "./Objects";

export default class Renderer {

    private ctx: CanvasRenderingContext2D;

    constructor(canvas: HTMLCanvasElement) {
        const ctx = canvas.getContext("2d");
        if(!ctx) throw new Error("Canvas doesn't support");

        this.ctx = ctx;
    }

    render(objects: GameObject[]) {

        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.ctx.imageSmoothingEnabled = false;

        objects.forEach((obj) => {
            obj.update();
            obj.draw(this.ctx);
        });


        requestAnimationFrame(() => this.render(objects));

    }
    
}
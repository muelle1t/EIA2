namespace Aufgabe11 {


    export class MovingObjects {
        x: number;
        y: number;
       

        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
           
        }
        move(): void {
            //Abstract
        }
        draw(): void {
            //Abstract
        }
    }
}
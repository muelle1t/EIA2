namespace Abschlussaufgabe {


    export class Food {
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
        
        redraw(): void {
            bugs.clearRect(0, 0, 1000, 500);
            bugs.beginPath();
            bugs.closePath();
}
    }
}
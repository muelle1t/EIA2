namespace Aufgabe11 {
    export class Food extends MovingObjects {
        

        constructor(_x: number, _y: number) {
            super(_x, _y);

        }

        move(): void {
            if (this.y == 690) {
                this.y += 0;
            } else {
                this.y += 1;    
            }
}

        draw(): void {
            crc2.beginPath();
            crc2.fillRect(this.x - 5, this.y + 5, 5, 5);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#f48e41";
            crc2.fill();
        }

    }
}
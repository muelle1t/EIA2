namespace Aufgabe11 {
    export class Food extends MovingObjects {
        r: number;

        constructor(_x: number, _y: number) {
            super(_x, _y);

        }

        move(): void {
            this.y += 10;

            if (this.y > 1320) {
                this.y = 1320;
            }

        }

        draw(): void {
            crc2.beginPath();
            crc2.fillRect(this.x - 5, this.y + 10, 100, 100);
            crc2.closePath();
            crc2.stroke();
            crc2.fillStyle = "#eef442";
            crc2.fill();
        }

    }
}
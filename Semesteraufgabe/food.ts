namespace Aquarium {

    export class Food {

        x: number;
        y: number;
        positionY: number;
        positionX: number;





        constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;


        }

        //Kreisposition herausfinden

        takeObjectPosition(): void {
            this.positionX = this.x;
            this.positionY = this.y;
        }

        //Ani        
        update(): void {

            this.drawFood();
            this.move();
            this.takeObjectPosition();
        }

        drawFood(): void {
            crc2.beginPath();
            crc2.fillStyle = "#BCF5A9";
            crc2.arc(this.x + 7, this.y, 20, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        //zufaellige Bewegungsrichtung

        move(): void {

            this.y += Math.random() * 10;

            for (let i: number = 0; i < 100; i++) {

                if (this.x < 0) {
                    this.x = crc2.canvas.width;
                }
                if (this.y < 0) {
                    this.y = crc2.canvas.height;
                }
                if (this.y >= crc2.canvas.height) {
                    this.y = 0;
                }
            }
        }

        //zufaellige Startpo        
        setRandomPosition(): void {

            this.x = Math.floor((Math.random() * crc2.canvas.width) - 50);
            this.y = Math.floor((Math.random() * crc2.canvas.height) - 50);

        }

    }

}
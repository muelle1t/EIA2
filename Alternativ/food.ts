namespace AltAquarium {

    export class Food {

        x: number;
        y: number;
        

        constructor(_x: number, _y: number) {

            this.x = _x;
            this.y = _y;
            this.drawFood();
            this.setRandomPosition();
            this.move();
            
        }

        
       

        //Ani        
        update(): void {

            this.drawFood();
            this.move();
            }

        drawFood(): void {
            trash.beginPath();
            trash.fillStyle = "#BCF5A9";
            trash.arc(this.x + 7, this.y, 20, 0, 2 * Math.PI);
            trash.closePath();
            trash.fill();
            trash.stroke();
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
namespace Aquarium {

    export class BigFish extends Fish {

        x: number;
        y: number;
        direction: number;
    
        constructor(_x: number, _y: number) {
            super(_x, _y);
            this.drawBigFish();
            this.move();
            }

                        
        move(): void {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;

        }

        drawBigFish(): void {
            //Flosse hinten
            crc2.beginPath();
            crc2.strokeStyle = "#FF8000";
            crc2.fillStyle = "#FF8000";
            crc2.moveTo(this.x, this.y);
            crc2.lineTo(this.x - 30, this.y - 30);
            crc2.lineTo(this.x - 30, this.y + 30);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();


            //Körper
            crc2.beginPath();
            crc2.fillStyle = "#FF8000";
            crc2.arc(this.x + 7, this.y, 25, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            //Auge
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.arc(this.x + 20, this.y - 7, 2, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();

            //Augenbraue
            crc2.beginPath();
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.moveTo(this.x + 13, this.y - 15);
            crc2.lineTo(this.x + 25, this.y - 12);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();

            //Mund
            crc2.beginPath();
            crc2.fillStyle = "rgba(255, 255, 255, 0.5)";
            crc2.strokeStyle = "#000000";
            crc2.moveTo(this.x + 30, this.y + 12);
            crc2.lineTo(this.x + 15, this.y + 5);
            crc2.lineTo(this.x + 20, this.y + 24);
            crc2.arcTo(this.x + 20, this.y + 24, this.x + 30, this.y + 12, 25);
            crc2.closePath();
            crc2.stroke();
            crc2.fill();


        }
    }

}
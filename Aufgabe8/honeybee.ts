namespace Aufgabe8_Bienen {
    export class HoneyBee extends Bees {
        xTarget: number;
        yTarget: number;
        speed: number;

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
            this.speed = 0.03;
            this.setStartPosition();
            this.setRandomTargetPosition();

        }




        setRandomTargetPosition(): void {
            let randomTargetFlower: number = Math.round(Math.random() * (nectarFlowers.length - 1));
            this.xTarget = nectarFlowers[randomTargetFlower].x;
            this.yTarget = nectarFlowers[randomTargetFlower].y;
        }

        setStartPosition(): void {
            this.x = 250;
            this.y = 620;
        }


        move(): void {
            let xDiff: number = this.xTarget - this.x;
            let yDiff: number = this.yTarget - this.y - 22;
            if (Math.abs(xDiff) < 0.5 && Math.abs(yDiff) < 0.5)
                this.setRandomTargetPosition();
            else {
                this.x += xDiff * this.speed;
                this.y += yDiff * this.speed;
            }
        }

        drawBee(): void {

            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            //crc2.ellipse(this.x, this.y, 10, 5, 0, Math.PI * 2, 0);
            crc2.arc(this.x - 5, this.y, 5, 0, Math.PI * 2);
            crc2.fillStyle = this.color;
            crc2.closePath();
            crc2.fill();

            //Auge
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            crc2.arc(this.x - 6, this.y - 1, 2, 0, Math.PI * 2);
            crc2.fillStyle = "#000000";
            crc2.closePath();
            crc2.fill();

            //Fühler
            crc2.beginPath();
            crc2.moveTo(this.x - 1, this.y - 1);
            crc2.lineTo(this.x - 7, this.y - 10);
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.arc(this.x - 7, this.y - 10, 1, 0, Math.PI * 2);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            //Streifen
            crc2.beginPath();
            crc2.moveTo(this.x - 1, this.y + 5);
            crc2.lineWidth = 3;
            crc2.lineTo(this.x, this.y - 7);
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            crc2.beginPath();
            crc2.moveTo(this.x + 6, this.y + 5);
            crc2.lineWidth = 3;
            crc2.lineTo(this.x + 6, this.y - 5);
            crc2.fillStyle = "#000000";
            crc2.strokeStyle = "#000000";
            crc2.closePath();
            crc2.fill();
            crc2.stroke();

            //Flügel
            crc2.beginPath();
            crc2.moveTo(this.x, this.y);
            //crc2.ellipse(this.x + 4, this.y - 8, 3, 5, 45 * Math.PI/180, Math.PI * 2, 0);
            //crc2.ellipse(this.x + 2, this.y - 8, 3, 5, 45 * Math.PI/-180, Math.PI * 2, 0);
            crc2.fillStyle = "#CEF6F5";
            crc2.closePath();
            crc2.fill();
        }

    }


}
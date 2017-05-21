namespace Aufgabe8_Bienen {
    export class RegularBee extends Bees {
        x: number;
        y: number;
        color: string;
        direction: number;

        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color);
            this.setStartPosition();
            this.setRandomDirection();
           

        }
        
        setStartPosition(): void {
            this.x = 250;
            this.y = 620;
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

        move(): void {
            this.x += Math.random() * 3 - 2 + this.direction;
            this.y += Math.random() * 4 - 2;

        }
        
        setRandomDirection(): void {
            this.direction = (Math.random() * 2);
            }
    }

}
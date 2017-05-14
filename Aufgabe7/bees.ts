namespace Aufgabe7_Bienen {
    export class Bee {
        x: number;
        y: number;
        color: string;
        direction: number;
        
        constructor(_x: number, _y: number, _color: string, _direction: number) {
            this.x = _x;
            this.y = _y;
            this.color = _color;
            this.direction = _direction;
            this.setRandomDirection();
            this.setRandomStyle();
            }
        
        update(): void {
            this.drawBee();
            this.move();
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
           
                        
            //Bienen kommen am Canvas Rand auf der anderen Seite wieder rein
            if (this.x < 0) {
                this.x = 1000;
                }
            if (this.y < 0) {
                this.y = 700;
                }
            if (this.y > 700) {
                this.y = 0;
                }
            }
        
        setRandomDirection(): void {
            this.direction = (Math.random() * 1.5);
            }
        
        setRandomStyle(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 70%, 50%)";
            }
        
        }
    

}
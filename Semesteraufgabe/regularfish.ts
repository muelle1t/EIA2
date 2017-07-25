namespace Aquarium {
    export class RegularFish {
        x: number;
        y: number;
        radius: number = 10;
        winkel: number = 0;
        p: number;
        width: number;
        height: number;
        color: string;
        direction: number;
        
        
        constructor(_x: number, _y: number, _color: string) {
            this.x = _x;
            this.y = _y;
            this.width = 50;
            this.height = 52;
            this.setRandomStyle();
            this.color = _color;
            this.setRandomDirection();
            
            }
        
        update(): void {
            this.drawRegularFish();
            
            this.move();
            }
        

      drawRegularFish(): void {
        //Flosse hinten
        crc2.beginPath();
        crc2.strokeStyle = this.color;
        crc2.fillStyle = this.color;
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x - 20, this.y - 15);
        crc2.lineTo(this.x - 20, this.y + 15);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        
        //Körper
        crc2.beginPath();
        crc2.fillStyle = this.color;
        //crc2.arc(_x + 7, _y, 20, 0, 2 * Math.PI);
        //crc2.ellipse(this.x + 5, this.y, 20, 15, 0, Math.PI * 2, 0);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        //Auge
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.arc(this.x + 15, this.y - 5, 2, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();

        //Mund
        crc2.beginPath();
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.moveTo(this.x + 15, this.y + 5);
        crc2.lineTo(this.x + 25, this.y + 6);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

    }
move(): void {
            this.x += Math.random() * 4 - 2;
            this.y += Math.random() * 4 - 2;
    
           
             }
        
setRandomStyle(): void {
            this.color = "hsl(" + Math.random() * 360 + ", 70%, 50%)";
            }
        
setRandomDirection(): void {
            this.direction = Math.round((Math.random() * 50) + 1000);
            }
    

        
        // Teil der Boundingbox, hier wird die "Box" definiert, in die geklickt werden kann
        hit(x: number, y: number): boolean {
            //verschieben von der hitbox ins zentrum
            let middleXAx: number = this.x - this.width / 2;
            let middleYAx: number = this.y - this.height / 2;
            let hit: boolean = false;
            if (x <= middleXAx + this.width && x >= middleXAx &&
                y <= middleYAx + this.height && y >= middleYAx) {
                hit = true;
            }
            return hit;
        }

    }
}
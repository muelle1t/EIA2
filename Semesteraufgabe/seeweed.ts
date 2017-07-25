namespace Aquarium {
    export class Seeweed {
        x: number;
        y: number;


        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
        
        
        setRandomPosition(): void {
                this.x = (Math.random() * (350 - 0)) + 0;
                this.y = (Math.random() * (700 - 650)) + 650;

                }

        drawRandomSeeweed(): void {
            let seeweed: number = Math.floor((Math.random() * 4) + 0);
            switch (seeweed) {
                case 0:
                    this.drawSeeweed();
                    break;
                case 1:
                    this.drawSeeweed2();
                    break;
            }

            
        }

        drawSeeweed(): void {
            crc2.beginPath();
            crc2.fillStyle = "#088A08";
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x, this.y - 20, this.x - 50, this.y - 220, this.x - 15, this.y - 50);
            crc2.closePath();
            crc2.fill();

            crc2.beginPath();
            crc2.fillStyle = "#088A08";
            crc2.moveTo(this.x, this.y);
            crc2.bezierCurveTo(this.x - 10, this.y - 20, this.x - 10, this.y - 200, this.x, this.y - 50);
            crc2.closePath();
            crc2.fill();
        }

        drawSeeweed2(): void {
            crc2.beginPath();
            crc2.fillStyle = "#4dff88";
            crc2.moveTo(this.x, this.y);
            crc2.fillRect(this.x, this.y - 60, 4, 60);
            //crc2.ellipse(this.x - 2, this.y - 10, 5, 3, 0, Math.PI * 2, 0);
            //crc2.ellipse(this.x + 4, this.y - 20, 5, 3, 0, Math.PI * 2, 0);
            //crc2.ellipse(this.x - 2, this.y - 30, 5, 3, 0, Math.PI * 2, 0);
            //crc2.ellipse(this.x + 4, this.y - 40, 5, 3, 0, Math.PI * 2, 0);
            //crc2.ellipse(this.x - 2, this.y - 50, 5, 3, 0, Math.PI * 2, 0);
            crc2.closePath();
            crc2.fill();
            

        }
    }
    }
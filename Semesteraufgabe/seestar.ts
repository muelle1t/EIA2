namespace Semesteraufgabe {
    export class Seestar {
        x: number;
        y: number;
        spikes: number; 
        outerRadius: number; 
        innerRadius: number;


        constructor(_x: number, _y: number, spikes: number, outerRadius: number, innerRadius: number) {
            this.x = _x;
            this.y = _y;
            spikes: number; 
            outerRadius: number; 
            innerRadius: number;
            
        }
        
        
        setRandomPosition(): void {
                this.x = (Math.random() * (950 - 350)) + 350;
                this.y = (Math.random() * (700 - 650)) + 650;

                }

        drawRandomSeestar(): void {
            let seeweed: number = Math.floor((Math.random() * 4) + 0);
            switch (seeweed) {
                case 0:
                    this.drawSeestar();
                    break;
                case 1:
                    this.drawSeestarOrange();
                    break;
                case 2:
                    this.drawSeestarRed();
                    break;
            }

            
        }

       drawSeestar(): void {
        crc2.beginPath();
        crc2.fillStyle = "#FFFF00";
        crc2.strokeStyle = "#ffff00";
        crc2.moveTo(this.x, this.y);
        crc2.lineTo(this.x + 10, this.y - 15);
        crc2.lineTo(this.x + 15, this.y);
        crc2.lineTo(this.x + 30, this.y + 5);
        crc2.lineTo(this.x + 15, this.y + 15);
        crc2.lineTo(this.x + 7, this.y + 30);
        crc2.lineTo(this.x, this.y + 12);
        crc2.lineTo(this.x - 13, this.y + 5);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
      
    }
        
    drawSeestarOrange(): void {
            
        var rot: number = Math.PI / 2 * 3;
        var x: number = this.x;
        var y: number = this.y;
        var step: number = Math.PI / spikes;

        crc2.beginPath();
        crc2.moveTo(_x, _y - outerRadius);
        for (var i: number = 0; i < spikes; i++) {
            x = _x + Math.cos(rot) * outerRadius;
            y = _y + Math.sin(rot) * outerRadius;
            crc2.lineTo(x, y);
            rot += step;

            x = _x + Math.cos(rot) * innerRadius;
            y = _y + Math.sin(rot) * innerRadius;
            crc2.lineTo(x, y);
            rot += step;
        }
        
        crc2.closePath();
        crc2.fillStyle = "#ff6600";
        crc2.fill();
    }
      
    }   
//    drawSeestarRed(): void {
//        crc2.beginPath();
//        crc2.fillStyle = "#e60000";
//        crc2.strokeStyle = "#e60000";
//        crc2.moveTo(this.x, this.y);
//        crc2.lineTo(this.x + 10, this.y - 15);
//        crc2.lineTo(this.x + 15, this.y);
//        crc2.lineTo(this.x + 30, this.y + 5);
//        crc2.lineTo(this.x + 15, this.y + 15);
//        crc2.lineTo(this.x + 7, this.y + 30);
//        crc2.lineTo(this.x, this.y + 12);
//        crc2.lineTo(this.x - 13, this.y + 5);
//        crc2.closePath();
//        crc2.fill();
//        crc2.stroke();
//      
//    }     
    }
    }
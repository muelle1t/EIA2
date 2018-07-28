namespace Abschlussaufgabe {

    export class Heart {
        
        x: number;
        y: number;
        w: number = 30; 
        h: number = 30;
        d = Math.min(this.w, this.h);
        k: number = 10;
        
        constructor(_x: number, _y: number) {
                
                this.x = _x;
                this.y = _y;
            }

        

        draw(): void {
            
            crc2.strokeStyle = "#000000";
            //crc2.strokeWeight = 3;
            crc2.shadowOffsetX = 4.0;
            crc2.shadowOffsetY = 4.0;
            crc2.lineWidth = 10.0;
            crc2.fillStyle = "#FF0000";
            
            crc2.moveTo(this.k, this.k + this.d / 4);
            crc2.quadraticCurveTo(this.k, this.k, this.k + this.d / 4, this.k);
            crc2.quadraticCurveTo(this.k + this.d / 2, this.k, this.k + this.d / 2, this.k + this.d / 4);
            crc2.quadraticCurveTo(this.k + this.d / 2, this.k, this.k + this.d * 3 / 4, this.k);
            crc2.quadraticCurveTo(this.k + this.d, this.k, this.k + this.d, this.k + this.d / 4);
            crc2.quadraticCurveTo(this.k + this.d, this.k + this.d / 2, this.k + this.d * 3 / 4, this.k + this.d * 3 / 4);
            crc2.lineTo(this.k + this.d / 2, this.k + this.d);
            crc2.lineTo(this.k + this.d / 4, this.k + this.d * 3 / 4);
            crc2.quadraticCurveTo(this.k, this.k + this.d / 2, this.k, this.k + this.d / 4);
            crc2.stroke();
            crc2.fill();
        }
  }  

}
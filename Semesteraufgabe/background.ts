namespace Aquarium {
    export class Background {
        constructor() {


            myGradient.addColorStop(0, "#ccccff");
            myGradient.addColorStop(1, "#000066");



            crc2.fillStyle = myGradient; //wasser im Hintergrund
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);


            crc2.fillStyle = "#F2F5A9"; //Sand
            crc2.fillRect(0, 630, crc2.canvas.width, crc2.canvas.height / 10);



            this.drawRock(700, 650);

            this.drawSandcastle(400, 650);

            this.drawSeestar(450, 660, 5, 30, 10);

            this.drawSeestar(550, 670, 5, 30, 10);

            this.drawSeestar(750, 650, 5, 30, 10);

            //Schleife für SeeBegrünung
            for (var i: number = 0; i < 40; i++) {
                let sw: Seeweed = new Seeweed();
                sw.setRandomPosition();
                sw.drawRandomSeeweed();
            }

        }


        drawRock(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.strokeStyle = "#8c8c8c";
            crc2.fillStyle = "#8c8c8c";
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x + 5, _y - 20);
            crc2.lineTo(_x + 10, _y - 20);
            crc2.lineTo(_x + 10, _y - 25);
            crc2.lineTo(_x + 15, _y - 25);
            crc2.lineTo(_x + 15, _y - 30);
            crc2.lineTo(_x + 25, _y - 35);
            crc2.lineTo(_x + 25, _y - 40);
            crc2.lineTo(_x + 30, _y - 40);
            crc2.lineTo(_x + 30, _y - 45);
            crc2.lineTo(_x + 40, _y - 55);
            crc2.lineTo(_x + 40, _y - 60);
            crc2.lineTo(_x + 50, _y - 80);
            crc2.lineTo(_x + 50, _y - 90);
            crc2.lineTo(_x + 60, _y - 100);
            crc2.lineTo(_x + 70, _y - 100);
            crc2.lineTo(_x + 90, _y - 120);
            crc2.lineTo(_x + 100, _y - 120);
            crc2.lineTo(_x + 120, _y - 135);
            crc2.lineTo(_x + 140, _y - 130);
            crc2.lineTo(_x + 160, _y - 135);
            crc2.lineTo(_x + 200, _y - 135);
            crc2.lineTo(_x + 240, _y - 130);
            crc2.lineTo(_x + 280, _y - 135);
            crc2.lineTo(_x + 300, _y - 130);
            crc2.lineTo(_x + 300, _y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        drawSandcastle(_x: number, _y: number): void {
            crc2.beginPath();
            crc2.fillStyle = "#F2F5A9";
            crc2.strokeStyle = "#F2F5A9";
            crc2.moveTo(_x, _y);
            crc2.lineTo(_x, _y - 70);
            crc2.lineTo(_x + 3, _y - 70);
            crc2.lineTo(_x + 3, _y - 90);
            crc2.lineTo(_x + 8, _y - 90);
            crc2.lineTo(_x + 8, _y - 82);
            crc2.lineTo(_x + 13, _y - 82);
            crc2.lineTo(_x + 13, _y - 90);
            crc2.lineTo(_x + 18, _y - 90);
            crc2.lineTo(_x + 18, _y - 82);
            crc2.lineTo(_x + 23, _y - 82);
            crc2.lineTo(_x + 23, _y - 90);
            crc2.lineTo(_x + 23, _y - 90);
            crc2.lineTo(_x + 28, _y - 90);
            crc2.lineTo(_x + 28, _y - 82);
            crc2.lineTo(_x + 28, _y - 82);
            crc2.lineTo(_x + 33, _y - 82);
            crc2.lineTo(_x + 33, _y - 90);
            crc2.lineTo(_x + 33, _y - 90);
            crc2.lineTo(_x + 38, _y - 90);
            crc2.lineTo(_x + 38, _y - 70);
            crc2.lineTo(_x + 41, _y - 70);
            crc2.lineTo(_x + 41, _y - 50);
            crc2.lineTo(_x + 60, _y - 50);
            crc2.lineTo(_x + 60, _y - 100);
            crc2.lineTo(_x + 55, _y - 100);
            crc2.lineTo(_x + 70, _y - 130);
            crc2.lineTo(_x + 85, _y - 100);
            crc2.lineTo(_x + 80, _y - 100);
            crc2.lineTo(_x + 80, _y - 50);
            crc2.lineTo(_x + 109, _y - 50);
            crc2.lineTo(_x + 109, _y - 70);
            crc2.lineTo(_x + 112, _y - 70);
            crc2.lineTo(_x + 112, _y - 90);
            crc2.lineTo(_x + 117, _y - 90);
            crc2.lineTo(_x + 117, _y - 82);
            crc2.lineTo(_x + 122, _y - 82);
            crc2.lineTo(_x + 122, _y - 90);
            crc2.lineTo(_x + 127, _y - 90);
            crc2.lineTo(_x + 127, _y - 90);
            crc2.lineTo(_x + 127, _y - 82);
            crc2.lineTo(_x + 132, _y - 82);
            crc2.lineTo(_x + 132, _y - 90);
            crc2.lineTo(_x + 137, _y - 90);
            crc2.lineTo(_x + 137, _y - 90);
            crc2.lineTo(_x + 137, _y - 82);
            crc2.lineTo(_x + 142, _y - 82);
            crc2.lineTo(_x + 142, _y - 90);
            crc2.lineTo(_x + 147, _y - 90);
            crc2.lineTo(_x + 147, _y - 90);
            crc2.lineTo(_x + 147, _y - 70);
            crc2.lineTo(_x + 150, _y - 70);
            crc2.lineTo(_x + 150, _y);
            crc2.closePath();
            crc2.fill();
            crc2.stroke();
        }

        drawSeestar(_x: number, _y: number, spikes: number, outerRadius: number, innerRadius: number): void {

            var rot: number = Math.PI / 2 * 3;
            var x: number = _x;
            var y: number = _y;
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


}

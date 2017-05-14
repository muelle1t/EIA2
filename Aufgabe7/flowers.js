var Aufgabe7_Bienen;
(function (Aufgabe7_Bienen) {
    class Flower {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        drawNectarFlowers() {
            this.drawDaisy1();
            this.drawDaisy2();
            this.drawTulip1();
            this.drawTulip2();
        }
        setRandomPosition() {
            this.x = (Math.random() * (990 - 500)) + 500;
            this.y = (Math.random() * (700 - 450)) + 450;
        }
        drawRandomFlower() {
            let flower = Math.floor((Math.random() * 4) + 0);
            this.setRandomPosition();
            switch (flower) {
                case 0:
                    this.drawDaisy1();
                    break;
                case 1:
                    this.drawTulip1();
                    break;
                case 2:
                    this.drawDaisy2();
                    break;
                case 3:
                    this.drawTulip2();
                    break;
            }
        }
        //Magariten
        drawDaisy1() {
            //grüner Stil
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.fillStyle = "#04B404";
            Aufgabe7_Bienen.crc2.fillRect(this.x, this.y - 40, 4, 40);
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fill();
            //Blüten
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x, this.y);
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(this.x - 5, this.y - 40, 9, 0, Math.PI * 2);
            Aufgabe7_Bienen.crc2.fillStyle = "#00BFFF";
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(this.x + 5, this.y - 40, 9, 0, Math.PI * 2);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(this.x, this.y - 47, 9, 0, Math.PI * 2);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(this.x, this.y - 33, 9, 0, Math.PI * 2);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(this.x, this.y - 40, 6, 0, Math.PI * 2);
            Aufgabe7_Bienen.crc2.fillStyle = "#F4FA58";
            Aufgabe7_Bienen.crc2.fill();
        }
        drawDaisy2() {
            //grüner Stil
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.fillStyle = "#04B404";
            Aufgabe7_Bienen.crc2.fillRect(this.x, this.y - 40, 4, 40);
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fill();
            //Blüten
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x, this.y);
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(this.x - 5, this.y - 40, 9, 0, Math.PI * 2);
            Aufgabe7_Bienen.crc2.fillStyle = "#FFFFFF";
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(this.x + 5, this.y - 40, 9, 0, Math.PI * 2);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(this.x, this.y - 47, 9, 0, Math.PI * 2);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(this.x, this.y - 33, 9, 0, Math.PI * 2);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(this.x, this.y - 40, 6, 0, Math.PI * 2);
            Aufgabe7_Bienen.crc2.fillStyle = "#F4FA58";
            Aufgabe7_Bienen.crc2.fill();
        }
        //Tuplen
        drawTulip1() {
            //grüner Stil          
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.fillStyle = "#04B404";
            Aufgabe7_Bienen.crc2.fillRect(this.x, this.y - 25, 5, 40);
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fill();
            //Blüten 
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x, this.y - 30);
            Aufgabe7_Bienen.crc2.arc(this.x, this.y - 35, 15, 0, Math.PI);
            Aufgabe7_Bienen.crc2.fillStyle = "#BF00FF";
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(this.x, this.y - 35, 7, 0, Math.PI * 2);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
        }
        drawTulip2() {
            //grüner Stil          
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.fillStyle = "#04B404";
            Aufgabe7_Bienen.crc2.fillRect(this.x, this.y - 25, 5, 40);
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.fill();
            //Blüten 
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.moveTo(this.x, this.y - 30);
            Aufgabe7_Bienen.crc2.arc(this.x, this.y - 35, 15, 0, Math.PI);
            Aufgabe7_Bienen.crc2.fillStyle = "#FFFF00";
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
            Aufgabe7_Bienen.crc2.beginPath();
            Aufgabe7_Bienen.crc2.arc(this.x, this.y - 35, 7, 0, Math.PI * 2);
            Aufgabe7_Bienen.crc2.fill();
            Aufgabe7_Bienen.crc2.closePath();
        }
    }
    Aufgabe7_Bienen.Flower = Flower;
})(Aufgabe7_Bienen || (Aufgabe7_Bienen = {}));
//# sourceMappingURL=flowers.js.map
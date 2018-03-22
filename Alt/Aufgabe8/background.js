var Aufgabe8_Bienen;
(function (Aufgabe8_Bienen) {
    class Background {
        constructor() {
            Aufgabe8_Bienen.crc2.fillStyle = "#bdc2e1"; //Himmel
            Aufgabe8_Bienen.crc2.fillRect(0, 0, Aufgabe8_Bienen.crc2.canvas.width, Aufgabe8_Bienen.crc2.canvas.height);
            Aufgabe8_Bienen.crc2.beginPath(); //Sonne 
            Aufgabe8_Bienen.crc2.arc(800, 60, 40, 0 * Math.PI, 2 * Math.PI);
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.strokeStyle = "#6E6E6E";
            Aufgabe8_Bienen.crc2.stroke();
            Aufgabe8_Bienen.crc2.fillStyle = "#FFFF00";
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.fillStyle = "#78f740"; //Wiese
            Aufgabe8_Bienen.crc2.fillRect(0, 350, Aufgabe8_Bienen.crc2.canvas.width, Aufgabe8_Bienen.crc2.canvas.height / 2);
            //Anwendung Funktionen für Wolken, Berge und Tannenbäume
            this.drawCloud(640, 100);
            this.drawCloud(880, 50);
            this.drawCloud(320, 80);
            this.drawCloud(100, 50);
            this.drawMountain(200, 50);
            this.drawMountain(100, 100);
            this.drawMountain(400, 100);
            this.drawFir(640, 330);
            this.drawFir(670, 350);
            this.drawFir(690, 370);
            this.drawFir(720, 330);
            this.drawFir(720, 380);
            this.drawFir(740, 340);
            this.drawFir(760, 350);
            this.drawFir(780, 330);
            this.drawFir(820, 330);
            this.drawFir(840, 350);
            this.drawFir(860, 370);
            this.drawFir(890, 360);
            this.drawFir(920, 330);
            this.drawFir(940, 340);
            this.drawFir(960, 350);
            this.drawFir(980, 330);
            this.drawTree(100, 500);
            this.drawBeeHive(250, 650);
        }
        //Wolken aus 3 Kreisen
        drawCloud(_x, _y) {
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(_x, _y);
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(_x, _y, 25, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fillStyle = "#FFFFFF";
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(_x + 25, _y - 15, 30, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(_x + 35, _y - 3, 25, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
        }
        // Berge aus Dreiecken mit weißen Spitzen
        drawMountain(_x, _y) {
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(_x, _y);
            Aufgabe8_Bienen.crc2.fillStyle = "#6E6E6E";
            Aufgabe8_Bienen.crc2.lineTo(_x - 200, _y + 300);
            Aufgabe8_Bienen.crc2.lineTo(_x + 200, _y + 300);
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.stroke();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(_x, _y);
            Aufgabe8_Bienen.crc2.fillStyle = "#FFFFFF";
            Aufgabe8_Bienen.crc2.lineTo(_x - 47, _y + 70);
            Aufgabe8_Bienen.crc2.lineTo(_x + 47, _y + 70);
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.fill();
        }
        //Funktion Wald aus Tannen
        drawFir(_x, _y) {
            //Stamm
            Aufgabe8_Bienen.crc2.moveTo(_x, _y);
            Aufgabe8_Bienen.crc2.fillStyle = "#3B240B";
            Aufgabe8_Bienen.crc2.fillRect(_x, _y, 15, 25);
            //Baumgrün
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(_x + 7, _y - 15);
            Aufgabe8_Bienen.crc2.lineTo(_x - 15, _y + 10);
            Aufgabe8_Bienen.crc2.lineTo(_x + 25, _y + 10);
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.fillStyle = "#0B610B";
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(_x + 7, _y - 25);
            Aufgabe8_Bienen.crc2.lineTo(_x - 12, _y);
            Aufgabe8_Bienen.crc2.lineTo(_x + 22, _y);
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(_x + 7, _y - 35);
            Aufgabe8_Bienen.crc2.lineTo(_x - 9, _y - 10);
            Aufgabe8_Bienen.crc2.lineTo(_x + 19, _y - 10);
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.fill();
        }
        //Baum im Vordergrund
        drawTree(_x, _y) {
            Aufgabe8_Bienen.crc2.beginPath(); // Stamm
            Aufgabe8_Bienen.crc2.fillStyle = "#61380B";
            Aufgabe8_Bienen.crc2.fillRect(_x + 5, _y, 40, 150);
            //Baumkrone aus 5 Kreisen
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(_x, _y);
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(_x, _y - 20, 40, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fillStyle = "#04B404";
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(_x + 50, _y - 20, 40, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(_x, _y - 30, 40, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(_x + 50, _y - 50, 40, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.arc(_x + 25, _y - 80, 40, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
        }
        //Bienenkorb
        drawBeeHive(_x, _y) {
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(_x, _y);
            Aufgabe8_Bienen.crc2.arc(_x, _y, 25, 0, Math.PI, true);
            Aufgabe8_Bienen.crc2.fillStyle = "#DF7401";
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(_x, _y);
            Aufgabe8_Bienen.crc2.arc(_x, _y - 30, 25, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fillStyle = "#DF7401";
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.moveTo(_x, _y);
            Aufgabe8_Bienen.crc2.arc(_x, _y - 50, 15, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.fillStyle = "#DF7401";
            Aufgabe8_Bienen.crc2.fill();
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.beginPath();
            Aufgabe8_Bienen.crc2.lineWidth = 1;
            Aufgabe8_Bienen.crc2.strokeStyle = "#61380B";
            Aufgabe8_Bienen.crc2.fillStyle = "#61380B";
            Aufgabe8_Bienen.crc2.arc(_x + 5, _y - 30, 6, 0, Math.PI * 2);
            Aufgabe8_Bienen.crc2.closePath();
            Aufgabe8_Bienen.crc2.stroke();
            Aufgabe8_Bienen.crc2.fill();
        }
    }
    Aufgabe8_Bienen.Background = Background;
})(Aufgabe8_Bienen || (Aufgabe8_Bienen = {}));
//# sourceMappingURL=background.js.map
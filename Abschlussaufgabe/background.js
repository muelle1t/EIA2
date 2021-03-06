var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Background {
        draw() {
            this.drawBackground();
            this.drawMountain2(150, 100);
            this.drawMountain1(100, 90);
            this.drawMountain1(250, 90);
            this.drawBush(550, 220);
            this.drawBush(60, 380);
            //            this.drawFlower1(100, 300);
            //            this.drawFlower1(400, 310);
            //            this.drawFlower2(90, 510);
            //            this.drawFlower2(200, 350);
            //            this.drawFlower1(550, 510);
            //            this.drawFlower2(500, 380);
            //this.drawTweety(60, 200);
            this.drawTree(750, 280);
            this.drawBabyBirds(758, 202);
            this.drawBabyBirds(750, 202);
            this.drawBabyBirds(742, 202);
            this.drawBirdsnest(750, 200);
        }
        drawBackground() {
            Abschlussaufgabe.crc2.fillStyle = "#79D073"; //Wiese
            Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.crc2.canvas.width, Abschlussaufgabe.crc2.canvas.height);
            Abschlussaufgabe.crc2.fillStyle = "#58ACFA"; //Himmel
            Abschlussaufgabe.crc2.fillRect(0, 0, Abschlussaufgabe.crc2.canvas.width, Abschlussaufgabe.crc2.canvas.height / 4);
        }
        //Funktion: Baum 
        drawTree(_x, _y) {
            //Stamm
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.strokeStyle = "#8B4513"; //Stammfarbe braun
            Abschlussaufgabe.crc2.fillStyle = "#8B4513";
            Abschlussaufgabe.crc2.fillRect(_x, _y, 70, 250);
            Abschlussaufgabe.crc2.closePath();
            //Baumkrone
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.strokeStyle = "#298A08"; //Blattfarbe grün
            Abschlussaufgabe.crc2.fillStyle = "#298A08";
            Abschlussaufgabe.crc2.arc(_x, _y - 5, 60, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.arc(_x + 70, _y - 5, 60, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(_x - 20, _y - 15, 60, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.arc(_x + 90, _y - 15, 60, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(_x, _y - 40, 60, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.arc(_x + 70, _y - 40, 60, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(_x + 35, _y - 80, 60, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
        }
        // Berge aus Dreiecken mit weißen Spitzen
        drawMountain1(_x, _y) {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x, _y);
            Abschlussaufgabe.crc2.strokeStyle = "#6E6E6E";
            Abschlussaufgabe.crc2.fillStyle = "#6E6E6E";
            Abschlussaufgabe.crc2.lineTo(_x - 70, _y + 90);
            Abschlussaufgabe.crc2.lineTo(_x + 70, _y + 90);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x, _y);
            Abschlussaufgabe.crc2.strokeStyle = "#FFFFFF";
            Abschlussaufgabe.crc2.fillStyle = "#FFFFFF";
            Abschlussaufgabe.crc2.lineTo(_x - 15, _y + 18);
            Abschlussaufgabe.crc2.lineTo(_x + 15, _y + 18);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
        }
        drawMountain2(_x, _y) {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x, _y);
            Abschlussaufgabe.crc2.strokeStyle = "#B1B3B1";
            Abschlussaufgabe.crc2.fillStyle = "#B1B3B1";
            Abschlussaufgabe.crc2.lineTo(_x - 60, _y + 80);
            Abschlussaufgabe.crc2.lineTo(_x + 60, _y + 80);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x, _y);
            Abschlussaufgabe.crc2.strokeStyle = "#FFFFFF";
            Abschlussaufgabe.crc2.fillStyle = "#FFFFFF";
            Abschlussaufgabe.crc2.lineTo(_x - 15, _y + 18);
            Abschlussaufgabe.crc2.lineTo(_x + 15, _y + 18);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
        }
        drawBirdsnest(_x, _y) {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.strokeStyle = "#8A4B08";
            Abschlussaufgabe.crc2.fillStyle = "#8A4B08";
            Abschlussaufgabe.crc2.arc(_x, _y, 20, 0, Math.PI);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
        }
        drawBabyBirds(_x, _y) {
            //Schnabel
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(_x - 5, _y - 15);
            Abschlussaufgabe.crc2.strokeStyle = "#FF8000";
            Abschlussaufgabe.crc2.fillStyle = "#FF8000";
            Abschlussaufgabe.crc2.lineTo(_x - 5, _y + 2);
            Abschlussaufgabe.crc2.lineTo(_x + 5, _y + 2);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
            //Körper
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.strokeStyle = "#FFFF00";
            Abschlussaufgabe.crc2.fillStyle = "#FFFF00";
            Abschlussaufgabe.crc2.arc(_x, _y, 6, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            //Kopf
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.strokeStyle = "#FFFF00";
            Abschlussaufgabe.crc2.fillStyle = "#FFFF00";
            Abschlussaufgabe.crc2.arc(_x, _y - 6, 3, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            //Auge
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.strokeStyle = "#000000";
            Abschlussaufgabe.crc2.fillStyle = "#000000";
            Abschlussaufgabe.crc2.arc(_x - 1, _y - 7, 1, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
        }
        drawBush(_x, _y) {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.strokeStyle = "#21610B";
            Abschlussaufgabe.crc2.fillStyle = "#21610B";
            Abschlussaufgabe.crc2.arc(_x, _y - 10, 25, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.arc(_x + 40, _y - 10, 25, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(_x + 20, _y - 30, 30, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.fillStyle = "#21610B";
            Abschlussaufgabe.crc2.fillRect(_x - 10, _y - 5, 60, 20);
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Background = Background;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=background.js.map
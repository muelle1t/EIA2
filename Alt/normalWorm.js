var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class NormalWorm extends Abschlussaufgabe.Worm {
        constructor() {
            super();
            console.log("normalWorm");
            this.randomPosition();
            this.drawWorm();
        }
        randomPosition() {
            this.x = (Math.random() * (750 - 100)) + 100;
            this.y = (Math.random() * (550 - 200)) + 200;
        }
        drawWorm() {
            //Wurm
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.strokeStyle = "#F5A9E1";
            Abschlussaufgabe.crc2.fillStyle = "#F5A9E1";
            Abschlussaufgabe.crc2.arc(this.x + 6, this.y - 15, 7, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.arc(this.x + 10, this.y - 20, 7, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.arc(this.x + 6, this.y - 25, 7, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.arc(this.x + 10, this.y - 30, 7, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.arc(this.x + 6, this.y - 35, 7, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.arc(this.x + 10, this.y - 40, 7, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.arc(this.x + 6, this.y - 45, 7, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.arc(this.x + 9, this.y - 50, 7, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.arc(this.x + 9, this.y - 55, 7, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            //Erde 
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.strokeStyle = "#61210B";
            Abschlussaufgabe.crc2.fillStyle = "#61210B";
            Abschlussaufgabe.crc2.arc(this.x - 7, this.y - 10, 7, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.arc(this.x, this.y - 10, 7, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.arc(this.x + 7, this.y - 10, 7, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.arc(this.x + 14, this.y - 10, 7, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.arc(this.x + 21, this.y - 10, 7, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            //Augen
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.strokeStyle = "#000000";
            Abschlussaufgabe.crc2.fillStyle = "#000000";
            Abschlussaufgabe.crc2.arc(this.x + 5, this.y - 45, 2, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.arc(this.x + 11, this.y - 45, 2, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            //Mund
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.strokeStyle = "#000000";
            Abschlussaufgabe.crc2.arc(this.x + 7, this.y - 40, 4, 0, Math.PI);
            Abschlussaufgabe.crc2.stroke();
        }
        update() {
            this.drawWorm();
        }
    }
    Abschlussaufgabe.NormalWorm = NormalWorm;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=normalWorm.js.map
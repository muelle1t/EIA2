var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Cloud {
        moveCloud() {
            this.x += 1;
            if (this.x > 1050) {
                this.x = -10;
            }
        }
        //Wolken aus 3 Kreisen
        drawCloud() {
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.moveTo(this.x, this.y);
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x, this.y, 25, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fillStyle = "#FFFFFF";
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 25, this.y - 15, 30, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
            Abschlussaufgabe.crc2.beginPath();
            Abschlussaufgabe.crc2.arc(this.x + 35, this.y - 3, 25, 0, Math.PI * 2);
            Abschlussaufgabe.crc2.fill();
            Abschlussaufgabe.crc2.closePath();
        }
    }
    Abschlussaufgabe.Cloud = Cloud;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=clouds.js.map
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    class Heart {
        constructor(_x, _y) {
            this.w = 30;
            this.h = 30;
            this.d = Math.min(this.w, this.h);
            this.k = 10;
            this.x = _x;
            this.y = _y;
        }
        draw() {
            Abschlussaufgabe.crc2.strokeStyle = "#000000";
            //crc2.strokeWeight = 3;
            Abschlussaufgabe.crc2.shadowOffsetX = 4.0;
            Abschlussaufgabe.crc2.shadowOffsetY = 4.0;
            Abschlussaufgabe.crc2.lineWidth = 10.0;
            Abschlussaufgabe.crc2.fillStyle = "#FF0000";
            Abschlussaufgabe.crc2.moveTo(this.k, this.k + this.d / 4);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.k, this.k, this.k + this.d / 4, this.k);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.k + this.d / 2, this.k, this.k + this.d / 2, this.k + this.d / 4);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.k + this.d / 2, this.k, this.k + this.d * 3 / 4, this.k);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.k + this.d, this.k, this.k + this.d, this.k + this.d / 4);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.k + this.d, this.k + this.d / 2, this.k + this.d * 3 / 4, this.k + this.d * 3 / 4);
            Abschlussaufgabe.crc2.lineTo(this.k + this.d / 2, this.k + this.d);
            Abschlussaufgabe.crc2.lineTo(this.k + this.d / 4, this.k + this.d * 3 / 4);
            Abschlussaufgabe.crc2.quadraticCurveTo(this.k, this.k + this.d / 2, this.k, this.k + this.d / 4);
            Abschlussaufgabe.crc2.stroke();
            Abschlussaufgabe.crc2.fill();
        }
    }
    Abschlussaufgabe.Heart = Heart;
})(Abschlussaufgabe || (Abschlussaufgabe = {}));
//# sourceMappingURL=heart.js.map
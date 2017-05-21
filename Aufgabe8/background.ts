namespace Aufgabe8_Bienen {
    export class Background {
        constructor() {
            
        crc2.fillStyle = "#bdc2e1"; //Himmel
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        crc2.beginPath(); //Sonne 
        crc2.arc(800, 60, 40, 0 * Math.PI, 2 * Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "#6E6E6E";
        crc2.stroke();
        crc2.fillStyle = "#FFFF00";
        crc2.fill();

        crc2.fillStyle = "#78f740"; //Wiese
        crc2.fillRect(0, 350, crc2.canvas.width, crc2.canvas.height / 2);
        
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
        
        this. drawBeeHive(250, 650);
        
            
        }
        
       //Wolken aus 3 Kreisen
    drawCloud(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.beginPath();
        crc2.arc(_x, _y, 25, 0, Math.PI * 2);
        crc2.fillStyle = "#FFFFFF";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 25, _y - 15, 30, 0, Math.PI * 2);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 35, _y - 3, 25, 0, Math.PI * 2);
        crc2.fill();
        crc2.closePath();

    }



    // Berge aus Dreiecken mit weißen Spitzen

    drawMountain(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.fillStyle = "#6E6E6E";
        crc2.lineTo(_x - 200, _y + 300);
        crc2.lineTo(_x + 200, _y + 300);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.fillStyle = "#FFFFFF";
        crc2.lineTo(_x - 47, _y + 70);
        crc2.lineTo(_x + 47, _y + 70);
        crc2.closePath();
        crc2.fill();

    }

    //Funktion Wald aus Tannen

    drawFir(_x: number, _y: number): void {
        //Stamm
        crc2.moveTo(_x, _y);
        crc2.fillStyle = "#3B240B";
        crc2.fillRect(_x, _y, 15, 25);
        //Baumgrün
        crc2.beginPath();
        crc2.moveTo(_x + 7, _y - 15);
        crc2.lineTo(_x - 15, _y + 10);
        crc2.lineTo(_x + 25, _y + 10);
        crc2.closePath();
        crc2.fillStyle = "#0B610B";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x + 7, _y - 25);
        crc2.lineTo(_x - 12, _y);
        crc2.lineTo(_x + 22, _y);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x + 7, _y - 35);
        crc2.lineTo(_x - 9, _y - 10);
        crc2.lineTo(_x + 19, _y - 10);
        crc2.closePath();
        crc2.fill();
    }

 //Baum im Vordergrund
    
    
    drawTree(_x: number, _y: number): void {

        crc2.beginPath(); // Stamm
        crc2.fillStyle = "#61380B";
        crc2.fillRect(_x + 5, _y, 40, 150);
        //Baumkrone aus 5 Kreisen
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.beginPath();
        crc2.arc(_x, _y - 20, 40, 0, Math.PI * 2);
        crc2.fillStyle = "#04B404";
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 50, _y - 20, 40, 0, Math.PI * 2);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x, _y - 30, 40, 0, Math.PI * 2);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 50, _y - 50, 40, 0, Math.PI * 2);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 25, _y - 80, 40, 0, Math.PI * 2);
        crc2.fill();
        crc2.closePath();
        }

    
    //Bienenkorb
    drawBeeHive(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y, 25, 0, Math.PI, true);
        crc2.fillStyle = "#DF7401";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y - 30, 25, 0, Math.PI * 2);
        crc2.fillStyle = "#DF7401";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x, _y - 50, 15, 0, Math.PI * 2);
        crc2.fillStyle = "#DF7401";
        crc2.fill();
        crc2.closePath();

        crc2.beginPath();
        crc2.lineWidth = 1;
        crc2.strokeStyle = "#61380B";
        crc2.fillStyle = "#61380B";
        crc2.arc(_x + 5, _y - 30, 6, 0, Math.PI * 2);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();


    }

    }
        
}
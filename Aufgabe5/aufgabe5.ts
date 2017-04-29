/*
Aufgabe: Aufgabe 5
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 29.04.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Aufgabe5_Bienen {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    let imgData: ImageData;
    
    let n: number = 10;
    let x: number[] = [];
    let y: number[] = [];

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        crc2.fillStyle = "#bdc2e1"; //Himmel
        crc2.fillRect(0, 0, canvas.width, canvas.height);

        crc2.beginPath(); //Sonne 
        crc2.arc(800, 60, 40, 0 * Math.PI, 2 * Math.PI);
        crc2.closePath();
        crc2.strokeStyle = "#6E6E6E";
        crc2.stroke();
        crc2.fillStyle = "#FFFF00";
        crc2.fill();

        crc2.fillStyle = "#78f740"; //Wiese
        crc2.fillRect(0, 350, canvas.width, canvas.height / 2);

        //Anwendung Funktionen für Wolken, Berge und Tannenbäume

        drawCloud(640, 100);
        drawCloud(880, 50);
        drawCloud(320, 80);
        drawCloud(100, 50);

        drawMountain(200, 50);
        drawMountain(100, 100);
        drawMountain(400, 100);

        drawFir(640, 330);
        drawFir(670, 350);
        drawFir(690, 370);
        drawFir(720, 330);
        drawFir(720, 380);
        drawFir(740, 340);
        drawFir(760, 350);
        drawFir(780, 330);
        drawFir(820, 330);
        drawFir(840, 350);
        drawFir(860, 370);
        drawFir(890, 360);
        drawFir(920, 330);
        drawFir(940, 340);
        drawFir(960, 350);
        drawFir(980, 330);
        
        drawTree(100, 500);

       
        //Anwendung Funktionen der festen Blumen

        drawDaisy(500, 620, "#00BFFF");

        drawTulip(320, 480, "#BF00FF");

        drawDaisy(450, 600, "#FFFFFF");

        drawTulip(400, 630, "#FFFF00");

        drawDaisy(350, 580, "#00BFFF");

        drawTulip(430, 500, "#BF00FF");

        drawDaisy(470, 500, "#FFFFFF");

        drawTulip(300, 530, "#FFFF00");

        drawDaisy(250, 500, "#00BFFF");

        drawBeeHive(250, 650);
        
        //drawBee(100, 350)

       

       


        //Blumen Zufallsanordnung
        for (var i: number = 0; i < 40; i++) {
            let flower: number = Math.floor((Math.random() * 4) + 0);
            let _x: number = (Math.random() * (990 - 500)) + 500;
            let _y: number = (Math.random() * (700 - 450)) + 450;
            switch (flower) {
                case 0:
                    drawDaisy(_x, _y, "#00BFFF");
                    break;
                case 1:
                    drawTulip(_x, _y, "#BF00FF");
                    break;
                case 2:
                    drawDaisy(_x, _y, "#FFFFFF");
                    break;
                case 3:
                    drawTulip(_x, _y, "#FFFF00");
                    break;
            }


        }
        
        // Canvas Bild abspeichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
        //Startposition der Bienen im Array festlegen
        for (let i: number = 0; i < n; i++) {
            x[i] = 250;
            y[i] = 620;
        }
        
        window.setTimeout(animate, 40);
        
        //Neue Biene bei Klick oder Touch
        canvas.addEventListener("click", addNewBee);
        canvas.addEventListener("touch", addNewBee);
        
    }
    // Funtkion der neuen Biene 
    function addNewBee(): void {
        x.push(250);
        y.push(620);   
    }
    
    // Animation der Bienen
    function animate(): void {
        crc2.putImageData(imgData, 0, 0); // generieren des abgespeicherten Bildes
        
        //Zufälliges Flugverhalten der einzelnen Bienen
        for (let i: number = 0; i < x.length; i++) {
            x[i] += Math.random() * 4 - 3;
            y[i] += Math.random() * 6 - 3; 
            console.log(x[i], y[i]);
            
            //Bienen kommen am Canvas RAnd auf der anderen Seite wieder rein
            if (x[i] < 0) {
                x[i] = 1000;
                }
            if (y[i] < 0) {
                y[i] = 700;
                }
            if (y[i] > 700) {
                y[i] = 0;
                }
            
            
            drawBee(x[i], y[i]);
        }
        
        window.setTimeout(animate, 40);
    }

    //Wolken aus 3 Kreisen
    function drawCloud(_x: number, _y: number): void {
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
    function drawMountain(_x: number, _y: number): void {
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

    function drawFir(_x: number, _y: number): void {
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
    
    
    function drawTree(_x: number, _y: number): void {

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

    //Funktion der Magariten
    function drawDaisy(_x: number, _y: number, _fillColor: string): void {
        //grüner Stil
        crc2.beginPath();
        crc2.fillStyle = "#04B404";
        crc2.fillRect(_x, _y - 40, 4, 40);
        crc2.closePath();
        crc2.fill();

        //Blüten
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.beginPath();
        crc2.arc(_x - 5, _y - 40, 9, 0, Math.PI * 2);
        crc2.fillStyle = _fillColor;
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x + 5, _y - 40, 9, 0, Math.PI * 2);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x, _y - 47, 9, 0, Math.PI * 2);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x, _y - 33, 9, 0, Math.PI * 2);
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x, _y - 40, 6, 0, Math.PI * 2);
        crc2.fillStyle = "#F4FA58";
        crc2.fill();
    }


    //Funktion der Tuplen
    function drawTulip(_x: number, _y: number, _fillColor: string): void {
        //grüner Stil          
        crc2.beginPath();
        crc2.fillStyle = "#04B404";
        crc2.fillRect(_x, _y - 25, 5, 40);
        crc2.closePath();
        crc2.fill();
        //Blüten 
        crc2.beginPath();
        crc2.moveTo(_x, _y - 30);
        crc2.arc(_x, _y - 35, 15, 0, Math.PI);
        crc2.fillStyle = _fillColor;
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.arc(_x, _y - 35, 7, 0, Math.PI * 2);
        crc2.fill();
        crc2.closePath();

    }

    //Bienenkorb
    function drawBeeHive(_x: number, _y: number): void {
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


    function drawBee(_x: number, _y: number): void {
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        //crc2.ellipse(_x, _y, 10, 5, 0, Math.PI * 2, 0);
        crc2.arc(_x - 5, _y, 5, 0, Math.PI * 2);
        crc2.fillStyle = "#FFFF00";
        crc2.closePath();
        crc2.fill();
        
        //Auge
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        crc2.arc(_x - 6, _y - 1, 2, 0, Math.PI * 2);
        crc2.fillStyle = "#000000";
        crc2.closePath();
        crc2.fill();
        
        //Fühler
        crc2.beginPath();
        crc2.moveTo(_x - 1, _y - 1);
        crc2.lineTo(_x - 7, _y - 10);
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.arc(_x - 7, _y - 10, 1, 0, Math.PI * 2);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        
        //Streifen
        crc2.beginPath();
        crc2.moveTo(_x - 1, _y + 5);
        crc2.lineWidth = 3;
        crc2.lineTo(_x, _y - 7);
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        
        crc2.beginPath();
        crc2.moveTo(_x + 6, _y + 5);
        crc2.lineWidth = 3;
        crc2.lineTo(_x + 6, _y - 5);
        crc2.fillStyle = "#000000";
        crc2.strokeStyle = "#000000";
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        
        //Flügel
        crc2.beginPath();
        crc2.moveTo(_x, _y);
        //crc2.ellipse(_x + 4, _y - 8, 3, 5, 45 * Math.PI/180, Math.PI * 2, 0);
        //crc2.ellipse(_x + 2, _y - 8, 3, 5, 45 * Math.PI/-180, Math.PI * 2, 0);
        crc2.fillStyle = "#CEF6F5";
        crc2.closePath();
        crc2.fill();
    }

}


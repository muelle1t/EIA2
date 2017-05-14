/*
Aufgabe: Aufgabe 7
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 13.05.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Aufgabe7_Bienen {
    
    window.addEventListener("load", init);
    
    export let crc2: CanvasRenderingContext2D;

    let imgData: ImageData;
    
    let n: number = 10;
    let x: number[] = [];
    let y: number[] = [];
    
    
    let allBees: any[] = [];
    
    let nectarFlowers: any[] = [];  
    
    

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
        
               
        //Blumenwiese
        
        /*for (let i: number = 0; i < 10; i++) {
            let f = new Flower;
            f.drawNectarFlowers();
            nectarFlowers.push(f);
            }*/
        
        //Zufällige Blumenwiese
        
        for (var i: number = 0; i < 20; i++) {
            let f = new Flower (0, 0);
            f.drawRandomFlower();
            }
        
        console.log(nectarFlowers);

        drawBeeHive(250, 650);
        
        for (let i: number = 0; i < n; i++) {
            let b: Bee = new Bee(250, 620, "hsl(" + Math.random() * 360 + ", 70%, 50%)", (Math.random() * 1.5));
            allBees[i] = b;
            
        }
        
       

       
        
       


        
        
        // Canvas Bild abspeichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        
        
        
        window.setTimeout(animate, 40);
        
        //Neue Biene bei Klick oder Touch
        canvas.addEventListener("click", addNewBee);
        canvas.addEventListener("touch", addNewBee);
        
    }
    // Funtkion der neuen Biene 
    function addNewBee(): void {
       let bee: Bee = new Bee(250, 620, "hsl(" + Math.random() * 360 + ", 70%, 50%)", (Math.random() * 1.5)); 
       allBees.push(bee);
      
    }
    
    // Animation der Bienen
    function animate(): void {
        crc2.putImageData(imgData, 0, 0); // generieren des abgespeicherten Bildes
        
        //Zufälliges Flugverhalten der einzelnen Bienen
        for (let i: number = 0; i < allBees.length; i++) {
            let bees: Bee = (allBees[i]);
            bees.setRandomDirection();
            bees.update();
                       
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


   
}


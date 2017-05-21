/*
Aufgabe: Aufgabe 8
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 21.05.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace Aufgabe8_Bienen {
    
    window.addEventListener("load", init);
    
    export let crc2: CanvasRenderingContext2D;

    let imgData: ImageData;
    
    let n: number = 10;
    let x: number[] = [];
    let y: number[] = [];
    
    
    export let allBees: Bees[] = [];
    
    export let nectarFlowers: Flower[] = [];  
    
    

    function init(_event: Event): void {

        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        let b: Background = new Background();

        
        //Zufällige Blumenwiese
        
        for (var i: number = 0; i < 20; i++) {
            let fr: Flower = new Flower (0, 0);
            fr.setRandomPosition();
            fr.drawRandomFlower();
                      
            }
        
     
        
        //Blumenwiese
        
        for (let i: number = 0; i < 3; i++) {
            let x: number = (Math.random() * (990 - 300)) + 300;
            let y: number = (Math.random() * (700 - 600)) + 600;
            
            let d1: DaisyBlue = new DaisyBlue(x, y);
            d1.drawDaisyBlue();
            nectarFlowers.push(d1);
            
            let d2: DaisyWhite = new DaisyWhite(x + 40, y - 4);
            d2.drawDaisyWhite();
            nectarFlowers.push(d2);
            
            let t1: TulipPurple = new TulipPurple(x + 20 , y);
            t1.drawTulipPurple();
            nectarFlowers.push(t1);
            
            let t2: TulipYellow = new TulipYellow(x - 30, y + 3);
            t2.drawTulipYellow();
            nectarFlowers.push(t2);
            }
        
        console.log("nectar Flowers", nectarFlowers);
        
          // Canvas Bild abspeichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);   
        
        

        
        for (let i: number = 0; i < n; i++) {
            
            let hb: HoneyBee = new HoneyBee(250, 620, "hsl(" + Math.random() * 360 + ", 70%, 50%)");
            hb.drawBee();
            allBees.push(hb);
            
            let rb: RegularBee = new RegularBee(250, 620, "hsl(" + Math.random() * 360 + ", 70%, 50%)");
            rb.drawBee();
            allBees.push(rb);
            
        }
        
        console.log("Bees", allBees);
        
        
        
        
        window.setTimeout(animate, 40);
        
        //Neue Biene bei Klick oder Touch
        canvas.addEventListener("click", addNewBee);
        canvas.addEventListener("touch", addNewBee);
        
    }
    // Funtkion der neuen Biene 
    function addNewBee(): void {
       let b: HoneyBee = new HoneyBee(250, 620, "hsl(" + Math.random() * 360 + ", 70%, 50%)"); 
       b.drawBee();
       allBees.push(b);
      
    }
    
    // Animation der Bienen
    function animate(): void {
        crc2.putImageData(imgData, 0, 0); // generieren des abgespeicherten Bildes
        
        //Zufälliges Flugverhalten der einzelnen Bienen
        for (let i: number = 0; i < allBees.length; i++) {
            let bees: Bees = (allBees[i]);
            
            
            //Bienen kommen am Canvas Rand auf der anderen Seite wieder rein
            if (bees.x < 0) {
                bees.x = 1000;
                }
            if (bees.y < 0) {
                bees.y = 700;
                }
            if (bees.y > 700) {
                bees.y = 0;
                }
            
            bees.update();
                       
           }
        
        window.setTimeout(animate, 40);
    }
    
     
    
     

   
}


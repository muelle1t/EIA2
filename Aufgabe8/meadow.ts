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
        
        console.log(nectarFlowers);

              
         // Canvas Bild abspeichern
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);  
        
        
        //Blumenwiese
        
        for (let i: number = 0; i < 10; i++) {
            let x: number = (Math.random() * (990 - 300)) + 300;
            let y: number = (Math.random() * (700 - 600)) + 600;
            let f: Flower = new Flower(x, y);
            f.drawRandomFlower();
            nectarFlowers.push(f);
            }
        
        
        
        for (let i: number = 0; i < n; i++) {
            let b: Bees = new Bees(250, 620, "hsl(" + Math.random() * 360 + ", 70%, 50%)");
            allBees[i] = b;
            
        }
        
        
        window.setTimeout(animate, 40);
        
        //Neue Biene bei Klick oder Touch
        canvas.addEventListener("click", addNewBee);
        canvas.addEventListener("touch", addNewBee);
        
    }
    // Funtkion der neuen Biene 
    function addNewBee(): void {
       let bee: Bees = new Bees(250, 620, "hsl(" + Math.random() * 360 + ", 70%, 50%)"); 
       allBees.push(bee);
      
    }
    
    // Animation der Bienen
    function animate(): void {
        crc2.putImageData(imgData, 0, 0); // generieren des abgespeicherten Bildes
        
        //Zufälliges Flugverhalten der einzelnen Bienen
        for (let i: number = 0; i < allBees.length; i++) {
            let bees: Bees = (allBees[i]);
            bees.update();
            
            //Bienen kommen am Canvas Rand auf der anderen Seite wieder rein
            if (this.x < 0) {
                this.x = 1000;
                }
            if (this.y < 0) {
                this.y = 700;
                }
            if (this.y > 700) {
                this.y = 0;
                }
                       
           }
        
        window.setTimeout(animate, 40);
    }
    
     
    
     

   
}


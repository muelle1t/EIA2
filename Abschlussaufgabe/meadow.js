/*
Aufgabe: Aufgabe 11
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 01.07.2018

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var Abschlussaufgabe;
(function (Abschlussaufgabe) {
    window.addEventListener("load", init);
    let n = (Math.random() * 4) + 1;
    let m = 8;
    let imagedata;
    let numLives = 4;
    let poison = [];
    Abschlussaufgabe.food = [];
    var moved = false;
    let gameEnd = false;
    function init(_event) {
        //Background Canvas
        let canvas;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);
        Abschlussaufgabe.crc2 = canvas.getContext("2d");
        console.log(Abschlussaufgabe.crc2);
        //Tweety Canvas
        let tweetyCanvas;
        tweetyCanvas = document.getElementsByTagName("canvas")[2];
        Abschlussaufgabe.tweety = tweetyCanvas.getContext("2d");
        //Tweety Futter Canvas
        let foodCanvas;
        foodCanvas = document.getElementsByTagName("canvas")[1];
        Abschlussaufgabe.bugs = foodCanvas.getContext("2d");
        //Herzen Canvas
        let heartCanvas;
        heartCanvas = document.getElementsByTagName("canvas")[3];
        Abschlussaufgabe.heart = heartCanvas.getContext("2d");
        //Bienen Canvas
        let beeCanvas;
        beeCanvas = document.getElementsByTagName("canvas")[4];
        Abschlussaufgabe.bee = beeCanvas.getContext("2d");
        //Hintergund aus Background Klasse
        let bg = new Abschlussaufgabe.Background;
        bg.draw();
        //Bienen werden erstellt und ins Array gepusht
        for (let i = 0; i < m; i++) {
            let b = new Abschlussaufgabe.Bee((Math.random() * (900 - 50)) + 50, (Math.random() * (500 - 50)) + 50);
            poison.push(b);
        }
        //Fliegen werden erstellt und ins Array gepusht
        for (let i = 0; i < n; i++) {
            let f = new Abschlussaufgabe.Fly((Math.random() * (1000 - 70)) + 70, (Math.random() * (500 - 50)) + 50);
            Abschlussaufgabe.food.push(f);
        }
        //Marienkäfer werden erstellt und ins Array gepusht
        for (let i = 0; i < n; i++) {
            let lb = new Abschlussaufgabe.Ladybug((Math.random() * (1000 - 70)) + 70, (Math.random() * (500 - 50)) + 50);
            Abschlussaufgabe.food.push(lb);
        }
        alert("Hurry up! Tweety needs your help. Collect all the bugs but watch out for the bees. They sting!");
        let t = new Abschlussaufgabe.Bird(40, 150);
        function updateTweety() {
            if (!gameEnd) {
                Abschlussaufgabe.tweety.clearRect(0, 0, 1000, 500);
                t.drawTweety();
                setTimeout(updateTweety, 1);
            }
        }
        function getMousePos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }
        tweetyCanvas.addEventListener("mousemove", function (evt) {
            var mousePos = getMousePos(canvas, evt);
            if (!moved) {
                updateTweety();
            }
            moved = true;
            t.move(mousePos.x, mousePos.y);
            checkFlyEaten(mousePos.x, mousePos.y);
            checkBeeTouched(mousePos.x, mousePos.y);
            console.log(Abschlussaufgabe.food.length);
            if (Abschlussaufgabe.food.length == 0) {
                GameWon();
            }
            if (numLives == 0) {
                GameLost();
            }
        }, true);
        function getTouchPos(canvas, evt) {
            var rect = canvas.getBoundingClientRect();
            return {
                x: evt.clientX - rect.left,
                y: evt.clientY - rect.top
            };
        }
        tweetyCanvas.addEventListener("mousemove", function (evt) {
            var mousePos = getMousePos(canvas, evt);
            if (!moved) {
                updateTweety();
            }
            moved = true;
            t.move(mousePos.x, mousePos.y);
            checkFlyEaten(mousePos.x, mousePos.y);
            checkBeeTouched(mousePos.x, mousePos.y);
            console.log(Abschlussaufgabe.food.length);
            if (Abschlussaufgabe.food.length == 0) {
                GameWon();
            }
            if (numLives == 0) {
                GameLost();
            }
        }, true);
        //Touch Event fürs Handy
        tweetyCanvas.addEventListener("touchstart", function (e) {
            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;
            const canvasTouchPosy = e.touches.item(0).clientY - document.querySelector('canvas').clientTop;
            if (!moved) {
                updateTweety();
            }
            t.move(canvasTouchPosX, canvasTouchPosy);
            checkFlyEaten(canvasTouchPosX, canvasTouchPosy);
            checkBeeTouched(canvasTouchPosX, canvasTouchPosy);
            if (Abschlussaufgabe.food.length == 0) {
                GameWon();
            }
            if (numLives == 0) {
                GameLost();
            }
            console.log(canvasTouchPosX);
        });
        tweetyCanvas.addEventListener("touchmove", function (e) {
            const canvasTouchPosX = e.touches.item(0).clientX - document.querySelector('canvas').clientLeft;
            const canvasTouchPosy = e.touches.item(0).clientY - document.querySelector('canvas').clientTop;
            if (!moved) {
                updateTweety();
            }
            t.move(canvasTouchPosX, canvasTouchPosy);
            checkFlyEaten(canvasTouchPosX, canvasTouchPosy);
            checkBeeTouched(canvasTouchPosX, canvasTouchPosy);
            if (Abschlussaufgabe.food.length == 0) {
                GameWon();
            }
            if (numLives == 0) {
                GameLost();
            }
            console.log(canvasTouchPosX);
        });
        imagedata = Abschlussaufgabe.crc2.getImageData(0, 0, 1000, 500);
        animate();
    }
    function animate() {
        Abschlussaufgabe.crc2.putImageData(imagedata, 0, 0);
        Abschlussaufgabe.bee.clearRect(0, 0, 1000, 500);
        movePoison();
        drawPoison();
        Abschlussaufgabe.bugs.clearRect(0, 0, 1000, 500);
        moveFood();
        drawFood();
        window.setTimeout(animate, 20);
    }
    function drawPoison() {
        for (let i = 0; i < poison.length; i++) {
            poison[i].draw();
        }
    }
    function movePoison() {
        for (let i = 0; i < poison.length; i++) {
            poison[i].move();
        }
    }
    function drawFood() {
        for (let i = 0; i < Abschlussaufgabe.food.length; i++) {
            Abschlussaufgabe.food[i].draw();
        }
    }
    function moveFood() {
        for (let i = 0; i < Abschlussaufgabe.food.length; i++) {
            Abschlussaufgabe.food[i].move();
        }
    }
    function checkFlyEaten(_x, _y) {
        for (let i = 0; i < Abschlussaufgabe.food.length; i++) {
            if (Math.abs(Abschlussaufgabe.food[i].x - _x) < 10 && Math.abs(Abschlussaufgabe.food[i].y - _y) < 10) {
                console.log("fly eaten");
                //food[i].redraw();
                Abschlussaufgabe.food.splice(i, 1);
            }
        }
    }
    function checkBeeTouched(_x, _y) {
        for (let i = 0; i < poison.length; i++) {
            if (Math.abs(poison[i].x - _x) < 8 && Math.abs(poison[i].y - _y) < 8) {
                console.log("poison eaten");
                //poison[i].redraw();
                poison.splice(i, 1);
                numLives--;
            }
        }
    }
    function GameWon() {
        gameEnd = true;
        Abschlussaufgabe.tweety.clearRect(0, 0, 1000, 500);
        Abschlussaufgabe.tweety.fillStyle = "#F4FA58";
        Abschlussaufgabe.tweety.beginPath();
        Abschlussaufgabe.tweety.rect(0, 0, 1000, 500);
        Abschlussaufgabe.tweety.globalAlpha = 0.8;
        Abschlussaufgabe.tweety.closePath();
        Abschlussaufgabe.tweety.fill();
        Abschlussaufgabe.tweety.fillStyle = "#000000";
        Abschlussaufgabe.tweety.font = "30px Arial";
        Abschlussaufgabe.tweety.textAlign = "center";
        Abschlussaufgabe.tweety.fillText("You helped Tweety collect all the bugs.", 1000 / 2, 500 / 2 - 55);
        Abschlussaufgabe.tweety.fillText("Now she can go back to her family.", 1000 / 2, 500 / 2 - 20);
        Abschlussaufgabe.tweety.fillText(" ", 1000 / 2, 500 / 2 + 20);
        Abschlussaufgabe.tweety.fillText("Thanks for your help!", 1000 / 2, 500 / 2 + 55);
        console.log("Spiel gewonnen");
    }
    function GameLost() {
        gameEnd = true;
        Abschlussaufgabe.tweety.clearRect(0, 0, 1000, 500);
        Abschlussaufgabe.tweety.fillStyle = "#000000";
        Abschlussaufgabe.tweety.beginPath();
        Abschlussaufgabe.tweety.rect(0, 0, 1000, 500);
        Abschlussaufgabe.tweety.globalAlpha = 0.8;
        Abschlussaufgabe.tweety.closePath();
        Abschlussaufgabe.tweety.fill();
        Abschlussaufgabe.tweety.fillStyle = "#FF0000";
        Abschlussaufgabe.tweety.font = "30px Arial";
        Abschlussaufgabe.tweety.textAlign = "center";
        Abschlussaufgabe.tweety.fillText("You Lost!", 1000 / 2, 500 / 2 - 55);
        Abschlussaufgabe.tweety.fillText("Tweety was stung by to many bees.", 1000 / 2, 500 / 2 - 20);
        Abschlussaufgabe.tweety.fillText(" ", 1000 / 2, 500 / 2 + 20);
        Abschlussaufgabe.tweety.fillText("Just reload the page and you can help Tweety, again.", 1000 / 2, 500 / 2 + 55);
        console.log("Spiel verloren");
    }
})(Abschlussaufgabe || (Abschlussaufgabe = {})); //End namespace
//# sourceMappingURL=meadow.js.map
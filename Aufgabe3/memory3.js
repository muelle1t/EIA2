var Aufgabe3;
(function (Aufgabe3) {
    window.addEventListener("load", init);
    let contentCards = ["Apfel", "Apfel", "Birne", "Birne", "Zitrone", "Zitrone", "Avocado", "Avocado", "Orange", "Orange", "Ananas", "Ananas", "Erdbeere", "Erdbeere", "Wassermelone", "Wassermelone", "Papaya", "Papaya", "Pfirsich", "Pfirsich"];
    console.log(contentCards);
    let cardsList = [];
    let cardsTaken = [];
    let askPlayer;
    let numPlayer;
    let askCards;
    let numCards;
    let removeCard;
    let numCardsOpen = 0;
    let numTakenCards = 0;
    function init(_event) {
        askPlayer = prompt("Bitte die Anzahl der Spieler eingeben (min. 1, max. 4):");
        numPlayer = parseInt(askPlayer);
        console.log(numPlayer);
        askCards = prompt("Bitte die Anzahl der Kartenpaare eingeben (min. 5, max. 10):");
        numCards = parseInt(askCards);
        console.log(numCards);
        totalNumCards();
        createInfo(numPlayer);
        console.log(_event);
    }
    //Funktion für die Infotafel
    function createInfo(_numPlayers) {
        let info = document.getElementById("info");
        for (let i = 1; i < _numPlayers + 1; i++) {
            let p = document.createElement("p");
            p.innerText = "Spieler" + " " + i + ":" + " " + " 0 Punkte";
            info.appendChild(p);
            console.log(info.textContent);
        }
    }
    //Funktion für Karten
    function createCards() {
        let div = document.createElement("div");
        let card = document.getElementById("brett");
        let n = Math.floor(Math.random() * contentCards.length); //zufälliger Inhalt aus dem Array
        let randomNumber = Math.random();
        console.log(contentCards[n]);
        //        if (randomNumber <= 0.5) { //        
        //            card.appendChild(div);
        div.setAttribute("class", "closed");
        //            cardsList.push(card);
        //        }
        //
        //        if (randomNumber > 0.5 && randomNumber <= 0.75) { //open
        //            let div: HTMLDivElement = document.createElement("div");
        //            card.appendChild(div);
        //            div.setAttribute("class", "open");
        div.innerText = contentCards[n];
        //            cardsList.push(card);
        //
        //        }
        //        else if (randomNumber > 0.75) { //taken
        //            let div: HTMLDivElement = document.createElement("div");
        //            card.appendChild(div);
        //            div.setAttribute("class", "taken");
        //            cardsList.push(card);
        //
        //        }
        div.addEventListener("click", openCard);
        card.appendChild(div);
        contentCards.splice(n, 1);
    }
    //Funktion für die Anzahl der KArten
    function totalNumCards() {
        for (let i = 0; i < numCards; i++) {
            createCards();
            createCards();
        }
    }
    //Funktion Karte öffnen
    function openCard(_event) {
        let clicked = _event.target;
        if (clicked.className == "closed") {
            clicked.className = "open";
        }
        let cardContent;
        if (clicked.className == "open" && numCardsOpen <= 2) {
            cardContent = clicked.textContent; //Karteninhalt entspricht dem Inhalt der geklickten Karte und wird in das neue Array gepusht
            cardsList.push(cardContent);
            console.log(cardsList);
            numCardsOpen++;
        }
        console.log("OpenCards:" + numCardsOpen);
        if (numCardsOpen == 2) {
            setTimeout(compareCards, 1500);
        }
        if (numCardsOpen > 2) {
            clicked.className = "closed";
        }
    }
    function compareCards() {
        let firstCard = document.getElementsByClassName("open")[0]; // die zwei offenen Karten werden geholt
        let secondCard = document.getElementsByClassName("open")[1];
        console.log("Erste Karte:" + firstCard);
        console.log("Zweite Karte:" + secondCard);
        if (firstCard.innerHTML == secondCard.innerHTML) {
            firstCard.setAttribute("class", "taken");
            secondCard.setAttribute("class", "taken");
            numTakenCards++;
            console.log("CardsTaken:" + numTakenCards);
            numCardsOpen = 0;
        }
        else {
            firstCard.setAttribute("class", "closed");
            secondCard.setAttribute("class", "closed");
            numCardsOpen = 0;
        }
        endGame();
    }
    function endGame() {
        if (numTakenCards == numCards) {
            alert("Herzlichen Glückwunsch! Du hast das Spiel erfolgreich beendet.");
        }
    }
})(Aufgabe3 || (Aufgabe3 = {}));
//# sourceMappingURL=memory3.js.map
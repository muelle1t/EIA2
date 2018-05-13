var Aufgabe4;
(function (Aufgabe4) {
    window.addEventListener("load", init);
    let contentCards = [];
    console.log(contentCards);
    let cardsList = [];
    let cardsTaken = [];
    let askPlayer;
    let numPlayer = 1;
    let playerScore = 0;
    let askCards;
    let numCards;
    //let removeCard: number;
    let amountCards;
    let numCardsOpen = 0;
    let numTakenCards = 0;
    function init(_event) {
        document.getElementById("start").addEventListener("click", start);
        document.getElementById("addplayer").addEventListener("click", addPlayer);
        document.getElementById("removeplayer").addEventListener("click", removePlayer);
    }
    //Funktion für die Infotafel
    function addPlayer() {
        if (numPlayer < 4) {
            let player = document.createElement("input");
            player.setAttribute("type", "text");
            player.setAttribute("placeholder", "Spielernamen");
            player.setAttribute("name", "player");
            player.setAttribute("id", "player");
            document.getElementById("names").appendChild(player);
            numPlayer++;
        }
    }
    function removePlayer() {
        document.getElementById("player").remove();
        numPlayer--;
    }
    function createStepper() { }
    function start() {
        let input = document.getElementById("player");
        // Spieler Anzeige generieren
        for (let i = 0; i < numPlayer; i++) {
            let playerDiv = document.createElement("div");
            document.getElementById("info").appendChild(playerDiv);
            playerDiv.innerHTML = input[0].value + ": " + playerScore + " Punkte";
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
        amountCards = numCards * 2;
        console.log(amountCards);
        for (let i = 0; i < amountCards; i++) {
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
})(Aufgabe4 || (Aufgabe4 = {}));
//# sourceMappingURL=memory4.js.map
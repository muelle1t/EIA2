var Aufgabe2;
(function (Aufgabe2) {
    window.addEventListener("load", init);
    let contentCards = ["Apfel", "Birne", "Zitrone", "Avocado", "Orange", "Ananas", "Erdbeere", "Wassermelone", "Papaya", "Pfirsich"];
    console.log(contentCards);
    let cardsList = [];
    let askPlayer;
    let numPlayer;
    let askCards;
    let numCards;
    let amountCards;
    let removeCard;
    function init(_event) {
        //        numberPlayers();
        //        numberCards();
        askPlayer = prompt("Bitte die Anzahl der Spieler eingeben (min. 1, max. 4):");
        numPlayer = parseInt(askPlayer);
        console.log(numPlayer);
        askCards = prompt("Bitte die Anzahl der Kartenpaare eingeben (min. 5, max. 10):");
        numCards = parseInt(askCards);
        console.log(numCards);
        totalNumCards();
        createInfo(numPlayer);
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
    function createCards() {
        let card = document.getElementById("brett");
        let n = Math.round(Math.random() * contentCards.length);
        let randomNumber = Math.random();
        console.log(contentCards[6]);
        if (randomNumber <= 0.5) {
            let div = document.createElement("div");
            card.appendChild(div);
            div.setAttribute("class", "closed");
            cardsList.push(card);
        }
        if (randomNumber > 0.5 && randomNumber <= 0.75) {
            let div = document.createElement("div");
            card.appendChild(div);
            div.setAttribute("class", "open");
            div.innerText = contentCards[n];
            cardsList.push(card);
        }
        else if (randomNumber > 0.75) {
            let div = document.createElement("div");
            card.appendChild(div);
            div.setAttribute("class", "taken");
            cardsList.push(card);
        }
        contentCards.splice(0, 1);
    }
    function totalNumCards() {
        amountCards = numCards * 2;
        console.log(amountCards);
        //Anzahl der Karten im Game Div
        for (let i = 0; i < amountCards; i++) {
            createCards();
        }
    }
})(Aufgabe2 || (Aufgabe2 = {}));
//# sourceMappingURL=memory2.js.map
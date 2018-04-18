var Aufgabe2b;
(function (Aufgabe2b) {
    window.addEventListener("load", init);
    let contentCards = ["Apfel", "Apfel", "Birne", "Birne", "Zitrone", "Zitrone", "Avocado", "Avocado", "Orange", "Orange", "Mandarine", "Mandarine", "Ananas", "Ananas", "Dattel", "Dattel", "Erdbeere", "Erdbeere", "Weintraube", "Weintraube", "Himbeere", "Himbeere", "Zwetschge", "Zwetschge", "Wassermelone", "Wassermelone", "Papaya", "Papaya", "Pfirsich", "Pfirsich"];
    console.log(contentCards);
    //let cardsOnField: string[] = [];
    //let classes: string[] = ["closed", "taken", "open"];
    //let cards: HTMLElement[] = [];
    let askPlayer;
    let numPlayer;
    let askCards;
    let numCards;
    let inputCards;
    let removeCard;
    function init(_event) {
        numberPlayers();
        numberCards();
        inputCards = numCards * 2;
        removeCard = contentCards.length - numCards;
        console.log(numberCards);
        contentCards.splice(inputCards, removeCard); //nimm die unnötigen Buchstaben aus dem array
        for (let i = 0; i < inputCards; i++) {
            createCards();
        }
        console.log(createCards);
        createInfo(numPlayer);
    }
    //Funktion Eingabe Spiel    
    function numberPlayers() {
        askPlayer = prompt("Bitte die Anzahl der Spieler eingeben (min. 1, max. 4):");
        console.log(askPlayer);
        numPlayer = parseInt(askPlayer);
        console.log(numPlayer);
        return numPlayer;
    }
    function numberCards() {
        let askCards = prompt("Bitte die Anzahl der Kartenpaare eingeben (min. 5, max. 15):");
        let numCards = parseInt(askCards);
        return numCards;
    }
    function createCards() {
        let randomContent = contentCards[Math.floor(Math.random() * contentCards.length)]; //greife eine random Buchstabe aus dem array
        let position = contentCards.indexOf(randomContent); //finde die Position des Buchstabens herraus
        let randomNumber = Math.random();
        if (randomNumber < 0.6) {
            let div = document.createElement("div");
            div.setAttribute("class", "hidden");
            document.getElementById("Brett").appendChild(div);
        }
        if (randomNumber > 0.6 && randomNumber < 0.8) {
            let div = document.createElement("div");
            div.setAttribute("class", "open");
            div.innerText = randomContent;
            document.getElementById("Brett").appendChild(div);
        }
        else if (randomNumber > 0.8) {
            let div = document.createElement("div");
            div.setAttribute("class", "taken");
            document.getElementById("Brett").appendChild(div);
        }
        contentCards.splice(position, 1);
    }
    //Funktion Karten anzeigen
    //function createCards(_inputCards: number, _contentCards: string[]): void {
    //    let cardList: string[] = [];
    //    let i: number = 0;
    //    
    //    for (i; i <= _inputCards - 1; i++) {
    //        cardList.push(_contentCards[i]);
    //        }
    //    console.log(cardList);
    //    
    //    for (i; cardList.length > 0; i++) {
    //                
    //                let classArray: string[] = ["open", "closed", "hidden"];
    //                console.log(classArray);
    //            
    //                let l: number = Math.floor((Math.random() * classArray.length) + 0);
    //                console.log(l);
    //                
    //                let status: string = classArray[l];
    //                console.log(classArray[l]);
    //                
    //                let k: number = Math.floor((Math.random() * cardList.length) + 0);
    //                console.log(k);
    //                
    //                showCard(cardList, k, status);             
    //                
    //                cardList.splice(k, 1);
    //                console.log(cardList);
    //                
    //} 
    //    
    //    }
    //
    //Start createCard1()
    //            function showCard(_cardList: string[], _k: number, _status: string): void {
    //                let card: HTMLDivElement = document.createElement("div");
    //                console.log(card);
    //                
    //                card.innerText = _cardList[_k];
    //                console.log(_cardList[_k]);
    //                    
    //                card.className = _status;
    //                console.log(_status);
    //                    
    //                let divs: NodeListOf<HTMLDivElement> = documgetElementsByTagName("div");
    //                divs[0].appendChild(card); 
    //                console.log(card);
    //                
    //            }
    //Ende createCard1()
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
})(Aufgabe2b || (Aufgabe2b = {}));
//# sourceMappingURL=memory.js.map
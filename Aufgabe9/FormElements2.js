var Aufgabe9;
(function (Aufgabe9) {
    window.addEventListener("load", init);
    let art;
    let sorte;
    let kugelgröße;
    let topping;
    let kontaktdatenArray;
    let versandart;
    let artInputs = [];
    let sorteInputs = [];
    let kugelgrößeInputs = [];
    let toppingInputs = [];
    let kontaktdatenInputs = [];
    let versandartInputs = [];
    art = ["Waffel", "Becher"];
    sorte = ["Schokolade", "Vanille", "Stracciatella", "Malaga", "Pistazie", "Erdbeere", "Himbeere", "Zitrone", "Melone", "Grüner Apfel"];
    kugelgröße = ["Normal - 1€ je Kugel", "XL - 2€ je Kugel"];
    topping = ["Sahne", "Schoko-Soße", "Caramell-Soße", "Schoko-Streusel", "Bunte Streusel", "Smarties", "Oreos", "Banane", "Erdbeeren", "Melone", "Himbeeren", "Heidelbeeren"];
    kontaktdatenArray = ["Name", "Vorname", "Straße", "Hausnummer", "Postleitzahl", "Ort", "Telefonnummer"];
    versandart = ["Standard", "Express"];
    let fieldSetBestellung = document.getElementById("Bestellung");
    let arten = document.getElementById("Art");
    let sorten = document.getElementById("Sorten");
    let kugelgrößen = document.getElementById("Kugelgrößen");
    let toppings = document.getElementById("Topping");
    let anmerkungen = document.getElementById("Anmerkungen");
    let fieldSetÜbersicht = document.getElementById("Übersicht");
    let kontaktdaten = document.getElementById("Kontaktdaten");
    let versandarten = document.getElementById("Versandart");
    let sendeButton = document.getElementById("BestellButton");
    let anmerkungenInput = document.getElementById("Anmerkungen");
    function init() {
        console.log("Init");
        createFieldSetBestellung();
        createFieldSetÜbersicht();
        sendeButton.addEventListener("click", bestellungPrüfen);
        arten.addEventListener("change", change);
        sorten.addEventListener("change", change);
        kugelgrößen.addEventListener("change", change);
        toppings.addEventListener("change", change);
        anmerkungen.addEventListener("change", change);
        versandarten.addEventListener("change", change);
    }
    /* Bestellungs-FieldSet */
    function createFieldSetBestellung() {
        let fieldSetBestellung = document.getElementById("Bestellung");
        let arten = document.getElementById("Art");
        let sorten = document.getElementById("Sorten");
        let kugelgrößen = document.getElementById("Kugelgrößen");
        let toppings = document.getElementById("Topping");
        let anmerkungen = document.getElementById("Anmerkungen");
        let fieldSetÜbersicht = document.getElementById("Übersicht");
        /* Schleife für Art */
        for (let i = 0; i < art.length; i++) {
            let buttonLabel = document.createElement("label");
            let eisartenP = document.createElement("p");
            eisartenP.textContent = art[i];
            let eisartenInput = document.createElement("input");
            eisartenInput.type = "radio";
            eisartenInput.id = art[i];
            eisartenInput.value = "0";
            eisartenInput.name = "Art";
            buttonLabel.appendChild(eisartenP);
            buttonLabel.appendChild(eisartenInput);
            arten.appendChild(buttonLabel);
            artInputs.push(eisartenInput);
        }
        /* Schleife für Sorte */
        for (let i = 0; i < sorte.length; i++) {
            let eissortenP = document.createElement("p");
            eissortenP.textContent = sorte[i];
            let eissortenInput = document.createElement("input");
            eissortenInput.type = "number";
            eissortenInput.id = sorte[i];
            eissortenInput.max = "10";
            eissortenInput.min = "0";
            eissortenInput.value = "0";
            sorten.appendChild(eissortenP);
            sorten.appendChild(eissortenInput);
            sorteInputs.push(eissortenInput);
        }
        /* Schleife für Kugelgröße */
        for (let i = 0; i < kugelgröße.length; i++) {
            let buttonLabel = document.createElement("label");
            let eisgrößenP = document.createElement("p");
            eisgrößenP.textContent = kugelgröße[i];
            let eisgrößenInput = document.createElement("input");
            eisgrößenInput.type = "radio";
            eisgrößenInput.id = sorte[i];
            eisgrößenInput.value = "0";
            eisgrößenInput.name = "Kugelgröße";
            buttonLabel.appendChild(eisgrößenP);
            buttonLabel.appendChild(eisgrößenInput);
            kugelgrößen.appendChild(buttonLabel);
            kugelgrößeInputs.push(eisgrößenInput);
        }
        /* Schleife für Topping */
        for (let i = 0; i < topping.length; i++) {
            let toppingP = document.createElement("p");
            toppingP.textContent = topping[i];
            let toppingInput = document.createElement("input");
            toppingInput.type = "number";
            toppingInput.id = sorte[i];
            toppingInput.max = "2";
            toppingInput.min = "0";
            toppingInput.value = "0";
            toppings.appendChild(toppingP);
            toppings.appendChild(toppingInput);
            toppingInputs.push(toppingInput);
        }
        /* Text-Feld für Anmerkungen und Sonderwünsche    */
        let anmerkungenFeld = document.createElement("textarea");
        let umbruch = document.createElement("br");
        anmerkungenFeld.type = "text";
        anmerkungenFeld.cols = 30;
        anmerkungenFeld.rows = 4;
        anmerkungenFeld.placeholder = "Beschreiben Sie hier Ihre Sonderwünsche....";
        anmerkungenFeld.id = "Anmerkungen";
        anmerkungen.appendChild(umbruch);
        anmerkungen.appendChild(anmerkungenFeld);
    }
    /* Übersichts-FieldSet */
    function createFieldSetÜbersicht() {
        let kontaktdaten = document.getElementById("Kontaktdaten");
        let versandarten = document.getElementById("Versandart");
        /* Schleife für Kontaktdaten */
        for (let i = 0; i < kontaktdatenArray.length; i++) {
            let kontaktdatenP = document.createElement("p");
            kontaktdatenP.textContent = kontaktdatenArray[i];
            let kontaktdatenInput = document.createElement("input");
            kontaktdatenInput.type = "text";
            kontaktdatenInput.id = kontaktdatenArray[i];
            kontaktdaten.appendChild(kontaktdatenP);
            kontaktdaten.appendChild(kontaktdatenInput);
            kontaktdatenInputs.push(kontaktdatenInput);
        }
        /* Schleife für Versandarten */
        for (let i = 0; i < versandart.length; i++) {
            let buttonLabel = document.createElement("label");
            let versandartP = document.createElement("p");
            versandartP.textContent = versandart[i];
            let versandartInput = document.createElement("input");
            versandartInput.type = "radio";
            versandartInput.id = versandart[i];
            versandartInput.value = "0";
            versandartInput.name = "Versandart";
            buttonLabel.appendChild(versandartP);
            buttonLabel.appendChild(versandartInput);
            versandarten.appendChild(buttonLabel);
            versandartInputs.push(versandartInput);
        }
    }
    /* Change Funktion bei Änderung der Werte     */
    function change() {
        let bestellübersichtP = document.getElementById("BestellübersichtP");
        bestellübersichtP.innerText = "";
        for (let i = 0; i < artInputs.length; i++) {
            if (artInputs[i].checked) {
                bestellübersichtP.innerText += art[i] + " " + "\n";
            }
        }
        for (let i = 0; i < sorteInputs.length; i++) {
            if (parseInt(sorteInputs[i].value) > 0) {
                bestellübersichtP.innerText += sorte[i] + " " + ": " + (parseInt(sorteInputs[i].value) * 1) + "\n";
            }
        }
        for (let i = 0; i < kugelgrößeInputs.length; i++) {
            if (kugelgrößeInputs[i].checked) {
                bestellübersichtP.innerText += kugelgröße[i] + " " + "\n";
            }
        }
        for (let i = 0; i < toppingInputs.length; i++) {
            if (parseInt(toppingInputs[i].value) > 0) {
                bestellübersichtP.innerText += topping[i] + " " + "\n";
            }
        }
        if (parseInt(anmerkungenInput.value) > 0) {
            bestellübersichtP.innerText += "Anmerkung: " + ": " + "<br>" + parseInt(anmerkungenInput.value) + "\n";
        }
        zeigeSumme();
        console.log("Veränderung erkannt und bearbeitet");
    }
    /*Gesamtsumme anzeigen */
    function zeigeSumme() {
        let summeP = document.getElementById("Summe");
        let summe = 0;
        for (let i = 0; i < artInputs.length; i++) {
            summe += (parseInt(artInputs[i].value) * 0.5);
        }
        for (let i = 0; i < sorteInputs.length; i++) {
            summe += (parseInt(sorteInputs[i].value) * 1);
        }
        for (let i = 0; i < toppingInputs.length; i++) {
            summe += (parseInt(toppingInputs[i].value) * 0.5);
        }
        if (kugelgrößeInputs[1].checked)
            summe += 1;
        if (versandartInputs[1].checked) {
            summe += 2;
        }
        summeP.innerText = summe.toString() + "€";
        console.log(summe);
    }
    /* Prüfung der Input-Werte: Überprüfung von Postleitzahl, Telefonnummer, Name + sind Art, Versandart, Kugelgröße ausgewählt? */
    function bestellungPrüfen() {
        let name = document.getElementById("Name");
        let vorname = document.getElementById("Vorname");
        let straße = document.getElementById("Straße");
        let hausnummer = document.getElementById("Hausnummer");
        let postleitzahl = document.getElementById("Postleitzahl");
        let ort = document.getElementById("Ort");
        let telefonnummer = document.getElementById("Telefonnummer");
        if (hausnummer.value.length > 3) {
            alert("Bitte überprüfen Sie die Eingabe Ihrer Hausnummer.");
        }
        if (postleitzahl.value.length != 5) {
            alert("Bitte überprüfen Sie die Eingabe Ihrer Postleitzahl.");
        }
        if (isNaN(Number(telefonnummer.value)) == true) {
            alert("Bitte überprüfen Sie die Eingabe Ihrer Telefonnummer.");
        }
        else {
            alert("Danke für Ihre Bestellung!");
        }
    }
})(Aufgabe9 || (Aufgabe9 = {}));
//# sourceMappingURL=FormElements2.js.map
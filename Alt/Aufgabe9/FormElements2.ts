namespace Aufgabe9 {

    window.addEventListener("load", init);


    let sorte: string[] = ["Vanille",
        "Schoko",
        "Erdbeer",
        "Zitrone",
        "Nuss",
        "Sahnekirsch"];


    let variante: string[] = ["Waffel",
        "Becher"];



    let extra: string[] = ["Sahne",
        "Buntestreusel",
        "Schokostreusel",
        "Krokantstreusel",
        "Schokosoße",
        "Erdbeersoße"];


    let lieferOptionen: string[] = ["Express",
        "Premium",
        "Standard"];


    let kontaktDaten: string[] = ["Name",
        "Nachname",
        "Straße + Hausnr.",
        "PLZ + Ort",
        "Telefonnummer",
        "E-mail"];

    let sortenInputs: HTMLInputElement[] = [];
    let variantenInputs: HTMLInputElement[] = [];
    let extrasInputs: HTMLInputElement[] = [];
    let kontaktDatenInputs: HTMLInputElement[] = [];
    let lieferOptionInputs: HTMLInputElement[] = [];




    let fieldSetBestellung: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Bestellung");
    let fieldSetVarianten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Varianten");
    let fieldSetSorten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Sorten");
    let fieldSetExtras: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Extras");
    let fieldSetÜbersicht: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Uebersicht");
    let kontaktdaten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Kontakt");
    let lieferoptionen: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("lieferoptionen");
    let sendeButton: HTMLElement = document.getElementById("BestellButton");

    let anmerkungenInput: HTMLInputElement = <HTMLInputElement>document.getElementById("Anmerkungen");



    function init(): void {
        console.log("Init");
        createFieldSetBestellung();
        createFieldSetÜbersicht();


        sendeButton.addEventListener("click", bestellungPrüfen);
        fieldSetSorten.addEventListener("change", change);
        fieldSetVarianten.addEventListener("change", change);
        fieldSetExtras.addEventListener("change", change);
        lieferoptionen.addEventListener("change", change);




    }

    /* Bestellungs-FieldSet */
    function createFieldSetBestellung(): void {


        let fieldSetBestellung: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Bestellung");
        let fieldSetVarianten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Varianten");
        let fieldSetSorten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Sorten");
        let fieldSetExtras: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Extras");
        let fieldSetÜbersicht: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Uebersicht");
        let kontaktdaten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Kontakt");
        let lieferoptionen: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("lieferoptionen");
        let sendeButton: HTMLElement = document.getElementById("BestellButton");
        
        
        /* Schleife für Art */


        for (let i: number = 0; i < sorte.length; i++) {

            let buttonLabel: HTMLLabelElement = document.createElement("label");

            let eisartenP: HTMLParagraphElement = document.createElement("p");
            eisartenP.textContent = sorte[i];

            let eisartenInput: HTMLInputElement = document.createElement("input");
            eisartenInput.type = "radio";
            eisartenInput.id = sorte[i];

            eisartenInput.value = "0";
            eisartenInput.name = "Art";

            buttonLabel.appendChild(eisartenP);
            buttonLabel.appendChild(eisartenInput);

            arten.appendChild(buttonLabel);

            sortenInputs.push(eisartenInput);
        }

        /* Schleife für Sorte */


        for (let i: number = 0; i < variante.length; i++) {


            let eissortenP: HTMLParagraphElement = document.createElement("p");
            eissortenP.textContent = variante[i];

            let eissortenInput: HTMLInputElement = document.createElement("input");
            eissortenInput.type = "number";
            eissortenInput.id = variante[i];
            eissortenInput.max = "10";
            eissortenInput.min = "0";
            eissortenInput.value = "0";

            fieldSetVarianten.appendChild(eissortenP);
            fieldSetVarianten(eissortenInput);
            variantenInputs.push(eissortenInput);

        }


        /* Schleife für Extras */

        for (let i: number = 0; i < extra.length; i++) {


            let toppingP: HTMLParagraphElement = document.createElement("p");
            toppingP.textContent = extra[i];

            let toppingInput: HTMLInputElement = document.createElement("input");
            toppingInput.type = "number";
            toppingInput.id = extra[i];
            toppingInput.max = "2";
            toppingInput.min = "0";
            toppingInput.value = "0";

            toppings.appendChild(toppingP);
            toppings.appendChild(toppingInput);

            extrasInputs.push(toppingInput);
        }



        /* Übersichts-FieldSet */

        function createFieldSetÜbersicht(): void {


            let kontaktdaten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Kontaktdaten");
            let versandarten: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("Versandart");

            /* Schleife für Kontaktdaten */
            for (let i: number = 0; i < kontaktDaten.length; i++) {


                let kontaktdatenP: HTMLParagraphElement = document.createElement("p");
                kontaktdatenP.textContent = kontaktDaten[i];

                let kontaktdatenInput: HTMLInputElement = document.createElement("input");
                kontaktdatenInput.type = "text";
                kontaktdatenInput.id = kontaktDaten[i];


                kontaktdaten.appendChild(kontaktdatenP);
                kontaktdaten.appendChild(kontaktdatenInput);

                kontaktdatenInputs.push(kontaktdatenInput);
            }

            /* Schleife für Versandarten */

            for (let i: number = 0; i < lieferOption.length; i++) {

                let buttonLabel: HTMLLabelElement = document.createElement("label");

                let versandartP: HTMLParagraphElement = document.createElement("p");
                versandartP.textContent = lieferOption[i];

                let versandartInput: HTMLInputElement = document.createElement("input");
                versandartInput.type = "radio";
                versandartInput.id = versandart[i];
                versandartInput.value = "0";
                versandartInput.name = "Lieferoptionen";

                buttonLabel.appendChild(versandartP);
                buttonLabel.appendChild(versandartInput);

                versandarten.appendChild(buttonLabel);

                lieferOptionenInputs.push(versandartInput);
            }


        }



        /* Change Funktion bei Änderung der Werte     */
        function change(): void {


            let bestellübersichtP: HTMLElement = document.getElementById("BestellübersichtP");
            bestellübersichtP.innerText = "";

            for (let i: number = 0; i < artInputs.length; i++) {
                if (artInputs[i].checked) {
                    bestellübersichtP.innerText += art[i] + " " + "\n";
                }

            }

            for (let i: number = 0; i < sorteInputs.length; i++) {
                if (parseInt(sorteInputs[i].value) > 0) {
                    bestellübersichtP.innerText += sorte[i] + " " + ": " + (parseInt(sorteInputs[i].value) * 1) + "\n";
                }
            }
            for (let i: number = 0; i < kugelgrößeInputs.length; i++) {
                if (kugelgrößeInputs[i].checked) {
                    bestellübersichtP.innerText += kugelgröße[i] + " " + "\n";
                }
            }
            for (let i: number = 0; i < toppingInputs.length; i++) {
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

        function zeigeSumme(): void {

            let summeP: HTMLElement = document.getElementById("Summe");

            let summe: number = 0;

            for (let i: number = 0; i < artInputs.length; i++) {
                summe += (parseInt(artInputs[i].value) * 0.5);
            }
            for (let i: number = 0; i < sorteInputs.length; i++) {
                summe += (parseInt(sorteInputs[i].value) * 1);
            }

            for (let i: number = 0; i < toppingInputs.length; i++) {
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

        function bestellungPrüfen(): void {

            let name: HTMLInputElement = <HTMLInputElement>document.getElementById("Name");
            let vorname: HTMLInputElement = <HTMLInputElement>document.getElementById("Vorname");
            let straße: HTMLInputElement = <HTMLInputElement>document.getElementById("Straße");
            let hausnummer: HTMLInputElement = <HTMLInputElement>document.getElementById("Hausnummer");
            let postleitzahl: HTMLInputElement = <HTMLInputElement>document.getElementById("Postleitzahl");
            let ort: HTMLInputElement = <HTMLInputElement>document.getElementById("Ort");
            let telefonnummer: HTMLInputElement = <HTMLInputElement>document.getElementById("Telefonnummer");


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








}

    }
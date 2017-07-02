/*
Aufgabe: Aufgabe 11
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 02.07.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. */

namespace DatabaseClient {
    window.addEventListener("load", init);

    function init(_event: Event): void {
        console.log("Init");
        let insertButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("insert");
        let refreshButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("refresh");
        let searchButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("searchbutton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        
        searchButton.addEventListener("click", searchMatrikel); 
    }

    }
   
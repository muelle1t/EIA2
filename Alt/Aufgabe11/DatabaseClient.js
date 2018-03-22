/*
Aufgabe: Aufgabe 11
Name: Annkathrin Müller
Matrikelnr.: 254868
Datum: 02.07.2017

Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und auch nicht diktiert. */
var DatabaseClient;
(function (DatabaseClient) {
    window.addEventListener("load", init);
    function init(_event) {
        console.log("Init");
        let insertButton = document.getElementById("insert");
        let refreshButton = document.getElementById("refresh");
        let searchButton = document.getElementById("searchbutton");
        insertButton.addEventListener("click", insert);
        refreshButton.addEventListener("click", refresh);
        searchButton.addEventListener("click", search); //Button klickbar machen
    }
    // wenn der Button search geklickt wurde, wird der Name und die Matrikelnummer unter query gespeichert und ein Request versendet
    function search(_event) {
        let inputName = document.getElementById("searchname");
        let inputMatrikel = document.getElementById("searchmatrikel");
        let query = "command=search";
        query += "&nameSearch=" + inputName.value;
        query += "&matrikelSearch=" + inputMatrikel.value;
        console.log(query);
        sendRequest(query, handleSearchResponse);
    }
    // wenn eine Response gekommen ist, wie sie verarbeitet/wie die Ausgabe aussehen soll
    function handleSearchResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function insert(_event) {
        let inputs = document.getElementsByTagName("input");
        let query = "command=insert";
        query += "&name=" + inputs[0].value;
        query += "&firstname=" + inputs[1].value;
        query += "&matrikel=" + inputs[2].value;
        console.log(query);
        sendRequest(query, handleInsertResponse);
    }
    function refresh(_event) {
        let query = "command=find";
        sendRequest(query, handleFindResponse);
    }
    function sendRequest(_query, _callback) {
        let xhr = new XMLHttpRequest();
        //        xhr.open("GET", "http://localhost:8100?" + _query, true);
        xhr.open("GET", "https://senddata11.herokuapp.com/" + _query, true);
        xhr.addEventListener("readystatechange", _callback);
        xhr.send();
    }
    function handleInsertResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.response);
        }
    }
    function handleFindResponse(_event) {
        let xhr = _event.target;
        if (xhr.readyState == XMLHttpRequest.DONE) {
            let output = document.getElementsByTagName("textarea")[0];
            output.value = xhr.response;
            //            let responseAsJson: JSON = JSON.parse(xhr.response);
            console.log(xhr.response);
        }
    }
})(DatabaseClient || (DatabaseClient = {}));
//# sourceMappingURL=DatabaseClient.js.map
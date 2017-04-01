document.addEventListener("DOMContentLoaded", function() {
    let n: number = 64;
    let line: number = 1;
    let size: number = 120;
    let color: string;
    
    for (let i: number = 0; i < n; i++) {
        if (line % 2 != 0) {
            if ( i % 2 == 0) {
                color = "black" ; }
            else {
                color = "white" ; } 
        }
        else {
            if ( i % 2 == 0) {
                color = "white"; }
            else {
                color = "black"; } 
        }
        let x: number = ( i % 8 ) * size;
        let y: number = ( line - 1 ) * size;
        placeDiv ( x, y, color, size, i) ;
        if (x == (7 * size)) {
            line++; }
    }
    countRice() ;
    function countRice() {
        let square: any = document.getElementsByClassName("chesssquare");
        let rice: any;
        for (var i: number = 0; i < square.length; i++) {
            rice = Math.pow(2, i);
            if (i > 3) {
                rice = rice.toExponential(5); }
            square[i].textContent = rice.toString(); }}
    function placeDiv(_x: number, _y: number, _color: string, _size: number, _rice: number) {
        let div: any = document.createElement("div");
        document.body.appendChild(div);
        let s: any = div.style;
        s.position = "absolute";
        s.display = "inline-block";
        div.className += _color;
        div.className += "square";
        s.width = _size + "px";
        s.height = _size + "px";
        s.left = _x + "px";
        s.top = _y + "px";
        }
    });
    
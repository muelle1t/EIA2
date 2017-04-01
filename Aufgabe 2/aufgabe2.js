document.addEventListener("DOMContentLoaded", function () {
    let n = 64;
    let line = 1;
    let size = 120;
    let color;
    for (let i = 0; i < n; i++) {
        if (line % 2 != 0) {
            if (i % 2 == 0) {
                color = "black";
            }
            else {
                color = "white";
            }
        }
        else {
            if (i % 2 == 0) {
                color = "white";
            }
            else {
                color = "black";
            }
        }
        let x = (i % 8) * size;
        let y = (line - 1) * size;
        placeDiv(x, y, color, size, i);
        if (x == (7 * size)) {
            line++;
        }
    }
    countRice();
    function countRice() {
        let square = document.getElementsByClassName("square");
        let rice;
        for (var i = 0; i < square.length; i++) {
            rice = Math.pow(2, i);
            if (i > 3) {
                rice = rice.toExponential(5);
            }
            square[i].textContent = rice.toString();
        }
    }
    function placeDiv(_x, _y, _color, _size, _rice) {
        let div = document.createElement("div");
        document.body.appendChild(div);
        let s = div.style;
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
//# sourceMappingURL=aufgabe2.js.map
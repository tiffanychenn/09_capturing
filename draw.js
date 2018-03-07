var clear = document.getElementById("clear");
var svg = document.getElementById("svg");
var x0, y0;

var remove = function(e){
    svg.removeChild(this);
    e.stopPropagation();
}

var change = function(e){
    //console.log(this);
    this.setAttribute("fill", "#88D498");
    e.stopPropagation();
    this.addEventListener('click', remove);
}

var draw = function(e){
    //console.log(this);
    var rect = svg.getBoundingClientRect();
    var x = e.offsetX;
    var y = e.offsetY;
    x0 = x;
    y0 = y;
    var c1 = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c1.setAttribute("cx", x);
    c1.setAttribute("cy", y);
    c1.setAttribute("r", 10);
    c1.setAttribute("stroke", "#FFFFFF");
    c1.setAttribute("fill", "lightsteelblue");
    svg.appendChild(c1);
    c1.addEventListener('click', change);
}

var erase = function(){
    while (svg.firstChild) {
        svg.removeChild(svg.firstChild);
    }
    started = false;
    console.log("cleared");
}

clear.addEventListener('click', erase);
svg.addEventListener('click', draw);
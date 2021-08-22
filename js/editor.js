var c = 0;

const buttons = Array.from(document.getElementById("buttons").children);
const tabsGroup = Array.from(document.querySelectorAll("#grid-selector div label"));

function spawn (element) {
	const itemClass = element.getAttribute("item");
    document.getElementById("drawer").innerHTML += generateBlock(itemClass, c);
    var movingelement = document.getElementsByClassName(itemClass + c.toString())[0];
    movingelement.style.left = event.clientX - movingelement.offsetWidth / 2 + 'px';
    movingelement.style.top = event.clientY - movingelement.offsetHeight / 2 + 'px';

    movingelement.addEventListener("mousemove", move.bind(null, movingelement), false);
    movingelement.addEventListener("mouseup", function() {movingelement.outerHTML = movingelement.outerHTML}, false);
    c++;
}

function generateBlock(itemClass, c) {
	return "<input value='Button' type='button' class='" + itemClass + " " + itemClass + c.toString() + "' />";
}

function generateGrid(Width, c) {
    return "<div class='grid grid" + c.toString() + "'></div>";
}

function move (element) {
    element.style.position = "fixed";
    element.style.left = event.clientX - element.clientWidth / 2 + 'px';
    element.style.top = event.clientY - element.clientHeight / 2 + 'px';
}

function getResolutionById(Id) {
    var Height = 0;
    var Width = 0;
    var ColWidth = 0;
    var ColNum = 0;
    var Indent = 0;

    switch (Id) {
        case "ms320":
            Height = 480;
            Width = 320;
            ColWidth = 40;
            ColNum = 6;
            Indent = 20;
            break;
        case "ml375":
            Height = 640;
            Width = 360;
            ColWidth = 40;
            ColNum = 6;
            Indent = 24;
            break;
        case "tsv640":
            Height = 960;
            Width = 640;
            ColWidth = 56;
            ColNum = 8;
            Indent = 40;
            break;
        case "tv768":
            Height = 1024;
            Width = 768;
            ColWidth = 64;
            ColNum = 8;
            Indent = 72;
            break;
        case "th1024":
            Height = 768;
            Width = 1024;
            ColWidth = 64;
            ColNum = 12;
            Indent = 40;
            break;
        case "ds1440":
            Height = 900;
            Width = 1440;
            ColWidth = 88;
            ColNum = 12;
            Indent = 104;
            break;
        case "dm1512":
            Height = 945;
            Width = 1512;
            ColWidth = 88;
            ColNum = 12;
            Indent = 52;
            break;
        case "dl1920":
            Height = 1080;
            Width = 1920;
            ColWidth = 96;
            ColNum = 12;
            Indent = 208;
            break;
        default:
            Height = -1;
            Width = -1;
    }

    return [Height, Width, ColWidth, ColNum, Indent];
}

function changeResolution(Id) {
    var res = getResolutionById(Id);
    var currentGrid;
    var i = 0;
    const canvas = document.getElementById("content");
    canvas.innerHTML = "";

    if (Id[0] == "m") {
        canvas.style.height = res[0] + "px";
        canvas.style.width = res[1] + "px";
    } else {
        canvas.style.height = res[0] * 0.8 + "px";
        canvas.style.width = res[1] * 0.8 + "px";
    }

    for(i; i < res[3]; i++) {
        canvas.innerHTML += generateGrid(res[2], c);
        
        currentGrid = document.getElementsByClassName("grid" + c.toString())[0];
        if (Id[0] == "m") {
            currentGrid.style.width = res[2].toString() + "px";
            currentGrid.style.height = res[0].toString() + "px";
            currentGrid.style.left = (res[4] + res[2] * i + ((res[1] - 2*res[4])/res[3] - res[2])*i).toString() + "px";
        } else {
            currentGrid.style.width = res[2]*0.8.toString() + "px";
            currentGrid.style.height = res[0]*0.8.toString() + "px";
            currentGrid.style.left = (res[4] + res[2] * i + ((res[1] - 2*res[4])/res[3] - res[2])*i)*0.8.toString() + "px" ;
        }
        
        c++;
    }
    
}

buttons.forEach ((element, i, buttons) => {
	element.addEventListener("mousedown", spawn.bind(null, element));
});

tabsGroup.forEach ((element, i, tabs) => {
    element.addEventListener("click", changeResolution.bind(null, element.getAttribute("for")));
});

changeResolution("dl1920");
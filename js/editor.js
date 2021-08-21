var c = 0;

const buttons = Array.from(document.getElementById("buttons").children);
const tabsGroup = Array.from(document.querySelectorAll("#grid-selector div label"));

function spawn (element) {
	const itemClass = element.getAttribute("item");
    content.innerHTML += generateBlock(itemClass, c);
    var movingelement = document.getElementsByClassName(itemClass + c.toString())[0];
    movingelement.style.left = 540 + 'px';
    movingelement.style.top = event.clientY - 20 + 'px';

    movingelement.addEventListener("mousemove", move.bind(null, movingelement), false);
    movingelement.addEventListener("mouseup", function() {movingelement.outerHTML = movingelement.outerHTML}, false);
    c++;
}

function generateBlock(itemClass, c) {
	return "<input value='Button' type='button' class='" + itemClass + " " + itemClass + c.toString() + "' />";
}

function move (element) {
    element.style.position = "fixed";
    element.style.left = event.clientX - element.clientWidth / 2 + 'px';
    element.style.top = event.clientY - element.clientHeight / 2 + 'px';
}

function getResolutionById(Id) {
    var Height = 0;
    var Width = 0;

    switch (Id) {
        case "ms320":
            Height = 480;
            Width = 320;
            break;
        case "ml375":
            Height = 640;
            Width = 360;
            break;
        case "tsv640":
            Height = 960;
            Width = 640;
            break;
        case "tv768":
            Height = 1024;
            Width = 768;
            break;
        case "th1024":
            Height = 768;
            Width = 1024;
            break;
        case "ds1440":
            Height = 900;
            Width = 1440;
            break;
        case "dm1512":
            Height = 945;
            Width = 1512;
            break;
        case "dl1920":
            Height = 1080;
            Width = 1920;
            break;
        default:
            Height = -1;
            Width = -1;
    }

    return [Height, Width];
}

function changeResolution(Id) {
    res = getResolutionById(Id);
    const canvas = document.getElementById("content");

    if (Id[0] == "m") {
        canvas.style.height = res[0] + "px";
        canvas.style.width = res[1] + "px";
    } else {
        canvas.style.height = res[0] * 0.8 + "px";
        canvas.style.width = res[1] * 0.8 + "px";
    }
    
}

buttons.forEach ((element, i, buttons) => {
	element.addEventListener("mousedown", spawn.bind(null, element));
});

tabsGroup.forEach ((element, i, tabs) => {
    element.addEventListener("click", changeResolution.bind(null, element.getAttribute("for")));
});
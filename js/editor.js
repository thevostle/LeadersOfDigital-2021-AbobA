var c = 0;

const buttons = Array.from(document.getElementById("buttons").children);
const canvas = document.getElementById("cell");

function spawn (element) {
	const itemClass = element.getAttribute("item");
    cell.innerHTML += generateBlock(itemClass, c);
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

buttons.forEach ((element, i, buttons) => {
	element.addEventListener("mousedown", spawn.bind(null, element));
});
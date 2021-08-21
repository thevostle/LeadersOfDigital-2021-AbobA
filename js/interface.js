function movebg() {
	document.getElementById("cell").style.backgroundSize =
		ranger.value.toString() + "px " + ranger.value.toString() + "px";
}

var ranger = document.getElementById("changer");
ranger.addEventListener("input", movebg, false);
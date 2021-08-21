let generated = ""; // html-код макета
let elements = [];

element = {
	type: "",
	coords: [],
	size: 0,
	settings: [],
};

// добавляет в строку generated данные об одном элементе
function addElementToText(element) {
	generated = generated + "<" + element["type"] + ">";
	// добавляем атрибуты
	// for (i in element.settings) generated += "${i.name}=\'${i.data}\'"
	generated = generated + "</" + element["type"] + ">";
}

// генерирует полный html-код макета
function generateHtml() {
	for (i of elements) addElementToText(i);
}

function movebg() {
	document.getElementById("cell").style.backgroundSize =
		ranger.value.toString() + "px " + ranger.value.toString() + "px";
}

var ranger = document.getElementById("changer");
ranger.addEventListener("input", movebg, false);

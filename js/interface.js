const elementsPanels = Array.from(document.getElementsByClassName("panel"));
const elementsTypes = document.querySelectorAll("#elements li");
const panelProperties = document.getElementById("props");

function movebg () {
	document.getElementById("cell").style.backgroundSize =
		ranger.value.toString() + "px " + ranger.value.toString() + "px";
}

function Show (element) {
	element.style.display = "block";
}

function Hide (element) {
	element.style.display = "none";
}

function switchDisplay (element) {
	if (element.style.display == "none" || element.style.display == "") {
		Show(element);
	} else {
		Hide(element);
	}
}

function switchBgColor (element, ActiveColor, InactiveColor) {
	if (element.style.backgroundColor == ActiveColor) {
		element.style.backgroundColor == InactiveColor;
	}
}

function setBgColor (element, color) {
	element.style.backgroundColor = color;
}

function showPanel (panels, currentElement) {
	isVisible = currentElement.nextElementSibling.style.display == "block";

	panels.forEach(element => {
		setBgColor(element, "rgba(232, 239, 246, 0)");
		Hide(element.nextElementSibling);
	});

	Show(currentElement.nextElementSibling);
	setBgColor(currentElement, "rgb(232, 239, 246)");

	if (isVisible) {
		Hide(currentElement.nextElementSibling);
		setBgColor(currentElement, "rgba(232, 239, 246, 0)");
	}
}



elementsPanels.forEach ((element, i, panels) => {
	element.addEventListener("click", showPanel.bind(null, panels, element));
});

// активация панельки свойств элементов (пока из левой панели, а не конкретных элементов)
elementsTypes.forEach (element => {
	element.addEventListener("click", switchDisplay.bind(null, panelProperties), true);
});

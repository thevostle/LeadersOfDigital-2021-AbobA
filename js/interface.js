const elementsPanels = Array.from(document.getElementsByClassName("panel"));
const elementsTypes = document.querySelectorAll("#elements > li");
const panelProperties = document.getElementById("props");
const tabsSelector = Array.from(document.getElementById("device-selector").getElementsByTagName("img"));

//const tabsGroup = Array.from(document.querySelectorAll("#grid-selector div label"));
//Уже определено в editor


function Show (element, prop="block") {
	element.style.display = prop;
}

function Hide (element) {
	element.style.display = "none";
}

function togglePanel (panels, currentElement) {
	const panel = currentElement.nextElementSibling;
	isVisible = panel.style.display == "block";

	panels.forEach(element => {
		element.classList.remove("active");
		Hide(element.nextElementSibling);
	});

	Show(panel);
	currentElement.classList.add("active");

	if (isVisible) {
		Hide(panel);
		currentElement.classList.remove("active");
	}
}

function toggleTab(tabs, currentElement) {
	const tab = document.getElementById(currentElement.getAttribute("alt"));
	currentElement.classList.add("active");
	isVisible = tab.style.display == "block";

	tabs.forEach(element => {
		element.classList.remove("active");
		Hide(document.getElementById(element.getAttribute("alt")));
	});

	Show(tab, "flex");
	currentElement.classList.add("active");

	if (isVisible) {
		Hide(tab);
		currentElement.classList.remove("active");
	}
}

function showType (type, element) {
	if (element.children[0].style.display == "block") {
		element.classList.remove("clicked");
		Hide(element.children[0]);
		element.style.filter = "drop-shadow(0px 2px 40px rgba(0, 0, 0, 0))";

	} else {
		element.classList.add("clicked");
		Show(element.children[0]);
		element.style.filter = "drop-shadow(0px 2px 40px rgba(0, 0, 0, 0.25))";
	}
}

function toggleResolution(tabs, currentElement) {
	isActive = currentElement.classList[0] == "active";

	tabs.forEach(element => {
		element.classList.remove("active");
	});

	currentElement.classList.add("active");

	if (isActive) {
		currentElement.classList.remove("active");
	}
}


elementsPanels.forEach ((element, i, panels) => {
	element.addEventListener("click", togglePanel.bind(null, panels, element));
});

elementsTypes.forEach ((element, i, type) => {
	element.addEventListener("mouseup", showType.bind(null, type, element));
});

tabsSelector.forEach ((element, i, tabs) => {
	element.addEventListener("click", toggleTab.bind(null, tabs, element));
});

tabsGroup.forEach ((element, i, tabs) => {
	element.addEventListener("click", toggleResolution.bind(null, tabs, element));
});
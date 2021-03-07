var button = document.getElementById("enter");
var deleteButton = document.getElementById("btn-del");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var div = document.createElement("div")
	div.className="wrapper"
	var li = document.createElement("li");
	var delButton = document.createElement("button");
	delButton.id="btn-del";
	delButton.classList.add("delClass");
	delButton.innerHTML='Del';
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(div);
	div.appendChild(li);
	div.appendChild(delButton);
	input.value = "";
}

function deleteListElement(element) {
	if (element.target.className === "delClass"){
		console.log(element.target)
		element.target.parentElement.remove();
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(task) {
	if (task.target.tagName === "LI"){
		task.target.classList.toggle("done");
	}
}

ul.addEventListener("click", doneTask);
ul.addEventListener("click", deleteListElement);
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
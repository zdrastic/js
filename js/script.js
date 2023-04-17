let burger = document.getElementById("dropdown__button");
let myBurger = burger[0];
let dropDownButton = document.querySelector("#dropdown__button");
let dropDownList = document.querySelector("#dropdown__list");

dropDownButton.addEventListener("click", ()=> {
	dropDownList.classList.toggle("activeDropDown");
})

/*myBurger.addEventListener("click", () => {
	let popUp = document.getElementById("dropdown__list")
	openPopUp(popUp);
}, false);

function openPopUp(p) {
	p.classList.toggle("activeDropDown");
}*/

/*
document.onclick = function(e) {
	let popUp = document.getElementById("dropdown__list");
	if (e.target == myBurger) {
		popUp.classList.toggle("activeDropDown");
		console.log(popUp);
		console.log(typeof(popUp));
	} else {
		popUp.classList.remove("activeDropDown");
		console.log(popUp);
		console.log(typeof(popUp));
	}
}
*/
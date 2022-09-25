const navList= document.getElementById('navbar__list');
const sections= Array.from(document.querySelectorAll("section"));

function createListItem()  {
	for (section of sections)  {
		listItem= document.createElement("li");
		listItem.innerHTML = <li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>;
		navList.appendChild(listItem);
	}
}

createListItem();

window.onscroll= function()  {
	document.querySelectorAll("section").forEach(function (active)
	{ if (
		active.getBoundingClientRect().top>= -400 &&
		active.getBoundingClientRect().top<= 150
		){
		active.classList.add("your-active-class");
	}
	 else if {
	 	active.classList.remove("your-active-class");
	 }

	});
};

navList.addEventListener("click", (toSection)=> {
	toSection.preventDefault();
	if (toSection.target.dataset.nav)  {
		document.getElementById(`${toSection.target.dataset.nav}`)
		document.scrollIntoView({behavior: "smooth"});

		

	}
})


const navigation=document.getElementById('navbar-list');
const section=document.querySelectorAll('section');


const navMaker=(){
	let nav='';

	sections.forEach(section){
		const sectionId=section.id;


	};
	navigation.innerHTML=nav;
};


 navMaker();




function createListItems(){
for(section of sections)
	sectionValue=section.getAttribute('data-nav');
    menu.appendChild(listItem);
}



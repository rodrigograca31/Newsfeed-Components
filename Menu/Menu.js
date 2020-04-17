/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
	'Students',
	'Faculty',
	"What's New",
	'Tech Trends',
	'Music',
	'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>
  
*/


function createItem(items) {

	const menu = document.createElement('div');
	const ul = document.createElement('ul');

	// 2- Define HTML structure
	menu.append(ul);

	// 3- Add some class names
	menu.classList.add("menu");

	// 4- Add some content!
	items.forEach(element => {
		const li = document.createElement("li");
		li.innerText = element;
		ul.append(li)
	});

	// 5- Add functionality
	document.querySelector(".menu-button").addEventListener('click', event => {
		// if (!menu.classList.contains('menu--open')) {
		// 	menu.classList.add('menu--open');
		// 	TweenLite.to(menu, 0.5, { opacity: 1});
		// } else {
		// 	TweenLite.to(menu, 0.5, { opacity: 0, onComplete: () => menu.classList.remove('menu--open') });
		// }

		

		if (!menu.classList.contains('menu--open')) {
			menu.classList.add('menu--open'); 
			TweenLite.to(menu, 0.5, { left: 0 });
		} else {
			TweenLite.to(menu, 0.5, { left: "-350px", onComplete: () => menu.classList.remove('menu--open') });
		}
	});

	document.querySelector("*").addEventListener("click", event => {
		// click anywhere but not in the open button it closes the menu
		if (!event.target.classList.contains("menu-button")) {
			TweenLite.to(menu, 0.5, { left: "-350px", onComplete: () => menu.classList.remove('menu--open') });
		}
	});

	return menu;
}

const header = document.querySelector('.header');
header.append(createItem(menuItems));
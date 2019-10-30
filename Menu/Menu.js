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
		menu.classList.toggle('menu--open');
	});

	return menu;
}

const header = document.querySelector('.header');
header.append(createItem(menuItems));
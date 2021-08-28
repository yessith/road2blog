const menu = document.querySelector('#menu');
const dropdown = document.querySelector('#dropdown');
const line = document.querySelector('.headerBlog__dropdown__burger--line');
const link = document.querySelectorAll('.headerBlog__menu__list__items a');

/* SHOW MENU */
dropdown.addEventListener('click', () => {
	menu.classList.toggle('show');
	line.classList.toggle('active');
});

/* HIDDEN MENU */
link.forEach((n) =>
	n.addEventListener('click', () => {
		menu.classList.remove('show');
		line.classList.remove('active');
	})
);

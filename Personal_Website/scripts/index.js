var title_image = document.getElementById('title-image');
var intro_card = document.getElementById('intro');
var menu_icon = document.getElementById('menu-icon');
var menu = document.getElementById('menu');
var main_section = document.getElementById('main-section')
var footer_section = document.getElementById('footer-section');
function closeMenu(e) {
	menu_icon.classList.remove('ex');
	menu.classList.remove('slide-out')
}
function toggleMenu(e) {
	e.preventDefault();
	menu.classList.toggle('slide-out');
	menu_icon.classList.toggle('ex');
}
function handleScroll(e) {
	e.preventDefault();
	let y = window.scrollY;
	if (y < 1600) {
		title_image.style.top = `${(y*.80)}px`;

	}
	// footer_section.style.top = `${(y)}px`;
	// console.log(cur_top);
	// intro_card.style.top = `${-(window.scrollY*1.2)}px`;
}

window.addEventListener('load', (e) => {
	window.addEventListener('scroll', handleScroll);
	menu_icon.addEventListener('click', toggleMenu);
	main_section.addEventListener('click', closeMenu)
})
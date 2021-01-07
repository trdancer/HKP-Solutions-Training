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
window.addEventListener('load', (e) => {
	menu_icon.addEventListener('click', toggleMenu);
	main_section.addEventListener('click', closeMenu);
	footer_section.addEventListener('click', closeMenu);
})
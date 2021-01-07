var title_image = document.getElementById('title-image');
var intro_card = document.getElementById('intro');
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
})
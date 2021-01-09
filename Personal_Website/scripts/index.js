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
	if ( y < window.innerHeight) {
		console.log(`${1- (y/window.innerHeight)}`);
		intro_card.style.transform = `translateY(${y*1.3}px)`;
		intro_card.style.opacity = 1 - ((y*1.8)/window.innerHeight);
	}
}

window.addEventListener('load', (e) => {
	window.addEventListener('scroll', handleScroll);
})
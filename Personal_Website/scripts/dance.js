var title_image = document.getElementById('title-image');
var floating_cards = document.querySelectorAll('.floating-card');
var main_section = document.getElementById('main-section');
function scrollCards(e) {
	e.preventDefault();
	let y = window.scrollY;
	title_image.style.transform = `translateY(${(-y*0.0010)}px)`;
	if (y > 250) {
		floating_cards[0].style.transform = `translateY(${-1.9*y}px)`;
	}
	else {
		floating_cards[0].style.transform = `translateY(${-2*y}px)`;
	}
	floating_cards[1].style.transform = `translateY(${-3*y}px)`;
	// floating_cards.forEach((card) => {
	// 	card.style.transform = `translateY(${-0.002*(y-100)*(y-100)}px)`;

	// })
}
window.addEventListener('load', (e) => {
	main_section.style.height = `${title_image.offsetHeight}px`;
	window.addEventListener('scroll', scrollCards);
})
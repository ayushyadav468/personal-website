const navSlider = () => {
	const burger = document.querySelector('.burger');
	const navLinks = document.querySelector('.nav-links');
	const navLinks_li = document.querySelectorAll('.nav-links li');

	burger.addEventListener('click', () => {
		navLinks.classList.toggle('nav-active');

		navLinks_li.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${
					index / 7 + 0.5
				}s`;
			}
		});

		burger.classList.toggle('toggle');
	});
};

const app = () => {
	navSlider();
	const scroll = new SmoothScroll('nav a[href*="#"]', {
		speed: 1000,
	});
};

app();

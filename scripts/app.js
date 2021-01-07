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

	window.addEventListener('DOMContentLoaded', () => {
		// get the form elements defined in your form HTML above

		const form = document.querySelector('#contact-form');
		const button = document.querySelector('#submitBtn');

		// Success and Error functions for after the form is submitted

		const success = () => {
			form.reset();
			window.location.pathname = './formSubmitted.html';
			document.querySelector('.failed').style.display = 'none';
		};
		const error = () => {
			window.location.pathname = './formSubmitted.html';
			document.querySelector('.sucess').style.display = 'none';
			document.querySelector('.failed').style.display = 'block';
		};

		// handle the form submission event

		form.addEventListener('submit', function (ev) {
			ev.preventDefault();
			var data = new FormData(form);
			ajax(form.method, form.action, data, success, error);
		});
	});

	// helper function for sending an AJAX request

	function ajax(method, url, data, success, error) {
		var xhr = new XMLHttpRequest();
		xhr.open(method, url);
		xhr.setRequestHeader('Accept', 'application/json');
		xhr.onreadystatechange = function () {
			if (xhr.readyState !== XMLHttpRequest.DONE) return;
			if (xhr.status === 200) {
				success(xhr.response, xhr.responseType);
			} else {
				error(xhr.status, xhr.response, xhr.responseType);
			}
		};
		xhr.send(data);
	}
};

app();
// console.log(window.location.pathname);

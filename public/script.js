const app = () => {
	window.addEventListener('DOMContentLoaded', () => {
		// get the form elements defined in your form HTML above

		const form = document.querySelector('.contact-form');

		// Success and Error functions for after the form is submitted

		const success = () => {
			form.reset();
			window.location.pathname =
				window.location.pathname + 'formSubmitted.html';
			document.querySelector('.failed').style.display = 'none';
		};
		const error = () => {
			window.location.pathname =
				window.location.pathname + 'formSubmitted.html';
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

export const copyToClipboard = (text: string) => {
	/* Copy the text inside the text field */
	if (
		typeof window !== 'undefined' &&
		typeof window.navigator !== 'undefined' &&
		typeof window.navigator.clipboard !== 'undefined'
	) {
		window.navigator.clipboard.writeText(text).then(
			function () {
				console.log('Async: Copying to clipboard was successful! ' + text);
			},
			function (err) {
				console.error('Async: Could not copy text: ', err);
				try {
					var successful = document.execCommand(text);
					var msg = successful ? 'successful' : 'unsuccessful';
					console.log('Copying text command was ' + msg);
				} catch (err) {
					console.log('Oops, unable to copy');
				}
			}
		);
	} else {
		console.log('Browser does not support clipboard');
	}
};

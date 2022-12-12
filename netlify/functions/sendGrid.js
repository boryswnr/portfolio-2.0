async function handleSubmit(name, email, message) {
	const form = document.querySelector(form);

	const response = await fetch('https://api.sendgrid.com/v3/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
		},
		body: JSON.stringify({
			personalizations: [
				{
					to: [{ email: 'boryswnr@protonmail.com' }],
					subject: [{ subject: 'New contact form message' }]
				}
			],
			from: { email: 'boryswnr@protonmail.com' },
			content: [
				{
					type: 'text/plain',
					value: `Sender: ${name}, ${email}. Message: ${message}`
				}
			]
		})
	});
	return response;
}

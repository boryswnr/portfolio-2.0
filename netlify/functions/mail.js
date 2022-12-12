const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.handler = async function (event) {
	const { name, email, message } = JSON.parse(event.body);
	console.log(event);
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
};
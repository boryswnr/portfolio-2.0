exports.handler = async function (event) {
	const fetch = require('node-fetch');
	const sgMail = require('@sendgrid/mail');
	sgMail.setApiKey(process.env.SENDGRID_API_KEY);

	// const response = await fetch('https://api.sendgrid.com/v3/', {
	// 	method: 'POST',
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 		Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`
	// 	},
	// 	body: JSON.stringify({
	// 		personalizations: [
	// 			{
	// 				to: [{ email: 'boryswnr@protonmail.com' }],
	// 				subject: [{ subject: 'New contact form message' }]
	// 			}
	// 		],
	// 		from: { email: 'boryswnr@protonmail.com' },
	// 		content: [
	// 			{
	// 				type: 'text/plain',
	// 				value: `Sender: ${event.body.name}, ${event.body.email}. Message: ${event.body.message}`
	// 			}
	// 		]
	// 	})
	// });

	console.log('event.body:', event.body);
	console.log('event.body:', JSON.parse(event.body));
	data = JSON.parse(event.body);
	const msg = {
		to: 'boryswnr@protonmail.com',
		from: 'boryswnr@protonmail.com',
		subject: 'Contact form has been used',
		text: `A message was sent via your HTML from: ${data.name}, ${data.email}. Message: ${data.message}`,
		html: `A message was sent via your HTML from: <strong>${data.name}</strong>, <strong>${data.email}</strong>. Message: ${data.message}`
	};

	console.log('msg:', msg);

	sgMail
		.send(msg)
		.then((response) => {
			console.log(response[0].statusCode);
			console.log(response[0].headers);
			console.log(response);
		})
		.catch((error) => {
			console.error(error);
		});

	console.log('end function');
};

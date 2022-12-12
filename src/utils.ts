export function intersectionObserver() {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
				// } else {
				// 	entry.target.classList.remove('show');
			}
		});
	});

	const hiddenElements = document.querySelectorAll('.hide');
	hiddenElements.forEach((el) => el.classList.remove('show'));
	hiddenElements.forEach((el) => observer.observe(el));
}

export function angle(cx: number, cy: number, ex: number, ey: number) {
	const dy = ey - cy;
	const dx = ex - cx;
	const rad = Math.atan2(dy, dx);
	const deg = (rad * 180) / Math.PI;

	return deg;
}

export function clickOutside(node: Node) {
	const handleClick = (event: MouseEvent) => {
		if (!node.contains(event.target as Node)) {
			node.dispatchEvent(new CustomEvent('outclick'));
		}
	};

	document.addEventListener('click', handleClick, true);

	return {
		destroy() {
			document.removeEventListener('click', handleClick, true);
		}
	};
}

export function validateEmail(inputText: string) {
	const mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	if (inputText.match(mailformat)) {
		return false;
	}
	return true;
}

import sgMail from '@sendgrid/mail';
export function sendEmail(name: string, email: string, text: string) {
	sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);
	const msg = {
		to: 'boryswnr@protonmail.com', // Change to your recipient
		from: 'boryswnr@protonmail.com', // Change to your verified sender
		subject: 'Contact form has been used',
		text: `A message was sent via your HTML from: ${name}, ${email}. Message: ${text}`,
		html: `A message was sent via your HTML from: <strong>${name}</strong>, <strong>${email}</strong>. Message: ${text}`
	};
	sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent');
		})
		.catch((error: Error) => {
			console.error(error);
		});
}

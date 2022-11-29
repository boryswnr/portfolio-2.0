export function intersectionObserver() {
	const observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add('show');
			} else {
				entry.target.classList.remove('show');
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

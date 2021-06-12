document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');
document.querySelector('.logo svg .hidden').classList.add('logo-animate');

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});
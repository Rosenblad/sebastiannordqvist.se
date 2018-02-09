import anime from 'animejs';

export default () => {
	const body = document.querySelector('body');
	const bg = document.querySelector('header');
	const code = document.querySelector('.code');

	const codeHeight = parseInt(window.getComputedStyle(code).height)

	code.style.willChange = 'transform'

	document.addEventListener('scroll', function(e) {

		if( body.scrollTop < codeHeight ){
			requestAnimationFrame(() => {
				code.style.transform = `translateY(${body.scrollTop * 0.06}px)`
			})
		}

	})

	const projects = document.querySelectorAll('.project')

	for( var i = 0; i < projects.length; ++i ){

		projects[i].addEventListener('click', function(e) {
			console.log(e)
		})

	}

	anime({
		targets: [
			'.storage.type.function', 
			'.variable.function',
			'.variable.parameter',
			'.constant.numeric',
			'.keyword.operator',
			'.storage.type',
			'.keyword.control',
			'.string.quoted',
			'.red',
		],
		opacity: [.2, 1],
		duration: 100,
		delay: function(el, index, total) {
	    return anime.random(1, total) * 100
	  },
		easing: 'linear',
	});
}
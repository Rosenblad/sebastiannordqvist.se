const body = document.querySelector('body')
const bg = document.querySelector('header')
const code = document.querySelector('.code')

document.addEventListener('scroll', function(e) {

	const codeHeight = parseInt( window.getComputedStyle( code ).height )

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
})


// if( 'serviceWorker' in navigator ){
// navigator.serviceWorker
// 	.register('/sw.min.js')
// 	.then(function( registration ) {
// 		console.log('service worker registered with scope:', registration.scope )
// 	})
// 	.catch(err => {
// 		console.log( 'service worker registration failed:', err )
// 	})
// }
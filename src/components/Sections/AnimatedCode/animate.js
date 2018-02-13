import anime from 'animejs';

export default () => {
  console.log('running animate');
  
  const body = document.querySelector('body');
  const code = document.querySelector('.code');

  const codeHeight = parseInt(window.getComputedStyle(code).height, 10);

  code.style.willChange = 'transform';

  document.addEventListener('scroll', () => {
    if (body.scrollTop < codeHeight) {
      requestAnimationFrame(() => {
        code.style.transform = `translateY(${body.scrollTop * 0.06}px)`;
      });
    }
  });

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
    opacity: [0.2, 1],
    duration: 100,
    delay(el, index, total) {
      return anime.random(1, total) * 100;
    },
    easing: 'linear',
  });
};

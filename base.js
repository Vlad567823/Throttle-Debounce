const slider = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');

const resizeImage = _.debounce(() => {
  const scale = slider.value / 50; 
  image.style.transform = `scale(${scale})`;
}, 0); 

slider.addEventListener('input', resizeImage);

const box = document.getElementById('box')

const moveBox = _.debounce((event) => {
  const x = event.clientX - 20;
  const y = event.clientY - 20;
  box.style.transform = `translate(${x}px, ${y}px)`;
}, 0); 


document.addEventListener('mousemove', moveBox)
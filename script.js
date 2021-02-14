
let img = document.querySelector('img');

let button1 = document.querySelector('#button1');

currentImage = 1;

button1.addEventListener('click', () => {
    currentImage > 2 ? currentImage = 1 : currentImage++;
    console.log(currentImage);
    image_file = 'images/s' + (currentImage) + '.png';
    img.src = image_file;
})

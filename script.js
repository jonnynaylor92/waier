
let img = document.querySelector('img');

let button1 = document.querySelector('#button1');

const currentImage = 1;

button1.addEventListener('click', () => {
    image_file = "s" + (++currentImage) + ".png";
    img.src = image_file;
})
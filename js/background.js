const images = [
    "img_1.jpg",
    "img_2.jpg",
    "img_3.jpg",
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('img/${chosenImage}')`;
document.body.style.backgroundRepeat = 'no-repeat';
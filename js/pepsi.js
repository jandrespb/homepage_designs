
const pepsiBlue = document.querySelector('#sodaBlue');
const pepsiSilver = document.querySelector('#sodaSilver');
const pepsiBlack = document.querySelector('#sodaBlack');
const principalImagePepsi = document.getElementById('sodaImage');
const fontScreenHome = document.getElementById('homeContainer');

const changeColorScreenHome = (color) => {
    return fontScreenHome.style.backgroundColor = `#${color}`;
}

const changeImagePrincipal = (image) => {
    return principalImagePepsi.src = `images/pepsi/${image}.png`;
}

pepsiBlue.addEventListener('click', () => {
    changeColorScreenHome('0062be'); // blue
    changeImagePrincipal('pepsi001');
});

pepsiSilver.addEventListener('click', () => {
    changeColorScreenHome('e60c2c'); // red
    changeImagePrincipal('pepsi002');
});

pepsiBlack.addEventListener('click', () => {
    changeColorScreenHome('1e1e1e'); // black
    changeImagePrincipal('pepsi003');
});
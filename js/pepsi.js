
const pepsiBlue = document.querySelector('#sodaBlue');
const pepsiSilver = document.querySelector('#sodaSilver');
const pepsiBlack = document.querySelector('#sodaBlack');
const principalImagePepsi = document.getElementById('sodaImage');
const fontScreenHome = document.getElementById('homeContainer');

const changeColorScreenHomePepsi = (color) => {
    return fontScreenHome.style.backgroundColor = `#${color}`;
}

const changeImagePrincipalPepsi = (image) => {
    return principalImagePepsi.src = `images/pepsi/${image}.png`;
}

pepsiBlue.addEventListener('click', () => {
    changeColorScreenHomePepsi('0062be'); // blue
    changeImagePrincipalPepsi('pepsi001');
});

pepsiSilver.addEventListener('click', () => {
    changeColorScreenHomePepsi('e60c2c'); // red
    changeImagePrincipalPepsi('pepsi002');
});

pepsiBlack.addEventListener('click', () => {
    changeColorScreenHomePepsi('1e1e1e'); // black
    changeImagePrincipalPepsi('pepsi003');
});
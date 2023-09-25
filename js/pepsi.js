
const pepsi_blue = document.querySelector('#sodaBlue');
const pepsi_silver = document.querySelector('#sodaSilver');
const pepsi_black = document.querySelector('#sodaBlack');


pepsi_blue.addEventListener('click', () => {

    const imagen = document.getElementById('sodaImage');
    const background_home = document.getElementById('homeContainer');
    background_home.style.backgroundColor = '#0062be';
    imagen.src = 'images/pepsi/pepsi001.png';

});

pepsi_silver.addEventListener('click', () => {

    const imagen = document.getElementById('sodaImage');
    const background_home = document.getElementById('homeContainer');
    background_home.style.backgroundColor = '#e60c2c';
    imagen.src = 'images/pepsi/pepsi002.png';

});

pepsi_black.addEventListener('click', () => {

    const imagen = document.getElementById('sodaImage');
    const background_home = document.getElementById('homeContainer');
    background_home.style.backgroundColor = '#1e1e1e';
    imagen.src = 'images/pepsi/pepsi003.png';

});
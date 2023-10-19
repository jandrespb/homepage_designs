const coffeeLemon = document.querySelector('#coffeeGreen');
const coffeeGum = document.querySelector('#coffeePink');
const coffeeBerry = document.querySelector('#coffeeFuchsia');
const imagePrincipal = document.querySelector('#coffeePrincipal');
const articleTitleStarbuck = document.querySelector('#starbuckTitle');
const titleStarbuck = document.querySelector('#starbuckTitlePrincipal');
const buttonLearnMore = document.querySelector('#buttonLearnMore');
const backgroundCircle = document.querySelector('#fontCircle');
const backgroundPrincipal = document.querySelector('#fontStarbuckPrincipal');

// Methods that we can change on our page
const titleArticleCoffee = (colorArticleTitle, colorTitle) => {
    articleTitleStarbuck.style.color = `#${colorArticleTitle}`;
    titleStarbuck.style.color = `#${colorTitle}`;
}

const backgroundPage = (colorFont, colorCircle) => {
    backgroundPrincipal.style.backgroundColor = `#${colorFont}`;
    backgroundCircle.style.backgroundColor = `#${colorCircle}`;
}

const learnMoreButton = (colorFont, colorLetter) => {
    buttonLearnMore.style.backgroundColor = `#${colorFont}`;
    buttonLearnMore.style.color = `#${colorLetter}`
}

const changeImagePrincipal = (namePhoto) => {
    imagePrincipal.src = `images/starbucks/${namePhoto}.png`;
}

// Events button

coffeeLemon.addEventListener('click', () => {
    backgroundPage('DBDDDB', '017143');
    titleArticleCoffee('000','017143');
    learnMoreButton('2B6F4F','fff');
    changeImagePrincipal('img1');
});

coffeeGum.addEventListener('click', () => {
    
    backgroundPage('fff', 'DEADD8');
    titleArticleCoffee('636062','DEADD8');
    learnMoreButton('DEADD8','fff');
    changeImagePrincipal('img2');
});

coffeeBerry.addEventListener('click', () => {

    const colorBlue = '5CCBF5';
    const colorLightPink = 'F3E7F4';
    const colorGray = '706171';
    const colorWhite = 'fff';
    const image = 'img3';

    backgroundPage(colorLightPink, colorBlue);
    titleArticleCoffee(colorGray, colorBlue);
    learnMoreButton(colorBlue, colorWhite);
    changeImagePrincipal(image);
});
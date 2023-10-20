const coffeeLemon = document.querySelector('#coffeeGreen');
const coffeeGum = document.querySelector('#coffeePink');
const coffeeBerry = document.querySelector('#coffeeFuchsia');
const imagePrincipal = document.querySelector('#coffeePrincipal');
const articleTitleStarbuck = document.querySelector('#starbuckTitle');
const titleStarbuck = document.querySelector('#starbuckTitlePrincipal');
const buttonLearnMore = document.querySelector('#buttonLearnMore');
const backgroundCircle = document.querySelector('#fontCircle');
const backgroundPrincipal = document.querySelector('#fontStarbuckPrincipal');

let colorOne;   
let colorTwo;   
let colorThree;
let colorFour;
let imageBigSize;

// Methods that we can change on our page

const titleArticleCoffee = (colorArticleTitle, colorTitle) => {
    articleTitleStarbuck.style.color = `#${colorArticleTitle}`;
    titleStarbuck.style.color = `#${colorTitle}`;
}

const backgroundPageCoffee = (colorFont, colorCircle) => {
    backgroundPrincipal.style.backgroundColor = `#${colorFont}`;
    backgroundCircle.style.backgroundColor = `#${colorCircle}`;
}

const learnMoreButtonCoffee = (colorFont, colorLetter) => {
    buttonLearnMore.style.backgroundColor = `#${colorFont}`;
    buttonLearnMore.style.color = `#${colorLetter}`
}

const changeImagePrincipalCoffee = (namePhoto) => {
    imagePrincipal.src = `images/starbucks/${namePhoto}.png`;
}

// Events button

coffeeLemon.addEventListener('click', () => {

    colorOne = 'fff'; // white
    colorTwo = 'DBDDDB'; // silver clear
    colorThree = '017143'; // green
    colorFour = '000'; // black
    imageBigSize = 'img1';

    backgroundPageCoffee(colorTwo, colorThree);
    titleArticleCoffee(colorFour, colorThree);
    learnMoreButtonCoffee(colorThree, colorOne);
    changeImagePrincipalCoffee(imageBigSize);
   
});

coffeeGum.addEventListener('click', () => {

    colorOne = 'fff'; // white
    colorTwo = 'DEADD8'; // pink light
    colorThree = '636062'; // gray
    imageBigSize = 'img2';
    
    backgroundPageCoffee(colorOne, colorTwo);
    titleArticleCoffee(colorThree, colorTwo);
    learnMoreButtonCoffee(colorTwo, colorOne);
    changeImagePrincipalCoffee(imageBigSize);
});

coffeeBerry.addEventListener('click', () => {

    colorOne = '5CCBF5'; // Blue
    colorTwo = 'F3E7F4'; // pink light
    colorThree = '706171'; // purple dark
    colorFour = 'fff'; // white
    imageBigSize = 'img3';

    backgroundPageCoffee(colorTwo, colorOne);
    titleArticleCoffee(colorThree, colorOne);
    learnMoreButtonCoffee(colorOne, colorFour);
    changeImagePrincipalCoffee(imageBigSize);
});
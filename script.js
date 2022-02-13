const hamburger = document.querySelector('#hamburger');
const navToggleMenu = document.querySelector('#nav-toggle-menu');
let menuVisibility = false;

const checkVisibility = function () {
    if (menuVisibility === false) {
        navToggleMenu.style.visibility = 'visible';
        menuVisibility = true;
    } else if (menuVisibility === true) {
        navToggleMenu.style.visibility = 'hidden';
        menuVisibility = false;
    };
};


hamburger.addEventListener('click', checkVisibility);


const body = document.querySelector('body');
const colorButtonsArray = Array.from(document.querySelectorAll('#nav-toggle-menu li button'));
const writtenColorName = document.querySelector('#insertColorName');
console.log(colorButtonsArray);

const changeColor = function (e) {
    console.log(e);
    body.classList.remove('roze', 'geel', 'paars', 'blauw'); 
    body.classList.add(this.className);
    writtenColorName.innerHTML = this.innerHTML;
};

colorButtonsArray.forEach(function (colorButton) {
    colorButton.addEventListener('click', changeColor);
    colorButton.addEventListener('click', checkVisibility);
});


const changeColorByNumber = function(e) {
    console.log(e);
    body.classList.remove('roze', 'geel', 'paars', 'blauw');
    body.classList.add(e.className); 
    writtenColorName.innerHTML = e.innerHTML;
};

const colorByNumber = function(e) {
    if (e.which === 49) {
        button = colorButtonsArray[0];
        changeColorByNumber(button);
    } else if (e.which === 50) {
        button = colorButtonsArray[1];
        changeColorByNumber(button);
    } else if (e.which === 51) {
        button = colorButtonsArray[2];
        changeColorByNumber(button);
    } else if (e.which === 52) {
        button = colorButtonsArray[3];
        changeColorByNumber(button);
    } else if (e.which === 53) {
        button = colorButtonsArray[4];
        changeColorByNumber(button);
    };  
};

document.addEventListener('keypress', colorByNumber);


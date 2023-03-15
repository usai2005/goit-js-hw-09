const body = document.querySelector('body');
const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');
let timerId = null;

startBtn.addEventListener('click', onStartBtnCLick);
stopBtn.addEventListener('click', onStopBtnClick);

stopBtn.disabled = true;
//actions by clicking startBtn

function onStartBtnCLick() {
    
    startBtn.disabled = true;
    stopBtn.disabled = false;
        
    body.style.backgroundColor = getRandomHexColor();

    //setting interval of color changing

    timerId = setInterval(() => {

        body.style.backgroundColor = getRandomHexColor();

    }, 1000);

    
};

//actions by clicking stopBtn

function onStopBtnClick() {

    clearInterval(timerId);

    stopBtn.disabled = true;

    startBtn.disabled = false;
};

// gettig random HEX colors

function getRandomHexColor() {

  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
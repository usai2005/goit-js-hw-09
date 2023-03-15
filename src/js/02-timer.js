import { Notify } from 'notiflix/build/notiflix-notify-aio';
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
require("flatpickr/dist/themes/material_orange.css");

const button = document.querySelector('button');
const timerDays = document.querySelector('[data-days]');
const timerHours = document.querySelector('[data-hours]');
const timerMinutes = document.querySelector('[data-minutes]');
const timerSeconds = document.querySelector('[data-seconds]');
let chosenDate = 0;

button.disabled = true;
timerId = null;

button.addEventListener('click', onStartButtonClick)

const fp = flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {

//flatpickr onClose conditions
        
        if (selectedDates[0].getTime() > Date.now()) {

            button.disabled = false;
            chosenDate = selectedDates[0].getTime();
        
        } else {

            Notify.failure('Please choose a date in the future');

        };
    },
    
});

//starting the timer, setting an interval, making timer markup

function onStartButtonClick() {    
    
    timerId = setInterval(() => {  
        
        let restOfTime = (chosenDate - Date.now());

        if (restOfTime >= 0) {
        
        const time = convertMs(restOfTime);

        addLeadingZero(time)

        timerDays.textContent = addLeadingZero(time.days);
        timerHours.textContent = addLeadingZero(time.hours);
        timerMinutes.textContent = addLeadingZero(time.minutes);
        timerSeconds.textContent = addLeadingZero(time.seconds);
            
            button.disabled = true;
            
        } else {

            console.log("OOPS, the sale's over...")
            clearInterval(timerId);
        };

    }, 1000);    

};

//getting a real time from ms

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

//adding zero before single figure

function addLeadingZero(value) {

    return String(value).padStart(2, "0");    
};

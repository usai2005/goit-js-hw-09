import { Notify } from 'notiflix/build/notiflix-notify-aio';

const form = document.querySelector('.form')
const enteredDelay = document.querySelector('[name="delay"]');
const enteredStep = document.querySelector('[name="step"]');
const enteredAmount = document.querySelector('[name="amount"]');

//actions by submit btn clicking

form.addEventListener('submit', (e) => {
  
  e.preventDefault();
  
  let step = Number(enteredDelay.value);

  for (let i = 1; i <= Number(enteredAmount.value); i += 1) {
    
    //calling promise creating function and getting promise results
    
    createPromise(i, step)
      .then(({ position, delay }) => {
        
        Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`, { useIcon: false, width: '230px', },);
        
    })
      .catch(({ position, delay }) => {

        Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`, { useIcon: false, width: '230px', },);
        
    });
    
    step += Number(enteredStep.value);
  };
});

//promise creating

function createPromise(position, delay) { 

  return new Promise((resolve, reject) => {

   const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
       
      if (shouldResolve) {
      
        resolve({position, delay});

      } else {

        reject({position, delay});
        
      };

    }, delay);

  });
  
}

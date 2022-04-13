 

  'use strict';
  // Variable declaration
  const mainHeading = document.querySelector('.main-heading');
  const mainContainer = document.querySelector('.timer-container');
  const daysValue = document.querySelector('.days');
  const hoursValue = document.querySelector('.hours');
  const minuteValue = document.querySelector('.minutes');
  const secondsValue = document.querySelector('.seconds');
  

function calcTimer() {
  let timeTick = function () {

  //Find difference between now and exact date
  const dateToLaunch = new Date(2022, 3, 22, 0, 0, 0).getTime();
  const today = new Date().getTime();

  // Calculate Difference dates
  const calcDiffDates = (date1, date2) => Math.abs(date2 - date1);
  let time = Number(calcDiffDates(today, dateToLaunch));

  // Calculate the time
  const days = String(Math.trunc(time / (1000 * 60 * 60 * 24))).padStart(2, 0);
  const hours = String(Math.trunc((time / (1000 * 60 * 60)) % 24)).padStart(2, 0);
  const minutes = String(Math.trunc((time / 1000 / 60) % 60)).padStart(2, 0);
  const seconds = String(Math.trunc((time / 1000) % 60)).padStart(2, 0);

  // Update UI
  daysValue.textContent = days;
  hoursValue.textContent = hours;
  minuteValue.textContent = minutes
  secondsValue.textContent = seconds;

   //When 0 seconds, stop timer and update h1 tag
   if (time === 0) {
     clearInterval(timeTick);
     mainHeading.textContent = 'Are you Excited to Experince New UI😃';
     mainContainer.style.opacity = 0;
   }

    //Decreament time by one second
    time--;
  };
  setInterval(timeTick, 1000);
}
calcTimer();
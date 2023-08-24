var currentDay = document.querySelector('#currentDay');


$(function () {

  /* This code insures that the user input persists past a reload of the page */
  for (let i = 9; i <= 17; i++){
    const key =`hour-${i}`;
    const savedText = localStorage.getItem(key);

    if (savedText !== null){
      const textAreaEl = document.querySelector(`#hour-${i} .description`);
      textAreaEl.value = savedText
    }
  }

  /* Adds a listener for click events on the save button. This code uses the closest textarea element to the save button that was pressed and sets the value in the local storage*/
  const buttons = document.querySelectorAll('.saveBtn');
  buttons.forEach(button => {
    button.addEventListener('click', function(event){
      event.preventDefault();

      const parent = this.closest('.time-block');
      const textAreaEl = parent.querySelector('.description');
      const key = parent.id;
      const value = textAreaEl.value;

      localStorage.setItem(key, value);
    })
  })
  /* Code to constantly check the hour in 24 hout format and update the class lists accordingly*/
  setInterval(function(){
    var currentHour = parseInt(dayjs().format('H'));
    for (var i = 9; i <= 17; i++){
      let currentHourDiv = document.querySelector(`#hour-${i}`);
      if(currentHour == i){
        currentHourDiv.classList.add('present');
      }else if( currentHour < i){
        currentHourDiv.classList.add('future');
      }else if( currentHour > i){
        currentHourDiv.classList.add('past');
      }
    }
  }, 100);

  /*Code to display the current date in the header of the page.*/
  currentDay.textContent = dayjs().format('MMM D, YYYY hh:mm:ss a');

  setInterval(function(){
    var nowTime = dayjs().format('MMM D, YYYY hh:mm:ss a');
    currentDay.textContent = nowTime;
  }, 1000);
});

var test = document.querySelector("#hour-9");
var textAreaEl = test.children[1];
// textAreaEl.value in the console to get whatever someone types into the text area

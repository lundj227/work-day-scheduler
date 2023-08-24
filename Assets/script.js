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
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

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
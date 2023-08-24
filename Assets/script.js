var currentDay = document.querySelector('#currentDay');

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  var allInputs = document.querySelectorAll('.description');
  const buttons = document.querySelectorAll('.saveBtn');
  buttons.forEach(button => {
    button.addEventListener('click', function(event){
      event.preventDefault();

      if(this.parentElement.id == 'hour-9'){
        var parent = document.querySelector("#hour-9");
        var textAreaEl = parent.children[1];

        localStorage.setItem("hour-9", textAreaEl.value);

      }else if(this.parentElement.id == 'hour-10'){
        var parent = document.querySelector("#hour-10");
        var textAreaEl = parent.children[1];

        localStorage.setItem("hour-10", textAreaEl.value);

      }else if(this.parentElement.id == 'hour-11'){
        var parent = document.querySelector("#hour-11");
        var textAreaEl = parent.children[1];

        localStorage.setItem("hour-11", textAreaEl.value);
        
      }else if(this.parentElement.id == 'hour-12'){
        var parent = document.querySelector("#hour-12");
        var textAreaEl = parent.children[1];

        localStorage.setItem("hour-12", textAreaEl.value);
        
      }else if(this.parentElement.id == 'hour-13'){
        var parent = document.querySelector("#hour-13");
        var textAreaEl = parent.children[1];

        localStorage.setItem("hour-13", textAreaEl.value);
        
      }else if(this.parentElement.id == 'hour-14'){
        var parent = document.querySelector("#hour-14");
        var textAreaEl = parent.children[1];

        localStorage.setItem("hour-14", textAreaEl.value);
        
      }else if(this.parentElement.id == 'hour-15'){
        var parent = document.querySelector("#hour-15");
        var textAreaEl = parent.children[1];

        localStorage.setItem("hour-15", textAreaEl.value);
        
      }else if(this.parentElement.id == 'hour-16'){
        var parent = document.querySelector("#hour-16");
        var textAreaEl = parent.children[1];

        localStorage.setItem("hour-16", textAreaEl.value);
        
      }else if(this.parentElement.id == 'hour-17'){
        var parent = document.querySelector("#hour-17");
        var textAreaEl = parent.children[1];

        localStorage.setItem("hour-17", textAreaEl.value);
      }
  })
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  currentDay.textContent = dayjs().format('MMM D, YYYY hh:mm:ss a');

  setInterval(function(){
    var nowTime = dayjs().format('MMM D, YYYY hh:mm:ss a');
    currentDay.textContent = nowTime;
  }, 1000);
});

var test = document.querySelector("#hour-9");
var textAreaEl = test.children[1];
// textAreaEl.value in the console to get whatever someone types into the text area
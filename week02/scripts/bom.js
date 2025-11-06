// declare three (3) variables that hold references to the input, button,
// and list elements. 
const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");



/* ADDING functonality */

// Create a click event listener for the Add Chapter button using an 
// addEventListener.

button.addEventListener("click", function() {
//  if (el valor de input es "") then {...}
//  else {populate la lista}
    if (input.value.trim() === '') {
        alert("Please enter a value.");
        input.focus();
        return;
    }
    else {

        // Create a li element that will hold each entry's chapter title and an 
        // associated delete button. 
        const li = document.createElement('li');

        // Create a delete button. 
        const deleteBtn = document.createElement("button");

        // 1 Populate the li element variable's textContent or innerHTML with the
        // input value y popular el textcontet de delete button
        // 2 Append the li element variable with the delete button. 
        // 3 Append the li element variable to the unordered list in your HTML. 
        li.textContent = input.value;
        deleteBtn.textContent = "❌";
        li.append(deleteBtn);
        list.append(li);

        // Add an event listener to the delete button that removes the li element
        // when clicked.
        deleteBtn.addEventListener("click", function() {
            list.removeChild(li);
            input.focus();
        })

        // Change the input value to nothing or the empty string to clean up the 
        // interface for the user.
        // Whether or not a list item was created, the focus (active cursor) 
        // should be sent to the input element
        input.value=""; 
        input.focus();
    }
})




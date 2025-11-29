const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("ul");
// array de strings para guardar the user's favorite chapters
//                                      OR empty array - (if the function returns null)
const chaptersArray = (getChapterList() || [])
chaptersArray.forEach(chapter => {
    displayList(chapter)
});

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"))
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray))

}

function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

function displayList(item) {
    // Create a li element that will hold each entry's chapter title and an 
    // associated delete button. 
    const li = document.createElement('li');

    // Create a delete button. 
    const deleteBtn = document.createElement("button");

    // 1 Populate the li element variable's textContent or innerHTML with the
    // input value y popular el textcontet de delete button
    // 2 Append the li element variable with the delete button. 
    // 3 Append the li element variable to the unordered list in your HTML. 
    li.textContent = item;
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add('delete'); // this references the CSS rule .delete{width:fit-content;} to size the delete button
    li.append(deleteBtn);
    list.append(li);

    // delete button logic
    deleteBtn.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // note this new function that is needed to remove the chapter from the array and localStorage.
        input.focus();
    })
}

button.addEventListener("click", function () {
    if (input.value.trim() === '') {
        alert("Please enter a value.");
        input.focus();
        return;
    }
    else {
        displayList(input.value); // call the function that outputs the submitted chapter
        chaptersArray.push(input.value);  // add the chapter to the array
        setChapterList(); // update the localStorage with the new array
        input.value = ''; // clear the input
        input.focus(); // set the focus back to the input
    }
})




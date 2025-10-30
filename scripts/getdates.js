//define variables
const year = document.querySelector("#currentyear")
const lastModified = document.querySelector("#lastModified")

//define date object
const today = new Date();

//get current year and display it
year.innerHTML = `©${today.getFullYear()} 🌿 Yain Huento 🌿 Argentina</span>`;

//get and display last modified date
const lastModifiedDate = document.getElementById("lastModified").innerHTML = document.lastModified;

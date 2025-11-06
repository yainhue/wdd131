//define variables
const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const year = document.querySelector("#currentyear")
const lastModified = document.querySelector("#lastModified")

const today = new Date();

hamButton.addEventListener("click", () => {
	navigation.classList.toggle("open");
	hamButton.classList.toggle("open");
});

year.innerHTML = `©${today.getFullYear()} 🌿 Yain Huento 🌿 Argentina</span>`;
const lastModifiedDate = document.getElementById("lastModified").innerHTML = document.lastModified;
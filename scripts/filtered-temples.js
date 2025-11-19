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
const lastMoedifiedDate = document.getElementById("lastModified").innerHTML = document.lastModified;

// filtered-temples code\\
const temples = [
	{
		templeName: "Aba Nigeria",
		location: "Aba, Nigeria",
		dedicated: "2005, August, 7",
		area: 11500,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
	},
	{
		templeName: "Manti Utah",
		location: "Manti, Utah, United States",
		dedicated: "1888, May, 21",
		area: 74792,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
	},
	{
		templeName: "Payson Utah",
		location: "Payson, Utah, United States",
		dedicated: "2015, June, 7",
		area: 96630,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
	},
	{
		templeName: "Yigo Guam",
		location: "Yigo, Guam",
		dedicated: "2020, May, 2",
		area: 6861,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
	},
	{
		templeName: "Washington D.C.",
		location: "Maryland, United States",
		dedicated: "1974, November, 19",
		area: 156558,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
	},
	{
		templeName: "Lima Perú",
		location: "Lima, Perú",
		dedicated: "1986, January, 10",
		area: 9600,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
	},
	{
		templeName: "Mexico City Mexico",
		location: "Mexico City, Mexico",
		dedicated: "1983, December, 2",
		area: 116642,
		imageUrl:
			"https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
	},
	{
		templeName: "Belém Brazil",
		location: "Belém, Brazi",
		dedicated: "2019, August , 17",
		area: 28675,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310-main.jpg"
	},
	{
		templeName: "Urdaneta Philippines",
		location: "Urdaneta, Philippines",
		dedicated: "2019, January, 16",
		area: 32604,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/urdaneta-philippines-temple/urdaneta-philippines-temple-45874-main.jpg"
	},
	{
		templeName: "Salta Argentina Temple",
		location: "Salta, Argentina",
		dedicated: "2020, November, 4",
		area: 27000,
		imageUrl:
			"https://churchofjesuschristtemples.org/assets/img/temples/salta-argentina-temple/salta-argentina-temple-48241-main.jpg"
	},
];

const empty = [];

// create the base temple cards (home)
const figureWrappers = document.querySelector(".figure-wrapper")
function createTempleCards(temples) {
	// clear previous temples
	figureWrappers.innerHTML = "";
	// create temple cards
	temples.forEach((t) => {

		// templecard wrapper, append the rest of the temple elements to this div.
		const templecard = document.createElement("div");
		templecard.className = ("temple-card");
		figureWrappers.appendChild(templecard);

		// heading
		const heading = document.createElement("h3");
		heading.textContent = (t.templeName);
		templecard.appendChild(heading);

		// location
		const location = document.createElement("p");
		location.textContent = `LOCATION: ${t.location}`;
		templecard.appendChild(location);

		// dedicated
		const dedicated = document.createElement("p");
		dedicated.textContent = `DEDICATED: ${t.dedicated}`;
		templecard.appendChild(dedicated);

		// area
		const area = document.createElement("p");
		area.textContent = `AREA: ${t.area} sq ft`;
		templecard.appendChild(area);

		// image
		const image = document.createElement("img");
		Object.assign(image, {
			src: t.imageUrl,
			height: 200,
			alt: `Image of ${t.templeName} Temple`,
			className: "temple-image",
			loading: "lazy"
		});
		templecard.appendChild(image);


	});
}
createTempleCards(temples);

// filter the temple cards

const homeButton = document.querySelector("#homeButton");
const oldButton = document.querySelector("#oldButton");
const newButton = document.querySelector("#newButton");
const largeButton = document.querySelector("#largeButton");
const smallButton = document.querySelector("#smallButton");

homeButton.addEventListener("click", () => {
	homeButton.className = "active"
	oldButton.className = ""
	newButton.className = ""
	largeButton.className = ""
	smallButton.className = ""
	createTempleCards(temples)
})

oldButton.addEventListener("click", () => {
	homeButton.className = ""
	oldButton.className = "active"
	newButton.className = ""
	largeButton.className = ""
	smallButton.className = ""
	createTempleCards(temples.filter(temple => temple.dedicated.split(",")[0] < 1900));
})
// TERMINAR OLD Y NEW
newButton.addEventListener("click", () => {
	homeButton.className = ""
	oldButton.className = ""
	newButton.className = "active"
	largeButton.className = ""
	smallButton.className = ""
	createTempleCards(temples.filter(temple => temple.dedicated.split(",")[0] > 2000));
})

largeButton.addEventListener("click", () => {
	homeButton.className = ""
	oldButton.className = ""
	newButton.className = ""
	largeButton.className = "active"
	smallButton.className = ""
	createTempleCards(temples.filter(temple => temple.area > 90000));
})

smallButton.addEventListener("click", () => {
	homeButton.className = ""
	oldButton.className = ""
	newButton.className = ""
	largeButton.className = ""
	smallButton.className = "active"
	createTempleCards(temples.filter(temple => temple.area < 10000));
})
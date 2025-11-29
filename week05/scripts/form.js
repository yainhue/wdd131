// Initialize display element variable
let numReviews = Number(window.localStorage.getItem("numReviews")) || 0;
const submitBtn = document.querySelector("#submitBtn");


//year and lastmodified 
const year = document.querySelector("#currentyear")
const lastModified = document.querySelector("#lastModified")

const today = new Date();
year.innerHTML = `©${today.getFullYear()} 🌿 Yain Huento 🌿 Argentina</span>`;
const lastMoedifiedDate = document.getElementById("lastModified").innerHTML = document.lastModified;

// populate the product list
const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];

function populateList(products) {

    products.forEach((p) => {

        const productParent = document.querySelector("#product");

        // create option
        const product = document.createElement("option");
        product.textContent = (p.name);
        product.value = (p.id);
        productParent.appendChild(product);
    });
}


// if the review counter element is not detected, populate list of products
if (!document.querySelector("#counter")) {
    populateList(products);

    submitBtn.addEventListener("click", function () {
        numReviews++;
        localStorage.setItem("numReviews", numReviews);
    })
}
// else, just define the counterDisplay text.
else {
    const counterDisplay = document.querySelector("#counter");
    counterDisplay.textContent = numReviews;
}



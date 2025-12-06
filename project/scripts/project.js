const hamButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");
const navImg = document.querySelector(".nav-img");
const year = document.querySelector("#currentyear")
const lastModified = document.querySelector("#lastModified")
const today = new Date();
// Initialize display element variable
let numReviews = Number(window.localStorage.getItem("numReviews")) || 0;
const submitBtn = document.querySelector("#submitBtn");

hamButton.addEventListener("click", () => {
    navigation.classList.toggle("navigation-open");
    hamButton.classList.toggle("open");
    navImg.classList.toggle("nav-img-open");
});

year.innerHTML = `©${today.getFullYear()} 🌿 Yain Huento 🌿 Argentina</span>`;
const lastMoedifiedDate = document.getElementById("lastModified").innerHTML = document.lastModified;

// video games
const videogames = [
    {
        vgName: "Medieval Warfare 2",
        newPrice: 6.24,
        oldPrice: 24.99,
        discount: 75,
        image: "images/game1.webp"
    },
    {
        vgName: "Apocalipty War",
        newPrice: 29.99,
        oldPrice: 59.99,
        discount: 50,
        image: "images/game2.webp"
    },
    {
        vgName: "Dragon Realms",
        newPrice: 14.99,
        oldPrice: 39.99,
        discount: 62,
        image: "images/game3.webp"
    },
    {
        vgName: "Pixel Farmers",
        newPrice: 9.99,
        oldPrice: 19.99,
        discount: 50,
        image: "images/game4.webp"
    },
    {
        vgName: "Zombie Survival X",
        newPrice: 4.99,
        oldPrice: 24.99,
        discount: 80,
        image: "images/game5.webp"
    },
    {
        vgName: "Galaxy Raiders",
        newPrice: 19.99,
        oldPrice: 49.99,
        discount: 60,
        image: "images/game6.webp"
    },
    {
        vgName: "Mystic Forest",
        newPrice: 7.49,
        oldPrice: 29.99,
        discount: 75,
        image: "images/game7.webp"
    },
    {
        vgName: "Battle Arena Legends",
        newPrice: 24.99,
        oldPrice: 59.99,
        discount: 58,
        image: "images/game8.webp"
    },
    {
        vgName: "Retro Fighters",
        newPrice: 3.99,
        oldPrice: 15.99,
        discount: 75,
        image: "images/game9.webp"
    },
    {
        vgName: "Alien Invasion VR",
        newPrice: 34.99,
        oldPrice: 69.99,
        discount: 50,
        image: "images/game10.webp"
    },
    {
        vgName: "Kingdom Builders",
        newPrice: 12.99,
        oldPrice: 39.99,
        discount: 67,
        image: "images/game11.webp"
    },
    {
        vgName: "Shadow Ninjas",
        newPrice: 8.99,
        oldPrice: 29.99,
        discount: 70,
        image: "images/game12.webp"
    },
    {
        vgName: "Space Odyssey",
        newPrice: 19.49,
        oldPrice: 54.99,
        discount: 65,
        image: "images/game13.webp"
    }
];

const collectionsWrapper = document.querySelector(".collections-wrapper")
function createVGCards(videogames) {
    // // clear previous temples
    // collectionWrapper.innerHTML = "";

    // create cards
    videogames.forEach((t) => {

        // collection-contents
        const collectionWrapper = document.createElement("div");
        collectionWrapper.className = ("collection-wrapper");
        collectionsWrapper.appendChild(collectionWrapper);

        // image
        const image = document.createElement("img");
        Object.assign(image, {
            src: t.image,
            // height: 200,
            alt: `Screenshot of ${t.vgName}`,
            loading: "lazy"
        });
        collectionWrapper.appendChild(image);

        // collection-info-wrapper
        const collectionInfoWrapper = document.createElement("div");
        collectionInfoWrapper.className = ("collection-info-wrapper");
        collectionWrapper.appendChild(collectionInfoWrapper);

        // collection-info
        const collectionInfo = document.createElement("div");
        collectionInfo.className = ("collection-info");
        collectionInfoWrapper.appendChild(collectionInfo);

        // collection-vg-title
        const vgTitle = document.createElement("p");
        vgTitle.textContent = `${t.vgName}`;
        vgTitle.className = ("collection-vg-title");
        collectionInfo.appendChild(vgTitle);

        // collection-vg-description
        const vgDescrip = document.createElement("p");
        vgDescrip.textContent = `Lorem ipsum dolor sit amet consecteturg.`;
        vgDescrip.className = ("collection-vg-description");
        collectionInfo.appendChild(vgDescrip);

        // collection-price
        const collectionPrice = document.createElement("div");
        collectionPrice.className = ("collection-price");
        collectionInfoWrapper.appendChild(collectionPrice);

        // discount-off
        const vgOff = document.createElement("p");
        vgOff.textContent = `-${t.discount}%`;
        vgOff.className = ("discount-off");
        collectionPrice.appendChild(vgOff);

        // discount-prices
        const discountPrices = document.createElement("div");
        discountPrices.className = ("discount-prices");
        collectionPrice.appendChild(discountPrices);

        // discount-oldp
        const discountOldp = document.createElement("p");
        discountOldp.textContent = `$${t.oldPrice}`;
        discountOldp.className = ("discount-oldp");
        discountPrices.appendChild(discountOldp);

        // discount-newp
        const discountNewp = document.createElement("p");
        discountNewp.textContent = `$${t.newPrice} USD`;
        discountNewp.className = ("discount-newp");
        discountPrices.appendChild(discountNewp);
    });
}

// form counter
// if the review counter element is detected, display number of subscriptions
if (document.querySelector("#counter")) {
    const counterDisplay = document.querySelector("#counter");
    counterDisplay.textContent = numReviews;
}

// else, listen to submitBtn and create VGCards
else {
    submitBtn.addEventListener("click", function () {
        numReviews++;
        localStorage.setItem("numReviews", numReviews);
    })

    createVGCards(videogames);
}

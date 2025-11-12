// DOM selection
const year = document.querySelector("#currentyear")
const lastModified = document.querySelector("#lastModified")
const today = new Date();
const temperature_display = document.querySelector("#temperature")
const wind_display = document.querySelector("#wind")
const windchill_display = document.querySelector("#windchill")

// set last modified date and current year
year.innerHTML = `©${today.getFullYear()} 🌿 Yain Huento 🌿 Argentina</span>`;
const lastModifiedDate = document.getElementById("lastModified").innerHTML = document.lastModified;

// get temperature and wind velocity
const temperature = 10.0
const wind = 4.8

// display temp and wind
temperature_display.textContent = `${temperature} °C`;
wind_display.textContent = `${wind} km/h`;

// define windchill function
function calculateWindChill(temperature, wind) {
    return (13.12 + (0.6215 * temperature) - (11.37 * (wind ** 0.16)) + (0.3965 * temperature * (wind ** 0.16))).toPrecision(2)
}

// calculate windchill
if (temperature > 9.9 && wind > 4.7) { windchill = calculateWindChill(temperature, wind) } else { windchill = "N/A"; }

// display windchill
windchill_display.textContent = `${windchill} °C`;
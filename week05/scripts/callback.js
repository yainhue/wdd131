function calculate(a, b, callback) {
    callback(a + b);
}

function displayResult(result) {
    alert('The result is: ' + result);
}

calculate(5, 10, displayResult)


function fetchData(callback) {
    // using setTimeout to simulate fetching data from a server
    setTimeout(() => {
        // This calls the 'callback' function and passes data to it.
        callback('Data has been fetched');
    }, 5000); // This simulates a 5-second delay from a service.
}

// function that processes the data
function processData(data) {
    alert("Data received: " + data);
}

// Call the fetchData function and pass the processData function as an argument.
fetchData(processData("un millon de pesos, pasaron 5 segundos"));
// Load DOM Content

window.addEventListener("DOMContentLoaded", () => {
    // debugger;
    fetchBandNames();
})

//create const variables 

const main_url = "http://localhost:3000"

//Create functions

// ------------------------------- //

// fetch band names function
function fetchBandNames() {
    fetch(`${main_url}/bands`)
    .then(resp => console.log(resp))
}

// create a band name form function

// create a submit function for the band form

// delete a band name function

// -------------------------------- //

// fetch instrument names function and show them when a band name is clicked

// create sounds for each instrument when clicked function


// Load DOM Content

window.addEventListener("DOMContentLoaded", () => {
    // debugger;
    fetchBandNames();
    createBandNameForm();
    submitBandForm();
})

//create const variables 

const main_url = "http://localhost:3000"

//Create functions

// ------------------------------- //

// fetch band names function
function fetchBandNames() {
    fetch(`${main_url}/bands`)
    .then(resp => resp.json())
    .then(bands => {
        for(let band of bands) {
            // console.log(band);
            let bandName = new Band(band.band_name)
            // console.log(bandName);
            bandName.renderBandNames();
        }
    })
}

// create a band name form function
function createBandNameForm() {
    // get the id of the form container from the html
    let bandNameFormDivContainer = document.getElementById("band-name-form-div-container")
    bandNameFormDivContainer.innerHTML += `<form>
                                           <h2>Add a Band Here:</h2>
                                           <input type="text" id="band-name-input">
                                           <input type="submit" value="Add Band">
                                           </form>`

    // add event listener for the submit function from the form container variable
    
}

// create a submit function for the band form

function submitBandForm() {
    // Submit button is used - need to use prevent default to stop refresh
    event.preventDefault();
    // needs to be a post request
    // need to collect the value of the form input text box and display the value on the screen
    let bandNameValue = document.getElementById("band-name-input").value
    console.log(bandNameValue);
}


// delete a band name function

// -------------------------------- //

// fetch instrument names function and show them when a band name is clicked

// create sounds for each instrument when clicked function


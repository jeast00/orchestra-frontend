// Load DOM Content

window.addEventListener("DOMContentLoaded", () => {
    // debugger;
    createBandNameForm();
    fetchBandNames();

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
            let bandName = new Band(band.id, band.band_name)
            // console.log(bandName);
            bandName.renderBandNames();
        }
    })
}

// fetchBandNames();

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
    bandNameFormDivContainer.addEventListener("submit", submitBandForm)
}

// createBandNameForm();

// create a submit function for the band form

function submitBandForm() {
    // Submit button is used - need to use prevent default to stop refresh
    event.preventDefault(); // use for buttons
    // needs to be a post request
    // need to collect the value of the form input text box and display the value on the screen
    let bandNameValue = document.getElementById("band-name-input").value
    // console.log(bandNameValue);

    // create a band object to obtain the input value

    let band = {
        band_name: bandNameValue
    }

    // console.log(band);

    // create a fetch post request to put the input value on the page
    fetch(`${main_url}/bands`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Accept": "aaplication/json"
        },
        body: JSON.stringify(band)
    })
    .then(resp => resp.json())
    .then(band => {
        let newBandName = new Band(band.id, band.band_name)
        newBandName.renderBandNames();
    })

}


// // delete a band name function
// function deleteBand() {
//     event.preventDefault();
//     let deleteBandID = parseInt(event.target.parentElement.dataset.id)

//     fetch(`${main_url}/bands${deleteBandID}`, {

//     })
// }




// -------------------------------- //

// fetch instrument names function and show them when a band name is clicked

// create sounds for each instrument when clicked function


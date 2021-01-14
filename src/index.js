// Load DOM Content

window.addEventListener("DOMContentLoaded", () => {
    // debugger;
    fetchBandNames();
    createBandNameForm();
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
    let bandNameFormDivContainer = document.getElementById("band-name-form-div-container")
    bandNameFormDivContainer.innerHTML += `<form>
                                           <h2>Add a Band Here:</h2>
                                           <input type="text" id="band-name-input">
                                           <input type="submit" value="Add Band">
                                           </form>`
}

// create a submit function for the band form

// delete a band name function

// -------------------------------- //

// fetch instrument names function and show them when a band name is clicked

// create sounds for each instrument when clicked function


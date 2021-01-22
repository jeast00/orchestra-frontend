
// declare variables

// main url to use fetch request
const main_url = "http://localhost:3000"


// declare functions

// create a band name form
function createBandNameForm() {
    const bandNameFormDivContainer = document.getElementById('band-name-form-div-container')
    bandNameFormDivContainer.innerHTML += `<form>
                                            <h2>Add a Band Here:</h2>
                                            <input type="text" id="band-name-input">
                                            <input type="submit" value="Add Band">
                                            </form>`
    bandNameFormDivContainer.addEventListener('submit', addBandName) // event listener on submit with passing function call - do not invoke function
}

createBandNameForm(); // call the bandNameFormFunction - will show html on page

// submit the band name to the DOM and save it to the database
function addBandName(e) {
    event.preventDefault(); // prevent the screen from refreshing on submit
    const bandNameInput = document.getElementById('band-name-input').value 

    // create an object to pass through the fetch post request
    let band = {
        band_name: bandNameInput
    }

    // fetch post request 
    fetch(`${main_url}/bands`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(band)
    })
    .then(resp => resp.json())
    .then(band => {
        let newBandName = new Band(band.id, band.band_name)
        newBandName.renderBand();
    })
    
    // reset the form 
    e.target.reset();
}

// write a function to fetch all of the band names
function fetchBands() {
    // fetch get request
    fetch(`${main_url}/bands`)
    .then(resp => resp.json())
    .then(bands => {
        for(const band of bands) {
            let bandName = new Band(band.id, band.band_name)
            bandName.renderBand();
        }
    })

}

fetchBands();


// write a function to add band instruments to the Band
function addBandInstrumentName() {
    event.preventDefault(); // prevent the screen from refreshing on submit
    // debugger;
    // console.log(bandInstrumentInput);
    // debugger;

    // fetch request the instruments url for a POST to save the instrument name to the database
    fetch(`${main_url}/instruments`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            instrument_name: instrument
        })
    })

    

}

// write a function to render the band instrument names to the screen










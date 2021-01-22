
// declare variables

// main url to use fetch request
const main_url = "http://localhost:3000"


// declare functions

// write a function to fetch all of the band names
function fetchBands() {
    // fetch get request
    fetch(`${main_url}/bands`)
    .then(resp => resp.json())
    .then(bands => {
        bands.forEach(band => renderBand(band.band_name))
    })

}

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

// write a function to render the band names to the page
function renderBand(band) {
    console.log(band);
    // create elements and append to the DOM
    const bandNameDivContainer = document.getElementById('band-name-div-container')
    // console.log(bandNameDivContainer);

    // create elements and set their attributes
    const bandNameDiv = document.createElement('div')
    bandNameDiv.setAttribute('id', 'band-name-div')
    // bandNameDiv.setAttribute('data-id', band.id)

    const bandNameHeader2 = document.createElement('h2')
    bandNameHeader2.innerText = band

    const bandDeleteButton = document.createElement('button')
    bandDeleteButton.setAttribute('id', 'band-delete-button')
    bandDeleteButton.innerText = 'Delete Band'
    // bandDeleteButton.addEventListener('click', this.deleteBand)

    // create a form to add instruments to the band
    const bandInstrumentNameForm = document.createElement('form')
    bandInstrumentNameForm.innerHTML += `<h4>Add an Instrument:</h4>
                                        <input type="text" id="band-instrument-name-input">
                                        <input type="submit" value="Add Instrument">`
    // console.log(bandInstrumentNameForm);

    // add event on submitting instrument names to the band 
    bandInstrumentNameForm.addEventListener('submit', addBandName)

    // add a div for the band instruments
    const bandInstrumentNameDiv = document.createElement('div')

    // append the elements to the DOM
    bandNameHeader2.appendChild(bandDeleteButton)
    bandNameDiv.append(bandNameHeader2, bandInstrumentNameDiv, bandInstrumentNameForm)
    bandNameDivContainer.appendChild(bandNameDiv)

    }

// create the bandInstrumentNameForm
function createBandInstrumentNameForm() {

}

// submit the band name to the DOM and save it to the database
function addBandName(e) {
    event.preventDefault(); // prevent the screen from refreshing on submit
    let bandNameInput = document.getElementById('band-name-input').value 


    // reset the form 
    e.target.reset();
}

function addBandInstrumentName(instrument) {
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

function renderBandInstruments(e) {
    event.preventDefault();
    const bandInstrumentInput = e.target.children[1].value // had to throw debugger to find the input value from the e.target 
    const bandInstrumentDiv = e.target.previousElementSibling; // had to check debugger to find the div previous from the form instrument name input
    const bandInstrumentHeader3 = document.createElement('h3')
    bandInstrumentHeader3.innerText = bandInstrumentInput
    bandInstrumentDiv.append(bandInstrumentHeader3)

    // call the addBandInstrumentName with argument to render and save the instrument name to the band
    this.addBandInstrumentName(bandInstrumentInput)

    e.target.reset();
}

function deleteBand() {
    // need to get id of band name 
    // debugger;
    const bandID = parseInt(event.target.parentElement.parentElement.dataset.id)
    // console.log(bandID);

    // fetch delete request with url and id of band
    fetch(`${main_url}/bands/${bandID}`, {
        method: 'DELETE'
    })
    event.target.parentElement.parentElement.remove();
}



// call the fetchBands function
fetchBands();














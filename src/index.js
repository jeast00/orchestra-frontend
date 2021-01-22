
// declare variables

const main_url = "http://localhost:3000"

fetchBands();

// declare functions

// write a function to fetch all of the band names
function fetchBands() {
    // fetch get request
    fetch(`${main_url}/bands`)
    .then(resp => resp.json())
    .then(bands => {
        for(const band of bands) {
            renderBand(band.band_name)
            // console.log(band.id);
        }
    })

}

// write a function to render the band names to the page
function renderBand(band) {
    // console.log(band);
    // get the value from the band name text box
    // const bandNameInput = document.getElementById('band-name-input').value
    // console.log(bandNameInput);

    // create elements and append to the DOM
    const bandNameDivContainer = document.getElementById('band-name-div-container')
    // console.log(bandNameDivContainer);
    const bandNameDiv = document.createElement('div')
    bandNameDiv.setAttribute('id', 'band-name-div')
    bandNameDiv.setAttribute('data-id', band.id)
    const bandNameHeader2 = document.createElement('h2')
    bandNameHeader2.innerText = band

    // create a form to add instruments to the band
    const bandInstrumentNameForm = document.createElement('form')
    bandInstrumentNameForm.innerHTML += `<h4>Add an Instrument:</h4>
                                         <input type="text" id="band-instrument-name-input">
                                         <input type="submit" value="Add Instrument">`
    // console.log(bandInstrumentNameForm);

    // add event on submitting instrument names to the band 
    bandInstrumentNameForm.addEventListener('submit', renderBandInstruments)

    // add a div for the band instruments
    const bandInstrumentNameDiv = document.createElement('div')

    // append the elements to the DOM
    bandNameDiv.append(bandNameHeader2, bandInstrumentNameDiv, bandInstrumentNameForm)

    // console.log(bandNameDiv);

    bandNameDivContainer.appendChild(bandNameDiv)

    // e.target.reset();
}

// write a function to add band instruments to the Band
function addBandInstrumentName(instrument) {
    console.log(instrument);
    // event.preventDefault(); // prevent the screen from refreshing on submit
    // debugger;
    // console.log(bandInstrumentInput);
    // debugger;

    // e.target.reset();

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
function renderBandInstruments(e) {
    event.preventDefault();
    const bandInstrumentInput = e.target.children[1].value // had to throw debugger to find the input value from the e.target 
    const bandInstrumentDiv = e.target.previousElementSibling; // had to check debugger to find the div previous from the form instrument name input
    const bandInstrumentHeader3 = document.createElement('h3')
    bandInstrumentHeader3.innerText = bandInstrumentInput
    bandInstrumentDiv.append(bandInstrumentHeader3)

    // call the addBandInstrumentName with argument to render and save the instrument name to the band
    addBandInstrumentName(bandInstrumentInput)

    e.target.reset();
}










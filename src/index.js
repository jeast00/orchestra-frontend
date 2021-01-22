
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
            let bandName = new Band(band.id, band.band_name)
            bandName.renderBand();
        }
    })

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










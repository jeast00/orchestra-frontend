document.addEventListener("DOMContentLoaded", ()=> {
    createBandNameForm();
    fetchBandNames();
    fetchInstrumentNames();
    // addBandName();
})

// declare variables
const main_url = "http://localhost:3000"

// declare functions

function createBandNameForm() {
    const bandNameFormDivContainer = document.getElementById('band-name-form-div-container')
    bandNameFormDivContainer.innerHTML += `<form>
                                            <h2>Add a Band Here:</h2>
                                            <input type="text" id="band-name-input">
                                            <input type="submit" value="Add Band">
                                            </form>`
    // console.log(bandNameFormDivContainer);
    bandNameFormDivContainer.addEventListener('submit', addBandName)
}

function fetchBandNames() {
    fetch(`${main_url}/bands`)
    .then(resp => resp.json())
    .then(bands => {
        for(const band of bands) {
            // console.log(band)
            let bandName = new Band(band.id, band.band_name)
            bandName.renderBands();
        }
    })
}

function fetchInstrumentNames() {
    fetch(`${main_url}/instruments`)
    .then(resp => resp.json())
    .then(instruments => {
        for(const instrument of instruments) {
            let instrumentName = new Instrument(instrument.id, instrument.instrument_name, instrument.band_id)
            instrumentName.renderBandInstrumentNames();
            console.log(instrumentName);
        }
    })
}

function addBandName() {
    event.preventDefault();
    const bandNameInput = document.getElementById('band-name-input').value

    let band = {
        band_name: bandNameInput
    }

    console.log(band);

    fetch(`${main_url}/bands`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(band)
    })
    .then(resp => resp.json())
    .then(band => {
        let newBandName = new Band(band.id, band.band_name)
        newBandName.renderBands();
    })
    // console.log(bandNameInput);
}





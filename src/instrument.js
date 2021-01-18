class Instrument {
    constructor(instrument_name, band_id) {
        this.instrument_name = instrument_name
        this.band_id = band_id
    }

    // render the instruments under each band

    // renderBandInstruments() {
    //     // need to get the band-name container, create a band-instrument-div, and append instruments to each band name
    //     let bandNameDivContainer = document.getElementById("band-name-div-container")
    //     let createInstrumentDivContainer = document.createElement('div')
    //     createInstrumentDivContainer.setAttribute('id', 'band-instrument-div-container')
    // }

    renderBandInstrumentNames() {
        // create an instrument name div to append to the band name div - get band name div
        let bandNameDiv = document.getElementById('band-name-id')
        console.log(bandNameDiv);
    }

}

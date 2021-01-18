class Instrument {
    constructor(instrument_name, band_id) {
        this.id = this.id
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
        let bandNameHeader = document.getElementById('band-name-head-3')
        let bandInstrumentNameDiv = document.createElement('div')
        let bandInstrumentHeader = document.createElement('h4')
        let p_bandInstrumentName = document.createElement('p')
        bandInstrumentNameDiv.setAttribute('id', 'band-instrument-name-div')
        bandInstrumentHeader.setAttribute('id', 'band-instrument-name-header-4')
        p_bandInstrumentName.setAttribute('id', 'band-instrument-name-id')
        bandInstrumentNameDiv.classList.add('band-instrument-name-class')
        bandInstrumentHeader.classList.add('band-instrument-header-class')
        p_bandInstrumentName.classList.add('p-band-instrument-name-class')
        console.log(bandNameHeader);
    }

}

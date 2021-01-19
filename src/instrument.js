class Instrument {
    constructor(instrument) {
        this.id = instrument.id
        this.instrument_name = instrument.instrument_name
        this.band_id = instrument.band_id
    }

    // render the instruments under each band

    // renderBandInstruments() {
    //     // need to get the band-name container, create a band-instrument-div, and append instruments to each band name
    //     let bandNameDivContainer = document.getElementById("band-name-div-container")
    //     let createInstrumentDivContainer = document.createElement('div')
    //     createInstrumentDivContainer.setAttribute('id', 'band-instrument-div-container')
    // }

    renderBandInstrumentNames() {
        let bandNameDiv = document.getElementById('band-name-div')
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
        bandInstrumentNameDiv.setAttribute('data-id', this.id)
        bandInstrumentNameDiv.setAttribute('band_id', this.band_id)
        bandInstrumentHeader.innerText = `${this.instrument_name}`
        p_bandInstrumentName.appendChild(bandInstrumentHeader)
        bandInstrumentHeader.appendChild(bandInstrumentNameDiv)
        // bandNameDiv.appendChild(bandInstrumentHeader)
        // console.log(bandInstrumentHeader);
        // console.log(bandInstrumentNameDiv);
        // console.log(bandInstrumentHeader);
    }

}

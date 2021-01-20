class Instrument {
    constructor(id, instrument_name, band_id) {
        this.id = id
        this.instrument_name = instrument_name
        this.band_id = band_id
    }

    // render instrument names

    renderBandInstrumentNames() {
        // get the element id that will be the main append element - bandNameDiv
        const bandNameDiv = document.getElementById('band-name-div')
        console.log(bandNameDiv);
        // create the element for band instrument name div
        const bandInstrumentNameDiv = document.createElement('div')
        console.log(bandInstrumentNameDiv);

        //
    }
}


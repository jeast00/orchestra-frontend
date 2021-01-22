class Instrument {
    constructor(id, instrument_name, band_id) {
        this.id = id
        this.instrument_name = instrument_name
        this.band_id = band_id
    }

    // render the band instrument names - moved from index.js - not working 

    renderBandInstruments(e) {
        event.preventDefault();
        const bandInstrumentInput = e.target.children[1].value // had to throw debugger to find the input value from the e.target 
        const bandInstrumentDiv = e.target.previousElementSibling; // had to check debugger to find the div previous from the form instrument name input
        const bandInstrumentHeader3 = document.createElement('h3')
        bandInstrumentHeader3.innerText = bandInstrumentInput
        bandInstrumentDiv.append(bandInstrumentHeader3)
    
        // call the addBandInstrumentName with argument to render and save the instrument name to the band
        // this.addBandInstrumentName(bandInstrumentInput)
    
        e.target.reset();
    }
}
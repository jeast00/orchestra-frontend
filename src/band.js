class Band {
    constructor(id, band_name) {
        this.id = id
        this.band_name = band_name
    }


    // add the render bands function from index.js to here

    // write a function to render the band names to the page
renderBand() {
    // console.log(band);
    // get the value from the band name text box
    // const bandNameInput = document.getElementById('band-name-input').value
    // console.log(bandNameInput);

    // create elements and append to the DOM
    const bandNameDivContainer = document.getElementById('band-name-div-container')
    // console.log(bandNameDivContainer);
    const bandNameDiv = document.createElement('div')
    bandNameDiv.setAttribute('id', 'band-name-div')
    bandNameDiv.setAttribute('data-id', this.id)
    const bandNameHeader2 = document.createElement('h2')
    bandNameHeader2.innerText = `${this.band_name}`

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
    bandNameDivContainer.appendChild(bandNameDiv)

    }
}
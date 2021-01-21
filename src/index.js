
// declare variables
const bandNameFormDivContainer = document.getElementById('band-name-form-div-container')
const bandNameInput = document.getElementById('band-name-input')



// declare functions

bandNameFormDivContainer.addEventListener('submit', addBandName)



function addBandName() {
    event.preventDefault(); // prevent the screen from refreshing on submit

    // get the value from the band name text box
    const bandNameInput = document.getElementById('band-name-input').value
    // console.log(bandNameInput);

    // create elements and append to the DOM
    const bandNameDivContainer = document.getElementById('band-name-div-container')
    // console.log(bandNameDivContainer);
    const bandNameDiv = document.createElement('div')
    const bandNameHeader2 = document.createElement('h2')
    bandNameHeader2.innerText = bandNameInput

    // create a form to add instruments to the band
    const bandInstrumentNameForm = document.createElement('form')
    bandInstrumentNameForm.innerHTML += `<h4>Add an Instrument</h4>
                                         <input type="text" id="band-instrument-name-input">
                                         <input type="submit" value="Add Instrument">`
    console.log(bandInstrumentNameForm);

    // add event on submitting instrument names to the band 
    bandInstrumentNameForm.addEventListener('submit', addBandInstrumentName)

    // append the elements to the DOM
    bandNameDiv.append(bandNameHeader2, bandInstrumentNameForm)

    bandNameDivContainer.appendChild(bandNameDiv)

}

function addBandInstrumentName(e) {
    event.preventDefault(); // prevent the screen from refreshing on submit
    debugger;

}








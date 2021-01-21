
// declare variables
const bandNameFormDivContainer = document.getElementById('band-name-form-div-container')



// declare functions





function addBandName() {
    event.preventDefault(); // prevent the screen from refreshing on submit

    // get the value from the band name text box
    const bandNameInput = document.getElementById('band-name-input').value
    // console.log(bandNameInput);

    // create elements and append to the DOM
    const bandNameDivContainer = document.getElementById('band-name-div-container')
    // console.log(bandNameDivContainer);
    const bandNameDiv = document.createElement('div')
    const bandNameHeader3 = document.createElement('h3')
    bandNameHeader3.innerText = bandNameInput

    // create a form to add instruments to the band
    const bandInstrumentNameForm = document.createElement('form')
    bandInstrumentNameForm.innerHTML += `<h4>Add an Instrument</h4>
                                         <input type="text" id="band-instrument-name-input">
                                         <input type="submit" value="Add Instrument">`
    console.log(bandInstrumentNameForm);

    // add event on submitting instrument names to the band 
    bandInstrumentNameForm.addEventListener('submit', addBandInstrumentName)

    // append the elements to the DOM
    bandNameHeader3.appendChild(bandInstrumentNameForm)
    bandNameDiv.appendChild(bandNameHeader3)
    bandNameDivContainer.appendChild(bandNameDiv)


}

function addBandInstrumentName() {
    event.preventDefault(); // prevent the screen from refreshing on submit
    const bandInstrumentNameInput = document.getElementById('band-instrument-name-input').value
    console.log(bandInstrumentNameInput);

}








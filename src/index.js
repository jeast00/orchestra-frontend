
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

    // add a div for the band instruments
    const bandInstrumentNameDiv = document.createElement('div')

    // append the elements to the DOM
    bandNameDiv.append(bandNameHeader2, bandInstrumentNameDiv, bandInstrumentNameForm)

    console.log(bandNameDiv);

    bandNameDivContainer.appendChild(bandNameDiv)

}

function addBandInstrumentName(e) {
    event.preventDefault(); // prevent the screen from refreshing on submit
    // debugger;
    const bandInstrumentInput = e.target.children[1].value // had to throw debugger to find the input value from the e.target 
    const bandInstrumentDiv = e.target.previousElementSibling; // had to check debugger to find the div previous from the form instrument name input
    const bandInstrumentHeader3 = document.createElement('h3')
    bandInstrumentHeader3.innerText = bandInstrumentInput
    bandInstrumentDiv.append(bandInstrumentHeader3)
    // console.log(bandInstrumentInput);
    // debugger;




}








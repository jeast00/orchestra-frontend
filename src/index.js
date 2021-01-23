
// declare variables

// main url to use fetch request
const main_url = "http://localhost:3000"


// declare functions

createBandNameForm(); // call the bandNameFormFunction - will show html on page

// write a function to fetch all of the band names
function fetchBands() {
    // fetch get request
    fetch(`${main_url}/bands`)
    .then(resp => resp.json())
    .then(bands => bands.forEach(data => renderBand(data.data)))

}

// create a function to get all of the band instrument names
// function fetchInstruments() {
//     // fetch get request for instrument names
//     fetch(`${main_url}/instruments`)
//     .then(resp => resp.json())
//     .then(instruments => instruments.forEach(data => populateBandInstrumentNamesInSelect(data.data)))
// }

//----------------------------------//

// create a band name form
function createBandNameForm() {
    const bandNameFormDivContainer = document.getElementById('band-name-form-div-container')
    bandNameFormDivContainer.innerHTML += `<form>
                                            <h2>Add a Band Here:</h2>
                                            <input type="text" id="band-name-input">
                                            <input type="submit" value="Add Band">
                                            </form>`
    bandNameFormDivContainer.addEventListener('submit', addBandName) // event listener on submit with passing function call - do not invoke function
}


//---------------------------------//


// write a function to render the band names to the page
function renderBand(band) {
    // console.log(band);
    const mainDivContainer = document.getElementById('main-div-container')
    // create elements and append to the DOM
    const bandNameDivContainer = document.getElementById('band-name-div-container')
    console.log(bandNameDivContainer);

    // get the band Name Div element and set attributes
    const bandNameDiv = document.getElementById('band-name-div')
    bandNameDiv.setAttribute('id', 'band-name-div')
    bandNameDiv.setAttribute('data-id', band.id)

    const bandNameHeader2 = document.createElement('h2')
    bandNameHeader2.innerText = band.attributes.band_name

    const bandDeleteButton = document.createElement('button')
    bandDeleteButton.setAttribute('id', 'band-delete-button')
    bandDeleteButton.innerText = 'Delete Band'
    bandDeleteButton.addEventListener('click', deleteBand)

    // let band_Instruments = ""

    // for(instrument of band.instruments) {
    //     console.log(instrument)
    //     band_Instruments += `<option>${instrument.instrument_name}</option>`
    // }

    // console.log(band_Instruments)

    // // create a form to add instruments to the select drop down box
    const bandInstrumentNameSelectForm = document.createElement('form')
    bandInstrumentNameSelectForm.setAttribute('id', 'band-instrument-name-select-form')
    bandInstrumentNameSelectForm.innerHTML += `<h4>Add an Instrument:</h4>
                                        <select id="band-instrument-name-select"></select>
                                        <input type="submit" value="Add Instrument">`
    // console.log(bandInstrumentNameForm);

    // add event on submitting instrument names to the band 
    bandInstrumentNameSelectForm.addEventListener('submit', renderBandInstruments)

    

    // add a div for the band instruments
    const bandInstrumentDiv = document.createElement('div')
    band.attributes.instruments.forEach(instrument => {
        const bandInstrumentNameDiv = document.createElement('div')
        bandInstrumentNameDiv.setAttribute('data-id', instrument.id)
        const bandInstrumentNameHeader3 = document.createElement('h3')
        bandInstrumentNameHeader3.innerText = instrument.instrument_name
        bandInstrumentNameDiv.appendChild(bandInstrumentNameHeader3)
        bandInstrumentDiv.appendChild(bandInstrumentNameDiv)
    })

    // console.log(band.attributes.instruments);

    // append the elements to the DOM
    bandNameHeader2.appendChild(bandDeleteButton)
    bandNameDiv.append(bandNameHeader2, bandInstrumentDiv)
    bandNameDivContainer.appendChild(bandNameDiv)
    mainDivContainer.append(bandInstrumentNameSelectForm)

    }

// submit the band name to the DOM and save it to the database
function addBandName(e) {
    event.preventDefault(); // prevent the screen from refreshing on submit
    let bandNameInput = document.getElementById('band-name-input').value 

    const bandNameObject = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            band_name: bandNameInput
        })
    }

    fetch(`${main_url}/bands`, bandNameObject)
    .then(resp => resp.json())
    .then(data => renderBand(data.data))

    // reset the form 
    e.target.reset();
}

function renderBandInstruments(e) {
    event.preventDefault();
    // console.log(e.target.parentElement.dataset.id)
    bandInstrumentValue = e.target.children[1].value; // had to throw debugger to find the input value from the e.target 
    // debugger;
    const bandInstrumentDiv = e.target.previousElementSibling; // had to check debugger to find the div previous from the form instrument name input
    const bandID = e.target.parentElement.dataset.id
    const bandInstrumentHeader3 = document.createElement('h3')
    bandInstrumentHeader3.innerText = bandInstrumentValue
    bandInstrumentDiv.append(bandInstrumentHeader3)

    // call the addBandInstrumentName with argument to render and save the instrument name to the band
    addBandInstrumentName(bandInstrumentValue, bandID)

    // e.target.reset();
}

function addBandInstrumentName(instrument, bandID) {
    event.preventDefault(); // prevent the screen from refreshing on submit
    // debugger;
    // console.log(bandInstrumentInput);
    // debugger;

    // fetch request the instruments url for a POST to save the instrument name to the database
    fetch(`${main_url}/instruments`, {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            instrument_name: instrument,
            band_id: bandID
        })
    })

}

// function populateBandInstrumentNamesInSelect(instrument) {
//     // console.log(instrument);
//     const getBandNameDivContainer = document.getElementById('band-name-div-container')
//     const getBandDivContainer = getBandNameDivContainer.children[0]
//     console.log(getBandDivContainer);
//     let bandInstrumentOption = document.createElement('option')
//     bandInstrumentOption.innerHTML += `${instrument.attributes.instrument_name}`
//     console.log(bandInstrumentOption);
//     // getSelectTag.append(bandInstrumentOption)
// }


function deleteBand() {
    // need to get id of band name 
    // debugger;
    // event.preventDefault();
    let bandDeleteID = parseInt(event.target.parentElement.parentElement.dataset.id)
    // console.log(bandID);

    // fetch delete request with url and id of band
    fetch(`${main_url}/bands/${bandDeleteID}`, {
        method: 'DELETE'
    })
    // debugger;
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
}



// call the fetchBands function
fetchBands();

// call the fetchInstruments function
// fetchInstruments();














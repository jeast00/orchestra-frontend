document.addEventListener("DOMContentLoaded", ()=> {
    createBandNameForm();
    // fetchBandNames();
    // fetchInstrumentNames();
    // addBandName();
})

// declare variables
// const bandId = event.target.parentElement.dataset.id
// const main_url = "http://localhost:3000"

// declare functions

function createBandNameForm() {
    const bandNameFormDivContainer = document.getElementById('band-name-form-div-container')
    bandNameFormDivContainer.innerHTML += `<form>
                                            <h2>Add a Band Here:</h2>
                                            <input type="text" id="band-name-input">
                                            <input type="submit" value="Add Band">
                                            </form>`
    // console.log(bandNameFormDivContainer);
    bandNameFormDivContainer.addEventListener('submit', addBandName)
}

// function fetchBandNames() {
//     fetch(`${main_url}/bands`)
//     .then(resp => resp.json())
//     .then(bands => {
//         for(const band of bands) {
//             // console.log(band)
//             let bandName = new Band(band.id, band.band_name)
//             bandName.renderBands();
//         }
//     })
// }

// function fetchInstrumentNames() {
//     fetch(`${main_url}/instruments`)
//     .then(resp => resp.json())
//     .then(instruments => {
//         for(const instrument of instruments) {
//             let instrumentName = new Instrument(instrument.id, instrument.instrument_name, instrument.band_id)
//             instrumentName.renderBandInstrumentNames();
//             console.log(instrumentName);
//         }
//     })
// }

// function addBandName() {
//     event.preventDefault();
//     const bandNameInput = document.getElementById('band-name-input').value

//     let band = {
//         band_name: bandNameInput
//     }

//     console.log(band);

//     fetch(`${main_url}/bands`, {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(band)
//     })
//     .then(resp => resp.json())
//     .then(band => {
//         let newBandName = new Band(band.id, band.band_name)
//         newBandName.renderBands();
//     })
//     // console.log(bandNameInput);
// }

// // render band names with instrument names for each band
// function renderBands() {
//     // get element id of band name div container
//     const bandNameDivContainer = document.getElementById('band-name-div-container')

//     // create element for band name div and set the attributes for the div element
//     const bandNameDiv = document.createElement('div')
//     bandNameDiv.classList.add('band-name-div-class')
//     bandNameDiv.setAttribute('id', 'band-name-div')
//     bandNameDiv.setAttribute('data-id', this.id)

//     // create element for band name header and set the attributes for the header element
//     const bandNameHeader3 = document.createElement('h3')
//     bandNameHeader3.setAttribute('id', 'band-name-header-3')
//     bandNameHeader3.innerText = `${this.band_name}`

//     // create element for delete button and set the attributes for the delete button element
//     const bandNameDeleteButton = document.createElement('button')
//     bandNameDeleteButton.setAttribute('id', 'band-name-delete-button')
//     bandNameDeleteButton.dataset.id = id;
//     bandNameDeleteButton.innerText = "Delete Band"
//     bandNameDeleteButton.addEventListener('click', deleteBand)

//     // create a form element to add instruments to the band
    

//     // append the elements to the DOM
//     bandNameHeader3.appendChild(bandNameDeleteButton)
//     bandNameDiv.appendChild(bandNameHeader3)
//     bandNameDivContainer.appendChild(bandNameDiv)
//     // console.log(bandNameDiv);
// }

function deleteBand() {
    let bandDeleteID = parseInt(event.target.dataset.id)

    fetch(`${main_url}/bands/${bandDeleteID}`, {
        method: 'DELETE'
    })
    this.parentElement.remove(); // removes the parent element of the delete button selected - validate deletion from database
}





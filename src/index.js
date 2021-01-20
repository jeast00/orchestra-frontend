

// create variables
const bandInput = document.getElementById('band-name-input')
const main_url = "http://localhost:3000"


//fetch bands
function fetchBands() {
    fetch(`${main_url}/bands`)
    .then(resp => resp.json())
    .then(bands => {
        for(band of bands) {
            renderBand(band.band_name)
        } 
    })
}

function createBandNameForm() {
    const bandNameFormDivContainer = document.getElementById('band-name-form-div-container')
    bandNameFormDivContainer.innerHTML += `<form>
                                            <h2>Add a Band Here:</h2>
                                            <input type="text" id="band-name-input">
                                            <input type="submit" value="Add Band">
                                            </form>`
    bandNameFormDivContainer.addEventListener('submit', submitBandName)

    
}

function submitBandName() {
    // use prevent default to stop refreshing the page
    event.preventDefault();
    const configurationObject = {
        method: 'POST',
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            band_name: bandInput.value
        })
    }

    // fetch the url with the configuration object
    fetch(`${main_url}/bands`, configurationObject)

    renderBand(bandInput.value);
}

function renderBand(band) {
    // create variables to hold elements and create elements
    const bandNameDivContainer = document.getElementById('band-name-div-container')
    const bandNameValue = band
    const bandNameDiv = document.createElement('div')
    const bandNameHeader3 = document.createElement('h3')

    // append the variable names to the page
    bandNameHeader3.innerText = bandNameValue
    bandNameDiv.appendChild(bandNameHeader3)
    bandNameDivContainer.appendChild(bandNameDiv)

    

    const bandInstrumentNameFormTag = document.createElement('form')
    const bandInstrumentNameSelectTag = document.createElement('select')

    bandInstrumentNameFormTag.appendChild(bandInstrumentNameSelectTag)
    bandNameHeader3.appendChild(bandInstrumentNameFormTag)
}


fetchBands();
createBandNameForm();
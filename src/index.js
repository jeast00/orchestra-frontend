

//create const variables 
const bandNameForm = document.getElementById("band-name-form")
const bandNameValue = document.getElementById("band-name-input")
const main_url = "http://localhost:3000"

//create functions 

function fetchSavedBandNames() {
    fetch(`${main_url}/bands`)
    .then(resp => resp.json())
    .then(bands => bands.forEach(band => renderSubmittedBandName(band.band_name)))
}

bandNameForm.addEventListener("submit", submitBandName)

function renderSubmittedBandName(band) {
    // console.log(bandNameValue.value);
    const header_3 = document.createElement('h3')
    const p = document.createElement('p')
    p.innerText = band
    // console.log(p.innerText);
    header_3.appendChild(p)
    bandNameForm.appendChild(header_3)
    const deleteBandButton = document.createElement('button')
    console.log(deleteBandButton);

    bandNameForm.reset()
}


function submitBandName() {
    event.preventDefault();
    let bandObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            band_name: bandNameValue.value
        })
    }
    fetch(`${main_url}/bands`, bandObject)

    renderSubmittedBandName(bandNameValue.value);
}


fetchSavedBandNames();




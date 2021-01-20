document.addEventListener("DOMContentLoaded", ()=> {
    createBandNameForm();
    // addBandName();
})

// declare variables
const main_url = "http://localhost:3000"

// declare functions

function createBandNameForm() {
    const bandNameFormDivContainer = document.getElementById('band-name-form-div-container')
    bandNameFormDivContainer.innerHTML += `<form>
                                            <h2>Add a Band Here:</h2>
                                            <input type="text" id="band-name-input">
                                            <input type="submit" value="Add Band">
                                            </form>`
    console.log(bandNameFormDivContainer);
    bandNameFormDivContainer.addEventListener('submit', addBandName)
}

function addBandName() {
    event.preventDefault();
    const bandNameInput = document.getElementById('band-name-input').value 

    let band = {
        band_name: bandNameInput
    }
    fetch(`${main_url}/bands`, {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(band)
    })
    .then(resp => console.log(resp))
    // console.log(bandNameInput);
}





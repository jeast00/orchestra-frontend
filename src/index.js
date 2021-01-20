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

    console.log(bandNameInput);
}





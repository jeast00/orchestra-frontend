
function createBandNameForm() {
    const bandNameFormDivContainer = document.getElementById('band-name-form-div-container')
    bandNameFormDivContainer.innerHTML += `<form>
                                            <h2>Add a Band Here:</h2>
                                            <input type="text" id="band-name-form-input">
                                            <input type="submit" value="Add Band">
                                            </form>`
    bandNameFormDivContainer.addEventListener('submit', submitBandName)
}

createBandNameForm();

function submitBandName() {
    event.preventDefault();
    let bandNameValue = document.getElementById('band-name-form-input').value 
    console.log(bandNameValue);

    let band = {
        band_name: bandNameValue
    }

    // console.log(band);

}

function renderBand() {
    const bandNameDivContainer = document.getElementById('band-name-div-container')
    // console.log(bandNameDivContainer);
    
}

renderBand();






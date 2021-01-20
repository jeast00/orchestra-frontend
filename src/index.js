




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
    event.preventDefault();
    const bandNameValue = document.getElementById('band-name-input').value 
    console.log(bandNameValue);
}

createBandNameForm();
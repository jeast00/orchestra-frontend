

//create const variables 
const main_url = "http://localhost:3000"

//create functions 


// fetch band name form create function
function createBandNameForm() {
    let bandNameFormDivContainer = document.getElementById("band-name-form-div-container")
    bandNameFormDivContainer.innerHTML += `<form>
                                            <h2>Add a Band Here:</h2>
                                            <input type="text" id="band-name-input">
                                            <input type="submit" value="Add Band">
                                          </form>`

    bandNameFormDivContainer.addEventListener("submit", submitBandName)
    
}

function submitBandName() {
    event.preventDefault();
    let bandNameValue = document.getElementById("band-name-input").value
    console.log(bandNameValue);
}

createBandNameForm();









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

    // create variables to hold elements and create elements
    const bandNameDivContainer = document.getElementById('band-name-div-container')
    const bandNameValue = document.getElementById('band-name-input').value 
    const bandNameDiv = document.createElement('div')
    const bandNameHeader3 = document.createElement('h3')

    // append the variable names to the page
    bandNameHeader3.innerText = bandNameValue
    bandNameDiv.appendChild(bandNameHeader3)
    bandNameDivContainer.appendChild(bandNameDiv)

    // console.log(bandNameDivContainer);

}

createBandNameForm();
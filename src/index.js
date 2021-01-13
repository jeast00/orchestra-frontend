
// load the DOM content with an anonymous function
document.addEventListener("DOMContentLoaded", () => {
    // add functions to load to page
    // debugger;
    createBandNameForm();
    fetchBandNames();
})

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
    
}



// fetch band names function
function fetchBandNames() {
    fetch(`${main_url}/bands`)
    .then(resp => resp.json())
    .then(bands => {
        for(const band of bands) {
            let bandName = new Band(band.id, band.band_name)
            // console.log(bandName);
            bandName.renderBandNames();
        }
    })
}



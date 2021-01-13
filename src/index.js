
// load the DOM content with an anonymous function
document.addEventListener("DOMContentLoaded", () => {
    // add functions to load to page
    // debugger;
    fetchBandNames();
})

//create const variables 
const main_url = "http://localhost:3000"

//create functions 

function fetchBandNames() {
    fetch(`${main_url}/bands`)
    .then(resp => resp.json())
    .then(console.log)
}



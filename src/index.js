

//create const variables 
const bandNameForm = document.getElementById("band-name-form")
const bandNameValue = document.getElementById("band-name-input")
// const main_url = "http://localhost:3000"

//create functions 

bandNameForm.addEventListener("submit", submitBandName)


function submitBandName() {
    event.preventDefault();
    // console.log(bandNameValue.value);
    const header_3 = document.createElement('h3')
    const p = document.createElement('p')
    p.innerText = bandNameValue.value
    // console.log(p.innerText);
    header_3.appendChild(p)
    bandNameForm.appendChild(header_3)

    bandNameForm.reset()

}





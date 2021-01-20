class Band {
    constructor(id, band_name) {
        this.id = id
        this.band_name = band_name
    }

    // render band names with instrument names for each band
    renderBands() {
        // get element id of band name div container
        const bandNameDivContainer = document.getElementById('band-name-div-container')

        // create element for band name div and set the attributes for the div element
        const bandNameDiv = document.createElement('div')
        bandNameDiv.classList.add('band-name-div-class')
        bandNameDiv.setAttribute('id', 'band-name-div')
        bandNameDiv.setAttribute('data-id', this.id)

        // create element for band name header and set the attributes for the header element
        const bandNameHeader3 = document.createElement('h3')
        bandNameHeader3.setAttribute('id', 'band-name-header-3')
        bandNameHeader3.innerText = `${this.band_name}`

        // create element for delete button and set the attributes for the delete button element
        const bandNameDeleteButton = document.createElement('button')
        bandNameDeleteButton.setAttribute('id', 'band-name-delete-button')
        bandNameDeleteButton.setAttribute('data-id', this.id)
        bandNameDeleteButton.innerText = "Delete Band"
        bandNameDeleteButton.addEventListener('click', this.deleteBand)

        // create a form element to add instruments to the band
        

        // append the elements to the DOM
        bandNameHeader3.appendChild(bandNameDeleteButton)
        bandNameDiv.appendChild(bandNameHeader3)
        bandNameDivContainer.appendChild(bandNameDiv)
        // console.log(bandNameDiv);
    }

    deleteBand() {
        let bandDeleteID = parseInt(event.target.dataset.id)

        fetch(`${main_url}/bands/${bandDeleteID}`, {
            method: 'DELETE'
        })
        this.parentElement.remove(); // removes the parent element of the delete button selected - validate deletion from database
    }
}
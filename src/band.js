class Band {
    constructor(id, band_name) {
        this.id = id
        this.band_name = band_name
    }

    // render band names with instrument names for each band
    renderBands(band) {
        // get element id of band name div container
        const bandNameDivContainer = document.getElementById('band-name-div-container')

        // create element for band name div
        const bandNameDiv = document.createElement('div')
        bandNameDiv.setAttribute('id', 'band-name-div')
        bandNameDiv.setAttribute('data-id', this.id)

        // create element for band name header
        const bandNameHeader3 = document.createElement('h3')
        bandNameHeader3.setAttribute('id', 'band-name-header-3')
        bandNameHeader3.innerText = `${this.band_name}`

        // create lement for delete button
        const bandNameDeleteButton = document.createElement('button')
        bandNameDeleteButton.setAttribute('id', 'band-name-delete-button')
        bandNameDeleteButton.setAttribute('data-id', this.id)
        bandNameDeleteButton.innerText = "Delete Band"


        bandNameHeader3.appendChild(bandNameDeleteButton)
        bandNameDiv.appendChild(bandNameHeader3)
        bandNameDivContainer.appendChild(bandNameDiv)
        console.log(bandNameDiv);
    }
}
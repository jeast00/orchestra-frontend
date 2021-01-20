class Band {
    constructor(id, band_name) {
        this.id = id
        this.band_name = band_name
    }

    // render band names with instrument names for each band
    renderBands() {
        const bandNameDivContainer = document.getElementById('band-name-div-container')

        const bandNameDiv = document.createElement('div')
        bandNameDiv.setAttribute('id', 'band-name-div')
        bandNameDiv.setAttribute('data-id', this.id)

        const bandNameHeader3 = document.createElement('h3')
        bandNameHeader3.setAttribute('id', 'band-name-header-3')
        bandNameHeader3.innerText = `${this.band_name}`

        bandNameDiv.appendChild(bandNameHeader3)
        bandNameDivContainer.appendChild(bandNameDiv)
        console.log(bandNameDivContainer);
    }
}
class Band {
    constructor(id, band_name) {
        this.id = id
        this.band_name = band_name
    }


    // render bands

    renderBandNames() {
        let bandNameDivContainer = document.getElementById("band-name-div-container")
        // Don't use innerHTML when creating elements
        //create a div inside the band div container - create element button - append to div
        // store dataset 
        //review study groups - general - check video study groups

        // DO NOT USE!!
        // bandNameDivContainer.innerHTML += `<h3>${this.band_name}</h3>
        //                                   <button class="delete-band-button">Delete Band</button>`

        let bandNameDiv = document.createElement('div')
        let bandNameHeader = document.createElement('h3')
        let bandNameDeleteButton = document.createElement('button')
        bandNameDiv.classList.add('band-name-class')
        bandNameHeader.classList.add('band-name-header-3')
        bandNameDeleteButton.classList.add('band-name-delete-button')
        bandNameDiv.setAttribute('data-id', this.id)
        bandNameDeleteButton.setAttribute('data-id', this.id)
        console.log(bandNameDiv, bandNameHeader, bandNameDeleteButton);

        debugger;
    }
}
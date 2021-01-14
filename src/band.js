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
        bandNameDivContainer.innerHTML += `<h3>${this.band_name}</h3>
                                          <button class="delete-band-button">Delete Band</button>`
    }
}
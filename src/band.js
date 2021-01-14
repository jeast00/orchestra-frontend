class Band {
    constructor(id, band_name) {
        this.id = id
        this.band_name = band_name
    }


    // render bands

    renderBandNames() {
        let bandNameDivContainer = document.getElementById("band-name-div-container")
        bandNameDivContainer.innerHTML += `<h3>${this.band_name}</h3>`
    }
}
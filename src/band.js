class Band {
    constructor(band) {
        this.id = band.id
        this.band_name = band.band_name
    }

    // render band names with instrument names for each band
    renderBands() {
        const bandNameDivContainer = document.getElementById('band-name-div-container')
        console.log(bandNameDivContainer);
    }
}
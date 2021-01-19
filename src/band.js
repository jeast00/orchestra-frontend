class Band {
    constructor(id, band_name) {
        this.id = id
        this.band_name = band_name
    }


    // render band names

    renderBandNames() {
        let bandNameDivContainer = document.getElementById("band-name-div-container")
        // Don't use innerHTML when creating elements
        //create a div inside the band div container - create element button - append to div
        // store dataset 
        //review study groups - general - check video study groups

        // DO NOT USE!!
        // bandNameDivContainer.innerHTML += `<h3>${this.band_name}</h3>
        //                                   <button class="delete-band-button">Delete Band</button>`

        const bandNameDiv = document.createElement('div')
        const bandNameHeader = document.createElement('h3')
        const p_bandName = document.createElement('p')
        const bandNameDeleteButton = document.createElement('button')
        bandNameDiv.setAttribute('id', 'band-name-div')
        bandNameHeader.setAttribute('id', "band-name-head-3")
        p_bandName.setAttribute('id', 'p-band-name')
        bandNameDiv.classList.add('band-name-class')
        bandNameHeader.classList.add('band-name-header-3')
        p_bandName.classList.add('p-band-name-class')
        bandNameDeleteButton.classList.add('band-name-delete-button')
        bandNameDiv.setAttribute('data-id', this.id)
        bandNameDeleteButton.setAttribute('data-id', this.id)
        bandNameDeleteButton.addEventListener('click', this.deleteBand)
        // bandNameDeleteButton.setAttribute('onclick', "window.location.reload()")
        bandNameDeleteButton.innerText = 'Delete Band'
        bandNameHeader.innerText = `${this.band_name}`
        bandNameHeader.appendChild(bandNameDeleteButton)
        p_bandName.appendChild(bandNameHeader)
        bandNameDiv.appendChild(p_bandName)
        bandNameDivContainer.appendChild(bandNameDiv)
        // console.log(bandNameDiv, bandNameHeader, bandNameDeleteButton);
        // console.log(bandNameDiv);
        // debugger;
    }

    //delete band function

    deleteBand() {
        event.preventDefault(event);
        let deleteBandID = parseInt(event.target.dataset.id)

        fetch(`${main_url}/bands/${deleteBandID}`, {
            method: "DELETE"
        })
        this.parentElement.remove();
    }
}
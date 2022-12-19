// instantiate the country api object
const country = new Country

// instatiate the UI object
const ui = new UI

const input = document.getElementById('input')

const search = document.getElementById('search')

search.addEventListener('click', (e) => {

    if(input.value  !== ''){

    // let countryName = input.value
    let countryName = input.value

    country.getCountry(countryName) 
        .then(data => {
            ui.showDetails(data.fullResponse[0])



        })   

    }else{
        ui.showAlert()
    }
 
    e.preventDefault()

})
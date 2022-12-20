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

            if(!data.fullResponse[0]){
                ui.showAlert('please enter a valid country name...')
            } else{
            ui.showDetails(data.fullResponse[0])
            }

        })   

    }else{
        // show error alert
        ui.showAlert('please input a country name...')
    }
 
    e.preventDefault()

})
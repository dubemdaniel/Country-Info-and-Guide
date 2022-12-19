// instantiate the country api object
const country = new Country

const input = document.getElementById('input')

const search = document.getElementById('search')

search.addEventListener('click', (e) => {

    if(input.value == ''){

    // let countryName = input.value
    let countryName = "nigeria"

    country.getCountry(countryName) 
        .then(data => {
            console.log(data.fullResponse[0])
            console.log(data.fullResponse[0].capital[0])
            console.log(data.fullResponse[0].flags.svg)
            console.log(data.fullResponse[0].name.common)
            console.log(data.fullResponse[0].population)
            console.log(data.fullResponse[0].languages)
            console.log(Object.keys(data.fullResponse[0].currencies)[0])
            console.log(data.fullResponse[0].currencies[Object.keys(data.fullResponse[0].currencies)].name)
            console.log(Object.values(data.fullResponse[0].languages).toString().split(",").join(", "))



        })   

    }
 
    e.preventDefault()

})
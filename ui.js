class UI{
    constructor(){
        this.main = document.getElementById('main')
    }


    showDetails(digit){
        this.main.innerHTML = `
        <div class="my-6">
            <img src="${digit.flags.svg}" alt="" class="max-w-xs mx-auto">
            <h2 class="flex justify-center my-4 text-3xl font-semibold uppercase">${digit.name.common}</h2>
        </div>
        <div class="px-3 my-12 text-xl leading-10 capitalize sm:text-2xl sm:leading-loose">
            <h2><span class="font-semibold">capital</span>: ${digit.capital}</h2>
            <h2><span class="font-semibold">continent</span>: ${digit.continents}</h2>
            <h2><span class="font-semibold">population</span>: ${digit.population}</h2>
            <h2><span class="font-semibold">currency</span>: ${digit.currencies[Object.keys(digit.currencies)].name} - ${Object.keys(digit.currencies)}</h2>
            <h2><span class="font-semibold">common language</span> : ${Object.values(digit.languages).toString().split(",").join(", ")}</h2>
        </div>
        `

        // console.log(data.fullResponse)
        // console.log(data.fullResponse.capital)
        // console.log(data.fullResponse.flags.svg)
        // console.log(data.fullResponse.name.common)
        // console.log(data.fullResponse.population)
        // console.log(data.fullResponse.languages)
        // console.log(Object.keys(data.fullResponse.currencies))
        // console.log(data.fullResponse.currencies[Object.keys(data.fullResponse.currencies)].name)
        // console.log(Object.values(data.fullResponse.languages).toString().split(",").join(", "))

    }
}
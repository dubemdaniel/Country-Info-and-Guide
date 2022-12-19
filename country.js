class Country {
    constructor(){}

    async getCountry(details){
        
        const response = await fetch(`https://restcountries.com/v3.1/name/${details}?fullText=true`);

        const fullResponse = await response.json();

        return {

            fullResponse
        }
    }
}
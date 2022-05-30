const countryallAPi = `https://restcountries.com/v3.1/all`
const content = document.querySelector('.dis__all__country .grid .row')
const search__value = document.querySelector('.src')
var select = document.getElementById("con");
function getAll(){
    getAllCountry(displayALlcountry)
}

function displayALlcountry(countries){
  const htmls = countries.map(country => {
      return ` 
      <div class="col l-3 m-6 c-12">
      <div class="country__box">
       <div class="img__box">
        <img src="${country.flags.png}" alt="" class="flags__img">
       </div>
        <div class="txt__box">
            <p class="title">Name: ${country.name.common}</p>
            <p class="population">population: ${country.population}</p>
            <p class="region">region: ${country.region}</p>
        </div>
      </div>
      </div>
      `
  })
  content.innerHTML = htmls.join('')
}

function getAllCountry(callback){
    fetch(countryallAPi)
    .then(response => {return response.json('')})
    .then(callback)
}

function get__src(){
    search__value.addEventListener('keypress',e => {
        if (e.keyCode == 13 &&  search__value.value != ''){
          
           get__src__country(search__value.value.trim())
           search__value.value = ''
        }
    })
}

function get__src__country(country){
    const srcAPi = `https://restcountries.com/v2/name/${country}?fullText=true`
    fetch(srcAPi)
    .then(response => {return response.json('')})
    .then(displayCountry)
    .catch(displayError)
}

function displayCountry(Country){
  
  const htmls = Country.map(country => {
    const cur = country.currencies.map(country => {
        return `${country.name}`
    })
     const lan = country.languages.map(country => {
         return `${country.name}`
     })
 
      return `
      <div class="col l-12 m-12 c-12">
      <div class="country__detail">
       <div class="img__box">
        <img src="${country.flags.png}" alt="" class="flags__img">
       </div>
        <div class="txt__box">
            <p class="title">Name: ${country.name}</p>
            <p class="population">population: ${country.population}</p>
            <p class="region">region: ${country.region}</p>
            <p class="languages">Languages: ${lan}</p>
            <p class="currencies">currencies: ${cur}</p>
        </div>
      </div>
      </div>
      
      `
  })
  content.innerHTML = htmls.join('')
}
function displayError()
{
    content.innerHTML = `  <p class="err">Value Could Not Be Found</p>`
}





select.addEventListener('change', function handleChange(event) {
  const countryApi = `https://restcountries.com/v3.1/region/${select.options[select.selectedIndex].text}`
  function getAll(){
  getCountry(render)
}

function render(countries){
   const htmls = countries.map(country => {
     return `<div class="col l-3 m-6 c-12">
     <div class="country__box">
      <div class="img__box">
       <img src="${country.flags.png}" alt="" class="flags__img">
      </div>
       <div class="txt__box">
           <p class="title">Name: ${country.name.common}</p>
           <p class="population">population: ${country.population}</p>
           <p class="region">region: ${country.region}</p>
       </div>
     </div>
     </div>`
   })
   content.innerHTML = htmls.join('')
}

function getCountry(callback){
  
  fetch(countryApi)
  .then(response => {return response.json('')})
  .then(callback)

}
getAll()


});

getAll()
get__src()
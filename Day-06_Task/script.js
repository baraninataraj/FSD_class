//Get all the countries from Asia continent /region using Filter method
var todosAPi = "https://restcountries.com/v3.1/all";

var todoRequest = new XMLHttpRequest();

todoRequest.onreadystatechange = function () {
  var countryData = JSON.parse(this.response);
  console.log(countryData);
  let asia=countryData.filter((element)=>{
    if(element.region==='Asia'){
        return element.name;
    }
});
console.log(asia);
};

todoRequest.open("GET", todosAPi);
todoRequest.send();

console.log(todoRequest);



//Get all the countries with a population of less than 2 lakhs using Filter method
var todosAPi = "https://restcountries.com/v3.1/all";

var todoRequest = new XMLHttpRequest();

todoRequest.onreadystatechange = function () {
  var countryData = JSON.parse(this.response);
  console.log(countryData);
  let pop = countryData.filter((element) => {
    return element.population < 200000;
})
console.log(pop);}

todoRequest.open("GET", todosAPi);
todoRequest.send();

console.log(todoRequest);

//Print the following details name, capital, flag, using forEach method
var todosAPi = "https://restcountries.com/v3.1/all";

var todoRequest = new XMLHttpRequest();

todoRequest.onreadystatechange = function () {
  
  var countryData = JSON.parse(this.response);
  console.log(countryData);
  countryData.forEach((element) => {
    console.log(element.name, element.capital, element.flags);
  })}


todoRequest.open("GET", todosAPi);
todoRequest.send();

console.log(todoRequest);

//Print the total population of countries using reduce method
//var todosAPi = "https://restcountries.com/v3.1/all";

//var todoRequest = new XMLHttpRequest();

//todoRequest.onreadystatechange = function () {
 // var countryData = JSON.parse(this.response);
 // console.log(countryData);
  //const poulation = function pop((carry, nextElement){
   // console.log(carry, nextElement);
    //if (typeOf carry === "object"){
    //    return carry.population + nextElement.population
    //} else { return carry + nextElement.population
    //        }
    //var output = countryData.reduce(pop);
    //console.log(output);
   // });
//};

//todoRequest.open("GET", todosAPi);
//todoRequest.send();

console.log(todoRequest);

//Print the country that uses US dollars as currency.
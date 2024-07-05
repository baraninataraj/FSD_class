//Get all the countries from Asia continent /region using Filter method
var todosAPi = "https://restcountries.com/v3.1/all";

var todoRequest = new XMLHttpRequest();

todoRequest.onreadystatechange = function () {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200){
  var countryData = JSON.parse(this.response);
  let asia=countryData.filter((element)=>{
    if(element.region==='Asia'){
        return element.name;
    }
});
console.log(asia);
};
}

todoRequest.open("GET", todosAPi);
todoRequest.send();

console.log(todoRequest);



//Get all the countries with a population of less than 2 lakhs using Filter method
var todosAPi = "https://restcountries.com/v3.1/all";

var todoRequest = new XMLHttpRequest();

todoRequest.onreadystatechange = function () {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200){
  var countryData = JSON.parse(this.response);
  let pop = countryData.filter((element) => {
    return element.population < 200000;
})
console.log(pop);}
}

todoRequest.open("GET", todosAPi);
todoRequest.send();

console.log(todoRequest);

//Print the following details name, capital, flag, using forEach method
var request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    var countryData=JSON.parse(this.response);
      countryData.forEach((element) => {
        console.log(element.name);
        console.log(element.capital);
        console.log(element.flags);
      })}

//Print the total population of countries using reduce method


//Print the country that uses US dollars as currency.
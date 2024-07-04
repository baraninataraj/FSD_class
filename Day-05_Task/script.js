//The class Movie is stated below. An instance of class Movie represents a film. 
//This class has the following three properties:

//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
//rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)
//a) Write a constructor for the class Movie, which takes a String representing the title of the movie,
// a String representing the studio, and a String representing the rating as its arguments, 
// and sets the respective class properties to these values.

//b) The constructor for the class Movie will set the class property rating to "PG" 
//  as default when no rating is provided.

//c) Write a method getPG, which takes an array of base type Movie as its argument, 
// and returns a new array of only those movies in the input array with a rating of "PG". 
// You may assume the input array is full of Movie instances. The returned array need not be full.

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, 
//the studio “Eon Productions”, and the rating “PG­13”

class movie{
    constructor(title, studio, rating = "PG")
    {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
        static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}
const movieA = new movie("Casino Royale", "Eon Productions", "PG13");
const movieB = new movie("Casino Royale", "Eon Productions", "PG");
const movieC = new movie("Casino", "Eon Productions");
const movies = [movieA, movieB, movieC];
const pgMovies = movie.getPG(movies);


console.log(movieA.rating);
console.log(movieC.rating);
console.log(pgMovies);
console.log(movieA);

Output:
PG13

PG

[ movie {
    title: 'Casino Royale',
    studio: 'Eon Productions',
    rating: 'PG' },
  movie { title: 'Casino', studio: 'Eon Productions', rating: 'PG' } ]

movie {
  title: 'Casino Royale',
  studio: 'Eon Productions',
  rating: 'PG13' }

//Circle - Class
//Convert the UML diagram to Typescript class. - use number for double




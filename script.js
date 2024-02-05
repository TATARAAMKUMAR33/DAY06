//1.a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.
	
class movie{
    constructor(title,studio,rating)
    {
     this.title=title;
     this.studio=studio;
     this.rating=rating;
  }
  }
  var movieDetails=new movie("Ms.Dhoni The untold story","zee studio","PG­13");
  console.log(movieDetails); 

  //output
movie {
    title: 'Ms.Dhoni The untold story',
    studio: 'zee studio',
    rating: 'PG­13' }



    //b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

	class movie{
        constructor(title,studio,rating = "PG")
        {
         this.title=title;
         this.studio=studio;
         this.rating=rating;
      }
      }
      var movieDetails=new movie("Ms.Dhoni The untold story","zee studio");
      console.log(movieDetails);
  
  //output
  movie {
    title: 'Ms.Dhoni The untold story',
    studio: 'zee studio',
    rating: 'PG' }



    //c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

class Movie {
    constructor(title, rating) {
      this.title = title;
      this.rating = rating;
    }
  }
  
  function getpg(movies) {
    const pgMovies = movies.filter((movie) => movie.rating === "PG");
    return pgMovies;
  }
  
  const movies = [
    new Movie("Evil dead", "PG"),
    new Movie("beauty and beast", "PG-13"),
    new Movie("fast and furious", "PG"),
    new Movie("life of PI", "G")
  ];
  
  const pgMovies = getpg(movies);
  console.log(pgMovies); 

  //output
[ Movie { title: 'Evil dead', rating: 'PG' },
Movie { title: 'fast and furious', rating: 'PG' } ]


//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13”
	class movie{
	  constructor(title,studio,rating)
	  {
	   this.title=title;
	   this.studio=studio;
	   this.rating=rating;
	}
	}
	var CasinoRoyale=new movie("Casino Royale","Eon Productions","PG13");
	console.log(CasinoRoyale);

//Output
 movie {
  title: 'Casino Royale',
  studio: 'Eon Productions',
  rating: 'PG13' }



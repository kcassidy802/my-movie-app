/*Using what you've learned this week, create a page of an application that enables users to vote and leave reviews on movies.
All data necessary for this assignment, including Movies and Reviews, can be pulled from an API or you can create the Movies and their Reviews yourself.
Your application must include the following components:
MovieList: a container for all the Movie components and their data.  
Movie: a component that represents movie data (i.e. image, synopsis, rating, etc…)
Stars: a one to five-star rating component that allows users to rate something (movies in this case, but remember that components are reusable, so you could use it elsewhere!)
ReviewList: a container inside of a Movie that houses Review components.
Review: A text review a user can leave on a movie.
ReviewForm: a form at the bottom of a Movie component that allows users to leave reviews. When submitted, the review should be added to the movie. All this data can be stored in an array, no networking or database needed for this assignment.*/



import React from "react";
import Movie from "./components/Movie";  //importing our react components to our app.js file

const moviesData = [ // This is the movie that we are reviewing including an image of the film and i left the first review
  {
    id: 1,
    title: "Donnie Darko",
    poster:
      "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p27378_p_v8_aq.jpg",
    synopsis:
      "During the presidential election of 1988, a teenager named Donnie Darko sleepwalks out of his house one night and sees a giant, demonic-looking rabbit named Frank, who tells him the world will end in 28 days. When Donnie returns home, he finds that a jet engine has crashed into his bedroom. Is Donnie living in a parallel universe, is he suffering from mental illness - or will the world really end?",
    reviews: [
      {
        text: "One of my favorite if not my favorite movie of all time",
        rating: 5,
      },
    ],
  },
];

const App = () => {
  return (
    <div    //just some inner html to have it in the center of the page and aligning the text in the center to
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div> 
        <h1 style={{ textAlign: "center" }}>Movie Voting and Reviews</h1>  
        {moviesData.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default App;

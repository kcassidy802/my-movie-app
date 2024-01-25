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

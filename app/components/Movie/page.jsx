"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Movie = () => {
  const [movieList, setMovieList] = useState([]);

  const getMovie = async () => {
    try {
      const response = await axios.get(
        "https://api.themoviedb.org/3/discover/movie",
        {
          params: {
            api_key: process.env.NEXT_PUBLIC_API_KEY,
          },
        }
      );

      setMovieList(response.data.results);
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieList)
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-x-[-5]">
      {movieList.map((movie) => (
        <Link href={`/movie/${movie.id}`} key={movie.id}>
          <div className=" ">
            <img
              className="cursor-pointer"
              key={movie.id}
              style={{ width: "300px", height: "250px" }}
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2 className="text-lg font-semibold my-3 cursor-pointer">
              {movie.title}
            </h2>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Movie;

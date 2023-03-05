import React, { useEffect, useRef, useState } from "react";
import { Movie } from "../typings";
import Thumbnail from "./Thumbnail";

interface Props {
  title: string;
  movies: Movie[];

}

function MoviePage({ movies, title }: Props) {
  
  return (
    <div className="h-40 space-y-0.5 md:space-y-6">
      <h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
        {title}
      </h2>
      <div className="group relative md:-ml-2">
        <div
          className="flex items-center space-x-3 space-y-4 flex-wrap md:space-x-2.5 md:p-2 scrollbar-hide">
          {movies.map((movie, index) => (
            <div className="flex flex-col">
              <Thumbnail key={movie.id || movie.name.toString()} movie={movie} />

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default MoviePage
import React from "react";
import { useLoaderData } from "react-router-dom";

const MovieDetails = () => {
  const movieDetails = useLoaderData();
  const {
    Title,
    Year,
    imdbID,
    Type,
    Poster,
    Actors,
    Ratings: [{ Value: imdbRating }],
    Plot,
    Genre,
    Runtime,
  } = movieDetails;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="grid md:grid-cols-[300px_1fr] gap-8">
        {/* Poster Section */}
        <div className="flex flex-col items-center">
          <img
            src={Poster !== "N/A" ? Poster : "/api/placeholder/300/450"}
            alt={`${Title} Poster`}
            className="w-full max-w-[300px] rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Movie Details Section */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">{Title}</h1>

          {/* Movie Metadata */}
          <div className="grid grid-cols-2 gap-4 mb-6 text-gray-600">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">📅</span>
              <span>{Year}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">🏷️</span>
              <span>{Type.charAt(0).toUpperCase() + Type.slice(1)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-500">⭐</span>
              <span>IMDb: {imdbRating}</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-purple-500">⏰</span>
              <span>{Runtime}</span>
            </div>
          </div>

          {/* Genre */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Genre</h3>
            <div className="flex flex-wrap gap-2">
              {Genre.split(", ").map((genre) => (
                <span
                  key={genre}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>

          {/* Plot */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Plot</h3>
            <p className="text-gray-600 leading-relaxed">{Plot}</p>
          </div>

          {/* Actors */}
          <div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Actors</h3>
            <div className="flex flex-wrap gap-2">
              {Actors.split(", ").map((actor) => (
                <span
                  key={actor}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                >
                  {actor}
                </span>
              ))}
            </div>
          </div>

          {/* IMDb Link */}
          <div className="mt-6">
            <a
              href={`https://www.imdb.com/title/${imdbID}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition-colors"
            >
              View on IMDb
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {
  const { Title, Year, Poster, imdbID, Type } = movie;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row">
        {/* Poster Section */}
        <div className="sm:w-48 md:w-56 flex-shrink-0">
          {Poster && Poster !== "N/A" ? (
            <img
              src={Poster}
              alt={`${Title} poster`}
              className="w-full h-full object-cover sm:h-72"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-48 sm:h-72 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-center px-4">
                No Image Available
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-gray-800">{Title}</h3>
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded ml-2 flex-shrink-0">
              {Type}
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-4">{Year}</p>

          <p className="text-gray-600 mb-4 flex-grow">
            A {Type} released in {Year}. Click below to view more details about
            "{Title}".
          </p>

          <div className="mt-auto flex justify-end">
            <Link
              to={`/movies/${imdbID}`}
              className="bg-blue-600 text-white py-2 px-6 rounded font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;

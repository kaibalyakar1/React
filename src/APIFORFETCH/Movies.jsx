import React, { useState } from "react";
import { useLoaderData, useNavigate, useSearchParams } from "react-router-dom";
import Cards from "./Cards.jsx";

const Movies = () => {
  const loader = useLoaderData(); // already data got fetched before rendering
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [sortOrder, setSortOrder] = useState("default");

  const currentSearch = searchParams.get("search") || "titanic";
  const totalResults = parseInt(loader.totalResults) || 0;

  // Handle sorting
  const handleSort = (e) => {
    setSortOrder(e.target.value);
  };

  // Sort movies based on selected option
  const sortedMovies = [...loader.Search].sort((a, b) => {
    if (sortOrder === "yearAsc") {
      return parseInt(a.Year) - parseInt(b.Year);
    } else if (sortOrder === "yearDesc") {
      return parseInt(b.Year) - parseInt(a.Year);
    } else if (sortOrder === "titleAsc") {
      return a.Title.localeCompare(b.Title);
    } else if (sortOrder === "titleDesc") {
      return b.Title.localeCompare(a.Title);
    }
    return 0;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 rounded-lg shadow-lg mb-8 p-6 text-white">
        <h1 className="text-3xl font-bold mb-2">Movies: {currentSearch}</h1>
        <p className="text-blue-100">Found {totalResults} results</p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="bg-white p-3 rounded-lg shadow flex items-center gap-2 w-full sm:w-auto">
          <span className="text-gray-700">Sort by:</span>
          <select
            className="bg-gray-100 border border-gray-300 rounded py-1 px-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={sortOrder}
            onChange={handleSort}
          >
            <option value="default">Default</option>
            <option value="yearAsc">Year (Oldest first)</option>
            <option value="yearDesc">Year (Newest first)</option>
            <option value="titleAsc">Title (A-Z)</option>
            <option value="titleDesc">Title (Z-A)</option>
          </select>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow transition-colors w-full sm:w-auto"
        >
          New Search
        </button>
      </div>

      {loader.Search && loader.Search.length > 0 ? (
        <div className="space-y-4">
          {sortedMovies.map((movie) => (
            <Cards key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold text-gray-700">No movies found</h2>
          <p className="text-gray-600 mt-2">Try a different search term</p>
        </div>
      )}

      {totalResults > 10 && (
        <div className="mt-8 flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow transition-colors">
            Load More Results
          </button>
        </div>
      )}
    </div>
  );
};

export default Movies;

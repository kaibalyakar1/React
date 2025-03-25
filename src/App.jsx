import React from "react";
import Home from "./Home";
import { BioProvider } from "./contextApi";
import Index, { Usereducer } from "./USEREDUCER";
import Memo from "./USEMEMO";
import Useref from "./USEREF/Useref";
import Usecallback from "./USECALLBACK/Usecallback";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Componenets/AppLayout";
import Movies from "./APIFORFETCH/Movies";
import { getMoviesData } from "./APIFORFETCH/GetApiData";
import About from "./APIFORFETCH/About";
import Loader from "./APIFORFETCH/Loader";
import MovieDetails from "./APIFORFETCH/MovieDetails";
import { fetchMoviewDetails } from "./APIFORFETCH/fetchMoviewDetails";

const App = () => {
  const fakeLoader = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2s loading
    return null;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { path: "/usecallback", element: <Usecallback /> },
        { path: "/useref", element: <Useref /> },
        { path: "/usememo", element: <Memo /> },
        { path: "/usereducer", element: <Usereducer /> },
        { path: "/", element: <Home /> },
        {
          path: "/movies",
          element: <Movies />,
          loader: getMoviesData,
        },
        {
          path: "/movies/:id",
          element: <MovieDetails />,
          loader: fetchMoviewDetails,
        },
        {
          path: "/aboutt",
          element: <About />,
          loader: fakeLoader,
        },
      ],
    },
  ]);

  return (
    <BioProvider>
      <RouterProvider router={router}>
        <Loader /> {/* 👈 Move Loader inside RouterProvider */}
      </RouterProvider>
    </BioProvider>
  );
};

export default App;

import React, { Suspense } from "react";
import Home from "./Home";
import { BioProvider } from "./contextApi";
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
import { getPosts } from "./AXIOS/PostApi";
import Axs, { LoadingGrid } from "./AXIOS/Axs";
import Accordion from "./ACCORDION/Accordion";
import FormsValidation from "./FORM VALIDATION/FormsValidation";
import UseReducer from "./USEREDUCER/index.jsx";

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
        { path: "/usereducer", element: <UseReducer /> },
        { path: "/", element: <Home /> },
        { path: "/accordion", element: <Accordion /> },
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
        {
          path: "/formvalidation",
          element: <FormsValidation />,
        },

        {
          path: "/axs",
          element: (
            <Suspense fallback={<LoadingGrid />}>
              <Axs />
            </Suspense>
          ),
          loader: getPosts,
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

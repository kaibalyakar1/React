import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BioProvider } from "./contextApi";
import Loader from "./APIFORFETCH/Loader";
import { getMoviesData } from "./APIFORFETCH/GetApiData";
import { fetchMoviewDetails } from "./APIFORFETCH/fetchMoviewDetails";
import { getPosts } from "./AXIOS/PostApi";

// Lazy load all components
const Home = lazy(() => import("./Home"));
const Memo = lazy(() => import("./USEMEMO"));
const Useref = lazy(() => import("./USEREF/Useref"));
const Usecallback = lazy(() => import("./USECALLBACK/Usecallback"));
const AppLayout = lazy(() => import("./Componenets/AppLayout"));
const Movies = lazy(() => import("./APIFORFETCH/Movies"));
const About = lazy(() => import("./APIFORFETCH/About"));
const MovieDetails = lazy(() => import("./APIFORFETCH/MovieDetails"));
const Axs = lazy(() => import("./AXIOS/Axs"));
const Accordion = lazy(() => import("./ACCORDION/Accordion"));
const FormsValidation = lazy(() => import("./FORM VALIDATION/FormsValidation"));
const UseReducer = lazy(() => import("./USEREDUCER"));

const fakeLoader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate 2s loading
  return null;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <AppLayout />
      </Suspense>
    ),
    children: [
      {
        path: "/usecallback",
        element: (
          <Suspense fallback={<Loader />}>
            <Usecallback />
          </Suspense>
        ),
      },
      {
        path: "/useref",
        element: (
          <Suspense fallback={<Loader />}>
            <Useref />
          </Suspense>
        ),
      },
      {
        path: "/usememo",
        element: (
          <Suspense fallback={<Loader />}>
            <Memo />
          </Suspense>
        ),
      },
      {
        path: "/usereducer",
        element: (
          <Suspense fallback={<Loader />}>
            <UseReducer />
          </Suspense>
        ),
      },
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/accordion",
        element: (
          <Suspense fallback={<Loader />}>
            <Accordion />
          </Suspense>
        ),
      },
      {
        path: "/movies",
        element: (
          <Suspense fallback={<Loader />}>
            <Movies />
          </Suspense>
        ),
        loader: getMoviesData,
      },
      {
        path: "/movies/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <MovieDetails />
          </Suspense>
        ),
        loader: fetchMoviewDetails,
      },
      {
        path: "/aboutt",
        element: (
          <Suspense fallback={<Loader />}>
            <About />
          </Suspense>
        ),
        loader: fakeLoader,
      },
      {
        path: "/formvalidation",
        element: (
          <Suspense fallback={<Loader />}>
            <FormsValidation />
          </Suspense>
        ),
      },
      {
        path: "/axs",
        element: (
          <Suspense fallback={<Loader />}>
            <Axs />
          </Suspense>
        ),
        loader: getPosts,
      },
    ],
  },
]);

const App = () => {
  return (
    <BioProvider>
      <RouterProvider router={router} />
    </BioProvider>
  );
};

export default App;

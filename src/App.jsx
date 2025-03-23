import React from "react";
import Home from "./Home";
import { BioProvider } from "./contextApi";
import Index, { Usereducer } from "./USEREDUCER";
import Memo from "./USEMEMO";
import Useref from "./USEREF/Useref";
import Usecallback from "./USECALLBACK/Usecallback";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./Componenets/AppLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/usecallback",
          element: <Usecallback />,
        },
        {
          path: "/useref",
          element: <Useref />,
        },
        {
          path: "/usememo",
          element: <Memo />,
        },
        {
          path: "/usereducer",
          element: <Usereducer />,
        },
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);

  return (
    <BioProvider>
      <RouterProvider router={router} />
    </BioProvider>
  );
};

export default App;

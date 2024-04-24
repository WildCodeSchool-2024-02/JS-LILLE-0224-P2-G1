import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import RandomBeerPage from "./pages/RandomBeerPage";
import StoryPage from "./pages/StoryPage";
import TastingPage from "./pages/TastingPage";
import NotFoundPage from "./pages/NotFoundPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/randombeer",
        element: <RandomBeerPage />,
      },
      {
        path: "/ourstory",
        element: <StoryPage />,
      },
      {
        path: "/tasting",
        element: <TastingPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

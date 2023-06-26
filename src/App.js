import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/App.css";

import { Main } from "./views/main.jsx";

import { Navbar } from "./components/navbar.jsx";
import { Footer } from "./components/footer.jsx";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { StoreProvider } from "./store/storeContext.js";
library.add(faTrashAlt);


export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/todo",
      element: <Main />,
    },
    {
      path: "/*",
      element: <h1>Page Not found!</h1>,
    },
  ]);
  return (
    <StoreProvider>
      <Navbar />
      <RouterProvider router={router}/>
      <Footer />
    </StoreProvider>
  );
};

export default App;

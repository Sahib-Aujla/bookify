import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from "react-redux";
import {store} from './store/store'
import Explore from "./Explore.jsx";
import Book from "./Book.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/explore",
    element: <Explore />
  },
  {
    path:"/book/:id",
    element:<Book />
  }
],);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <Provider store={store}> 
    <RouterProvider router={router} />
    </Provider> 
  </React.StrictMode>
);

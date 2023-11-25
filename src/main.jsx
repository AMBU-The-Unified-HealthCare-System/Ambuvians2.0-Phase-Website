import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import LoginPage from "./pages/login/LoginPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <h1>Error</h1> ,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <h1>About</h1> ,
      },
      {
        path: "/service",
        element: <h1>Service</h1> ,
      },
      {
        path: "/hiring",
        element: <h1>Join Us</h1> ,
      },
      {
        path: "/login",
        element: <LoginPage/> ,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
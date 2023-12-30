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
import About from "./pages/about/about.jsx";
import Join_Us from "./pages/join-us/Join-Us.jsx";
import WebDevelpoer from "./pages/join-us/WebDeveloper.jsx";
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
        element: <About /> ,
      },
      {
        path : "/hiring",
        element : <Join_Us />
      },
      {
        path: "/login",
        element: <LoginPage/> ,
      },
      {
        path : "/services",
        element : <h1>Build Service Component</h1>
      },
      {
        path : "/test",
        element : <WebDevelpoer />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
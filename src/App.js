import React, { useState, useEffect } from "react";
import './index.css'
import Header from "./Components/header/header";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import { CloudinaryImages, CloudinaryVideos } from "./Components/Portfolio/CloudinaryApI/cloudinaryApi";
import Home from "./Components/header/home";
import Portfolio from "./Components/Portfolio/ThreeD";
import Animator from "./Components/Portfolio/Animator";
import T3DIllustration from "./Components/Portfolio/T3DIllustration";

const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: CloudinaryVideos,
      },
      {
        path: "/3DSculptor",
        element: <Portfolio />,
      },
      {
        path: "/Animator",
        element: <Animator />,
      },
      
      {
        path: "/T3DIllustration/:name",
        element: <T3DIllustration />,
      },
    ],
  },
]);

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await CloudinaryVideos(); // Perform the required data loading or API calls
        setLoading(false); 
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Set loading to false even in case of errors
      }
    };

    fetchData();

  
    return () => {
    };
  }, []);

  return (
    <div>
      {loading && <LinearProgress />}
      <RouterProvider router={router} />
    </div>
  );
};

export default App;

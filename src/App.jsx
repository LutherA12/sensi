import "./App.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage, Errorpage } from "./components/componentExports";
import { useEffect } from "react";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
      errorElement: <Errorpage />,
    },
  ]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <RouterProvider router={router} />;
}

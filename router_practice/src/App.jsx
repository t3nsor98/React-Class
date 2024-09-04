import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import User from "../components/User";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <h1>React Router Practice.</h1>
          <Navbar />
          <Home />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <h1>React Router Practice.</h1>
          <Navbar />
          <About />
        </>
      ),
    },
    {
      path: "/contact",
      element: (
        <>
          <h1>React Router Practice.</h1>
          <Navbar />
          <Contact />
        </>
      ),
    },
    {
      path: "/user/:username",
      element: (
        <>
          <h1>React Router Practice.</h1>
          <Navbar />
          <User />
        </>
      ),
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

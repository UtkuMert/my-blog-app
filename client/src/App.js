import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Post from "./pages/Post";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import "./styles.scss"

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/singlePost/:id",
          element: <SinglePost />,
        },
        {
          path: "/post",
          element: <Post />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;

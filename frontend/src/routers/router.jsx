import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../Shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import SingleBook from "../Shop/SingleBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import ManageBook from "../dashboard/ManageBook";
import EditBook from "../dashboard/EditBook";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({ params }) => {
          fetch(`http://localhost:5000/books/${params.id}`);
        },
      },
      {
        path: "/admin/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            path: "/admin/dashboard",
            element: <Dashboard />,
          },
          {
            path: "/admin/dashboard/upload",
            element: <UploadBook />,
          },
          {
            path: "/admin/dashboard/manage",
            element: <ManageBook />,
          },
          {
            path: "/admin/dashboard/edit-books/:id",
            element: <EditBook />,
            loader: ({ params }) => {
              fetch(`http://localhost:5000/books/${params.id}`).catch(
                console.error()
              );
            },
          },
        ],
      },
    ],
  },
]);
export default router;

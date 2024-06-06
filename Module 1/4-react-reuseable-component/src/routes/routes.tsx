import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import About from "../pages/About";
import AdminLayout from "../components/layout/AdminLayout";
import Test from "../pages/Test";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        // index true dewai / visit korle default home component render hobe
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "/test",
    element: <Test/>,
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <h1>This is admin dashboard</h1>,
      },
      {
        path: "add-admin",
        element: <h1>This is add admin page</h1>,
      },
    ],
  },
]);

export default router;

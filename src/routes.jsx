import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/main/MainLayout";
import Home from "./layouts/main/pages/Home";
import About from "./layouts/main/pages/About";
import ProductDetail from "./layouts/main/pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: 'product-detail/:id',
        element: <ProductDetail />,
      },
      {
        path: 'product-detail',
        element: <ProductDetail />,
      },
    ],
  },
]);

export const MainRouting = () =>{
  return <RouterProvider router={router}/>
}
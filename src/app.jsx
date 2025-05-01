import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import NotFoundPage from "./NotFoundPage";

import Product from "./product";
import Basket from "./basket";

const router = createBrowserRouter([
  {
    path: "/test-shopping-cart/" /*check what you have after localhost:5173/ */,
    element: <Product />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/test-shopping-cart/basket",
    element: <Basket />,
    errorElement: <NotFoundPage />,
  },
]);

const App = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
export default App;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NotFoundPage from './NotFoundPage';

import Product from './product';

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/test-shopping-cart/" /*check what you have after localhost:5173/ */,
    element: <Product />,
    errorElement: <NotFoundPage />,
  }
]);


const App = () =>{
    return(
        <>
            <RouterProvider router={router} />
        </>
    )
}
export default App;

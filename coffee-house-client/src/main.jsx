import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Components/Main';
import AddCoffee from './Components/AddCoffee';
import Home from './Components/Home';
import UpdateCoffee from './Components/UpdateCoffee';
import CoffeeDetails from './Components/CoffeeDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffee />,
        loader :({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
      },
      {
        path: "/coffee/:id",
        element: <CoffeeDetails />,
        loader :({params})=> fetch(`http://localhost:5000/coffees/${params.id}`)
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)

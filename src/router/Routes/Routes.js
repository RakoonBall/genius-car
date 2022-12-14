import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Orders from "../../pages/orders/Orders";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Checkout from "../../pages/Checkout/Checkout";
import SignUp from "../../pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRouter";


export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>, 
    children: [
      {
          path: '/',
          element: <Home></Home>
      },
      {
        path: '/login', 
        element: <Login></Login>
      },
      {
        path: '/signup', 
        element: <SignUp></SignUp>
      },
      {
        path: '/checkout/:id',
        element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
        loader: ({params})=> fetch(`https://genius-car-server-iota-black.vercel.app/services/${params.id}`)
      },
      {
        path: '/orders',
        element: <PrivateRoute><Orders></Orders></PrivateRoute>
      }
    ]
  }
]);
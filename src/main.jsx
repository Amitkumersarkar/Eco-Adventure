import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root';
import Home from './Components/Pages/Home';
import AdventureCard from './Components/Pages/AdventureCard';
import LoginProfile from './Components/Pages/LoginProfile';
import UserRegister from './Components/Pages/UserRegister';
import ExploreCard from './Components/Pages/ExploreCard';
import Explore from './Components/Pages/Explore';
import HotelService from './Components/Pages/HotelService';
import HotelServiceCard from './Components/Pages/HotelServiceCard';
import Details from './Components/Pages/Details';
import CheckOutNow from './Components/Pages/CheckOutNow';
import ErrorPage from './Components/Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/EcoAdventure.json')
      },
      {
        path: '/adventure',
        element: <AdventureCard></AdventureCard>
      },
      {
        path: '/login',
        element: <LoginProfile></LoginProfile>
      },
      {
        path: '/register',
        element: <UserRegister></UserRegister>
      },
      {
        path: '/explore',
        element: <Explore></Explore>
      }
      ,
      {
        path: '/exploreCard',
        element: <ExploreCard></ExploreCard>
      },
      {
        path: '/hotelService',
        element: <HotelService></HotelService>,
        loader: () => fetch("/service.json")
      },
      {
        path: '/hotelServiceCard',
        element: <HotelServiceCard></HotelServiceCard>
      },
      {
        path: '/details',
        element: <Details></Details>,
        path: '/details/:id',
        // showing single data using dynamic method
        loader: async ({ params }) => {
          const res = await fetch('/EcoAdventure.json')
          const data = await res.json()
          // console.log(data, params.id);
          // loading single data by find operation
          const singleData = data.find(d => d.id == params.id)
          // console.log(singleData);
          return singleData;
        },
      },
      {
        path: '/checkoutNow',
        element: <CheckOutNow></CheckOutNow>,
        loader: async ({ params }) => {
          const response = await fetch('/tourData.json')
          const data = await response.json()
          const oneData = data.find(info => info.id == params.id)
          return oneData;
        }
      },

    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

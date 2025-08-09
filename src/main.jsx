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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
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
        path: '/explore/:id',
        element: <Explore></Explore>
      },
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
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

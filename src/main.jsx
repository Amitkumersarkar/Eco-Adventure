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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/public/EcoAdventure.json')

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
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

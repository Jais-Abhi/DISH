import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import Menu from './Components/Menu.jsx'
import Specials from './Components/Special.jsx'
import Reservation from './Components/Reservation.jsx'

const router  = createBrowserRouter([
  {
    path : "/",
    element : <App/>,
    children : [
      {
        index :  true,
        element : <Home/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/menu",
        element : <Menu/>
      },
      {
        path : "/specials",
        element : <Specials/>
      },
      {
        path : "/reservation",
        element : <Reservation/>
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} >
    <App/>
  </RouterProvider>
)

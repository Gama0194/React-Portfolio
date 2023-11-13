import React from 'react'
import ReactDOM from 'react-dom'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    
  },
  // {
  //   path: '/about',
  //   element: <About />,
  //   errorElement: <NotFound />
  // },
  {
    path: '/projects',
    element: <Projects />,
   
   },
  ]);


  ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  );
  
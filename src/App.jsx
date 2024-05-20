import React from 'react'

import Footer from './Footer/Footer';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout/Layout';
import Navbar from './Navbar/Navbar';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Register from './Register/Register';
import Start from './Start/Start';
function App() {

  const x = createBrowserRouter([{
    path: "/", element: <Layout />,
    children: [
      { path: "/", element: <Start /> },
      { path: "/About", element: <About /> },
      { path: "/Portfolio", element: <Portfolio /> },
      { path: "/Register", element: <Register/> }
    ]
  }
  ])


  return (
    <>
      <RouterProvider router={x}></RouterProvider>
    </>
  );
}

export default App;

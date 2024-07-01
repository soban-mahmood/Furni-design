import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
Blog
import './index.css'
import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from './pages/Contact.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Blog from './pages/Blog.jsx'
import Services from './pages/Services.jsx'
import Layout from './Layout.jsx'
import Shop from './pages/Shop.jsx'
import Cart from './component/Cart.jsx'
import Chechout from './component/Chechout.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="blog" element={<Blog />} ></Route>
      <Route path="services" element={<Services />} ></Route>
      <Route path="shop" element={<Shop/>} ></Route>
      <Route path="cart" element={<Cart/>} ></Route>
      <Route path="chechout" element={<Chechout/>} ></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

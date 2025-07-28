import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Html from './components/Html.jsx'
import Css from './components/Css.jsx'
import Js from './components/Js.jsx'
import Reactjs from './components/Reactjs.jsx'
import Figma from './components/Figma.jsx'
import Filter from './components/Filter.jsx'
import Gallery from './components/Gallery.jsx'
import {BrowserRouter, Routes, Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/entvy_blog_vite/" element={<App />} />
        <Route path="/entvy_blog_vite/html" element={<Html />} />
        <Route path="/entvy_blog_vite/css" element={<Css />} />
        <Route path="/entvy_blog_vite/js" element={<Js />} />
        <Route path="/entvy_blog_vite/react" element={<Reactjs />} />
        <Route path="/entvy_blog_vite/figma" element={<Figma />} />
        <Route path="/entvy_blog_vite/filter" element={<Filter />} />
        <Route path="/entvy_blog_vite/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

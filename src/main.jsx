import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Html from './components/Html.jsx'
import Css from './components/Css.jsx'
import Js from './components/Js.jsx'
import Reactjs from './components/Reactjs.jsx'
import Figma from './components/Figma.jsx'
import {BrowserRouter, Routes, Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/entvy_blog_vite/" element={<App />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/js" element={<Js />} />
        <Route path="/react" element={<Reactjs />} />
        <Route path="/figma" element={<Figma />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

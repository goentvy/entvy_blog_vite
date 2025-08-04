import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/store'
import './index.css'
import App from './App.jsx'
import Header from './layout/Header.tsx'
import Nav from './layout/Nav.jsx'
import Html from './pages/Html.jsx'
import Css from './pages/Css.jsx'
import Js from './pages/Js.jsx'
import Reactjs from './pages/Reactjs.jsx'
import Figma from './pages/Figma.jsx'
import Filter from './pages/Filter.jsx'
import Gallery from './pages/Gallery.jsx'
import Contact from './pages/Contact.jsx'
import TodoList from './pages/TodoList.jsx'
import Search from './layout/Search.jsx'
import Menu from './layout/Menu.js'
import Admin from './pages/Admin.tsx'
import Post from './features/admin/Post.tsx'
import Delete from './features/admin/Delete.tsx'
import {BrowserRouter, Routes, Route } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Nav />
        <Menu />
        <Routes>
          <Route path="/entvy_blog_vite/" element={<App />} />
          <Route path="/entvy_blog_vite/html" element={<Html />} />
          <Route path="/entvy_blog_vite/css" element={<Css />} />
          <Route path="/entvy_blog_vite/js" element={<Js />} />
          <Route path="/entvy_blog_vite/react" element={<Reactjs />} />
          <Route path="/entvy_blog_vite/figma" element={<Figma />} />
          <Route path="/entvy_blog_vite/filter" element={<Filter />} />
          <Route path="/entvy_blog_vite/gallery" element={<Gallery />} />
          <Route path="/entvy_blog_vite/contact" element={<Contact />} />
          <Route path="/entvy_blog_vite/todolist" element={<TodoList />} />
          <Route path="/entvy_blog_vite/search" element={<Search />} />
          <Route path="/entvy_blog_vite/admin" element={<Admin />} />
          <Route path="/entvy_blog_vite/admin/post" element={<Post />} />
          <Route path="/entvy_blog_vite/admin/table" element={<Delete />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
)

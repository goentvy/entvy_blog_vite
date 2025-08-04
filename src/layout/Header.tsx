import '../styles/Header.css'
import { JSX } from 'react'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
    toggle,
    setToggle,
    selectMenu,
} from '../features/menu/menuSlice'

function Header() {
    const dispatch = useAppDispatch()
    const toggle = useAppSelector(selectMenu)

    function toggleMenu() {
        dispatch(setToggle(!toggle))
    }

    return (
        <>
            <header className="header_wrap flex align-center justify-between items-center">
                <div className="header_menu display-none">
                    <button className="border-none bg-white">
                        <img src="./images/menu_btn.png" alt="menu_btn" />
                    </button>
                </div>
                <div className="header_logo flex align-center items-center">
                    <img src="./images/logo.png" alt="logo" />
                    <Link to="/entvy_blog_vite/" className="playfair-display-Entvy">Entvy.log</Link>
                </div>
                <div className="header_menu flex items-center">
                    <Link to="/entvy_blog_vite/search" className="flex">
                        <img className="search_btn" src="./images/search.png" alt="search" />
                    </Link>
                    <button className="flex" onClick={toggleMenu}>
                        <img className="menu_btn" src="./images/menu_btn.png" alt="menu_btn" />
                    </button>
                </div>
            </header>
        </>
    );
}

export default Header;
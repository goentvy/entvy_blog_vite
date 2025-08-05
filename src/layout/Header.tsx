import '../styles/Header.css'
import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
    toggle,
    setToggle,
    selectMenu,
} from '../features/menu/menuSlice'
import { useEffect } from 'react'

function Header() {
    const dispatch = useAppDispatch();
    const toggle = useAppSelector(selectMenu);

    function toggleMenu() {
        dispatch(setToggle(!toggle));
    }
    
    useEffect(() => {
        function handleClickOutside(event) {
            const menuElement = document.getElementById('menu');
            // event.target에서 버튼 요소를 찾음
            const menuButton = event.target.closest('button');
            
            // 메뉴가 열려있고, 클릭된 요소가 메뉴 외부이고 메뉴 버튼이 아닌 경우
            if (!toggle && menuElement && !menuElement.contains(event.target) && 
                !menuButton?.contains(event.target)) {
                dispatch(setToggle(true));
                console.log(!menuButton?.contains(event.target));
                console.log(event.target);
            }
        }

        // 메뉴가 열려있을 때만 이벤트 리스너 추가
        if (!toggle) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggle, dispatch]);

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
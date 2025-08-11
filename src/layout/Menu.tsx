import '../styles/Menu.css'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
    toggle,
    setToggle,
    selectMenu,
} from '../features/menu/menuSlice'
import { Link } from 'react-router-dom';

function Sidelink({ url, label, target="_blank", event}) {
    return (
        <li>
            <Link to={url} target={target} onClick={event}>{label}</Link>
        </li>
    );
}

function Menu() {
    const dispatch = useAppDispatch()
    const toggle = useAppSelector(selectMenu)

    function menuClose() {
        dispatch(setToggle(true))
    }

    return (
            <div className={`menu_wrap ${toggle ? 'display-none' : ''}`} id="menu">
                <ul className="menu_list">
                    <Sidelink url="https://goentvy.github.io/html2507/" label="HTML+CSS 과제 →" event={menuClose} />
                    <Sidelink url="https://goentvy.github.io/js2507/" label="Javascript 과제 →" event={menuClose} />
                    <Sidelink url="https://skc4365.github.io/web2507/" label="수강생 과제 →" event={menuClose}/>
                    <Sidelink url="/entvy_blog_vite/filter" label="검색어필터 →" target="_self" event={menuClose} />
                    <Sidelink url="/entvy_blog_vite/gallery" label="갤러리 →" target="_self" event={menuClose} />
                    <Sidelink url="/entvy_blog_vite/contact" label="방명록 →" target="_self" event={menuClose} />
                    <Sidelink url="/entvy_blog_vite/todolist" label="TodoList →" target="_self" event={menuClose} />
                </ul>
            </div>
    );
}

export default Menu;
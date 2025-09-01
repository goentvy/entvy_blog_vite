import '../styles/Menu.css'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import {
    toggle as toggleAction,
    setToggle,
    selectMenu,
} from '../features/menu/menuSlice'
import { Link } from 'react-router-dom';

interface SidelinkProps {
    url: string;
    label: string;
    target?: React.HTMLAttributeAnchorTarget;
    event?: React.MouseEventHandler<HTMLAnchorElement>;
}

const Sidelink: React.FC<SidelinkProps> = ({ url, label, target="_blank", event}) => {
    return (
        <li>
            <Link to={url} target={target} onClick={event}>{label}</Link>
        </li>
    );
}

const Menu: React.FC = () => {
    const dispatch = useAppDispatch();
    const toggle = useAppSelector(selectMenu);

    const menuClose = ():void => {
        dispatch(setToggle(true));
    };

    return (
            <div className={`menu_wrap ${toggle ? 'display-none' : ''}`} id="menu">
                <ul className="menu_list">
                    <Sidelink url="https://goentvy.github.io/react-site/" label="React 과제 →" event={menuClose} />
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
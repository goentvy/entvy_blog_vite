import '../style/Nav.css';
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav className="nav_wrap flex justify-between items-center">
            <ul className="nav_list w-full flex justify-around items-center">
                <li className="nav_item w-full flex justify-center items-center"><Link to="/entvy_blog_vite/html">HTML</Link></li>
                <li className="nav_item w-full flex justify-center items-center"><Link to="/entvy_blog_vite/css">CSS</Link></li>
                <li className="nav_item w-full flex justify-center items-center"><Link to="/entvy_blog_vite/js">JavaScript</Link></li>
                <li className="nav_item w-full flex justify-center items-center"><Link to="/entvy_blog_vite/react">React</Link></li>
                <li className="nav_item w-full flex justify-center items-center"><Link to="/entvy_blog_vite/figma">Figma</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
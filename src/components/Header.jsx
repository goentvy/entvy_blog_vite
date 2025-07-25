import '../style/Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="header_wrap flex align-center justify-left items-center">
                <div className="header_menu display-none">
                    <button className="border-none bg-white">
                        <img src="./images/menu_btn.png" alt="menu_btn" />
                    </button>
                </div>
                <div className="header_logo flex align-center items-center">
                    <img src="./images/logo.png" alt="logo" />
                    <Link to="/entvy_blog_vite/" className="playfair-display-Entvy">Entvy.log</Link>
                </div>
            </header>
        </>
    );
}

export default Header;
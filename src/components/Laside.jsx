import '../style/Laside.css'
import { Link } from 'react-router-dom';

function Sidelink({ url, label }) {
    return (
        <li>
            <Link to={url} target="_blank">{label}</Link>
        </li>
    );
}

function Laside() {
    return (
        <aside className="l_aside_wrap flex align-center justify-left items-center">
            <ul className="l_aside_list">
                <Sidelink url="https://www.youtube.com/" label="Youtube →" />
                <Sidelink url="https://goentvy.github.io/html2507/" label="개인과제 →" />
                <Sidelink url="https://skc4365.github.io/web2507/" label="수강생 과제 →" />
            </ul>
        </aside>
    );
}

export default Laside;
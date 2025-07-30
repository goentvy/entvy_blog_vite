import '../styles/Search.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Search() {
    const [ search, setSearch ] = useState('');
    const navigate = useNavigate();

    function searchKeyDown(e) {
        if(e.key === 'Enter') {
            setSearch(e.target.value);
            navigate(`/entvy_blog_vite/search/${e.target.value}`);
        }
    }
    function closeClick() {
        navigate(-1);
    }

    return (
        <div className="search_wrap">
            <div className="search_box">
                <input type="text" placeholder="검색하세요." onKeyDown={searchKeyDown} />
            </div>
            <div className="search_close_box">
                <button onClick={closeClick}>
                    <img src="./images/close.png" alt="close" />
                </button>
            </div>
        </div>
    );
}

export default Search;
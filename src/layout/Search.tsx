import '../styles/Search.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Search: React.FC = () => {
    const [ search, setSearch ] = useState<string>('');
    const navigate = useNavigate();

    const searchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if(e.key === 'Enter') {
            const value = (e.target as HTMLInputElement).value;
            setSearch(value);
            navigate(`/entvy_blog_vite/search/${value}`);
        }
    }
    const closeClick = (): void => {
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
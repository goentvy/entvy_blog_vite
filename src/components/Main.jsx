import '../styles/Main.css'
import Laside from '../layout/Laside.jsx'
import Raside from '../layout/Raside.jsx'
import { getData } from '../store/hooks.js'
import { useState, useEffect } from 'react'
import { DateFilter } from '../store/hooks.js'

function Post({id, category, title, content, date}) {
    return (
        <>
            <div className="post" key={id}>
                <h2 className="post_title cursor">{`[${category}] ${title}`}</h2>
                <div className="post_content">
                    <p>{content}</p>
                    <p className="post_author">
                        <span>By Entvy</span> | <span>{date}</span>
                    </p>
                </div>
            </div>
        </>
    );
}

function Main() {
    const [ post, setPost] = useState([]);

    useEffect(() => {
        getData(setPost, 'post')
    }, []);
    // console.log(post[0].created_at);
    return (
        <>
            <div className="main_wrap">
                <Laside />
                <div className="main_content">
                    {post.map(p => (
                        <Post 
                            id={p.id} 
                            key={p.id}
                            category={p.category} 
                            title={p.title} 
                            content={p.content} 
                            date={ DateFilter(p.created_at) }
                        />
                    ))}
                </div>
                <Raside />
            </div>
        </>
    );
}

export default Main;
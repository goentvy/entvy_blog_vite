import '../styles/Html.css';
import Post from '../layout/Post'
import { useState, useEffect } from 'react'
import { getData, DateFilter } from '../store/hooks'

function Html() {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        getData(setPosts, 'post', 'category', 'html');
    }, [])

    return (
        <>
            <div className="html_wrap">
                {posts.map(post => (
                    <Post 
                        id={post.id} 
                        key={post.id}
                        category={post.category} 
                        title={post.title} 
                        content={post.content} 
                        date={ DateFilter(post.created_at) } />
                ))}
            </div>
        </>
    );
}

export default Html;
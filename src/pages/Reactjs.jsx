import '../styles/ReactJs.css';
import Post from '../layout/Post'
import { useState, useEffect } from 'react'
import { getData, DateFilter } from '../store/hooks'

function Reactjs() {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        getData(setPosts, 'post', 'category', 'react');
    }, [])

    return (
        <>
            <div className="reactjs_wrap">
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

export default Reactjs;
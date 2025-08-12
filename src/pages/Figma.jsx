import '../styles/Figma.css';
import Post from '../layout/Post'
import { useState, useEffect } from 'react'
import { getData, DateFilter } from '../store/hooks'

function Figma() {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        getData(setPosts, 'post', 'category', 'figma');
    }, [])

    return (
        <>
            <div className="figma_wrap">
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

export default Figma;
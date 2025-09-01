import '../styles/ReactJs.css';
import Post from '../layout/Post'
import { useState, useEffect } from 'react'
import { getData, DateFilter } from '../store/hooks'
import { PostType } from 'types';

const Reactjs: React.FC = () => {
    const [ posts, setPosts ] = useState<PostType[]>([]);

    useEffect(() => {
        getData<PostType>(setPosts, 'post', 'category', 'react');
    }, [])

    return (
        <>
            <div className="reactjs_wrap">
                {posts.map(post => (
                    <Post 
                        key={post.id}
                        id={post.id} 
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
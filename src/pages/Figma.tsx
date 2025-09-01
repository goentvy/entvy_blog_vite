import '../styles/Figma.css';
import Post from '../layout/Post'
import { useState, useEffect } from 'react'
import { getData, DateFilter } from '../store/hooks'
import { PostType } from 'types';

const Figma: React.FC = () => {
    const [ posts, setPosts ] = useState<PostType[]>([]);

    useEffect(() => {
        getData<PostType>(setPosts, 'post', 'category', 'figma');
    }, [])

    return (
        <>
            <div className="figma_wrap">
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

export default Figma;
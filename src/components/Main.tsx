import '../styles/Main.css'
import Laside from '../layout/Laside.js'
import Raside from '../layout/Raside.js'
import Post from '../layout/Post.js'
import { getData } from '../store/hooks.js'
import { useState, useEffect } from 'react'
import { DateFilter } from '../store/hooks.js'

interface PostData {
    id: number;
    category: string;
    title: string;
    content: string;
    created_at: string;
}

function Main() {
    const [ posts, setPosts] = useState<PostData[]>([]);

    useEffect(() => {
        getData(setPosts, 'post');
    }, []);

    return (
        <>
            <div className="main_wrap">
                <Laside />
                <div className="main_content">
                    {posts.map(post => (
                        <Post 
                            id={post.id} 
                            key={post.id}
                            category={post.category} 
                            title={post.title} 
                            content={post.content} 
                            date={ DateFilter(post.created_at) }
                        />
                    ))}
                </div>
                <Raside />
            </div>
        </>
    );
}

export default Main;
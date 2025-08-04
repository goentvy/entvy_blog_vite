import '../../styles/Delete.css'
import { useState, useEffect } from 'react';
import { getData, deletePost } from '../../store/hooks'

function Delete() {
    const [ postList, setPostList ] = useState([]);

    useEffect(() => {
        getData(setPostList, 'post');
    }, [])
    
    return (
        <div className="post_table">
            <table>
                <thead>
                    <tr>
                        <th>category</th>
                        <th>title</th>
                        <th>content</th>
                        <th>delete</th>
                    </tr>
                </thead>
                <tbody>
                {postList.map(post => (
                    <tr key={post.id}>
                        <td>{post.category}</td>
                        <td>{post.title}</td>
                        <td>{post.content}</td>
                        <td><button id={post.id} onClick={() => deletePost(post.id, 'post')}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Delete;
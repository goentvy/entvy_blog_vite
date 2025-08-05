import '../../styles/AdminPage.css'
import { useState, useEffect } from 'react';
import { getData, deletePost, signOut } from '../../store/hooks'
import { Link } from 'react-router-dom'

function AdminPage() {
    const [ postList, setPostList ] = useState([]);

    useEffect(() => {
        getData(setPostList, 'post');
    }, [])
    
    return (
        <>
            <div className="post_write">
                <Link to="/entvy_blog_vite/admin" onClick={signOut}>로그아웃</Link>
                <Link to="/entvy_blog_vite/admin/post">글 작성</Link>
            </div>
            <div className="post_table">
                <table>
                    <thead>
                        <tr>
                            <th>카테고리</th>
                            <th>제목</th>
                            <th>내용</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                    {postList.map(post => (
                        <tr key={post.id}>
                            <td>{post.category}</td>
                            <td>{post.title}</td>
                            <td>{post.content}</td>
                            <td><button className="delete_btn" id={post.id} onClick={() => deletePost(post.id, 'post')}>삭제</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default AdminPage;
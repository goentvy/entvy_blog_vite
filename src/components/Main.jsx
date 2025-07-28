import '../styles/Main.css';
import Header from './Header.jsx';
import Nav from './Nav.jsx';
import Laside from './Laside.jsx';
import Raside from './Raside.jsx';

function Post({id, category, title, content, author, date, img}) {
    return (
        <>
            <div className="post" key={id}>
                <h2 className="post_title cursor">{`[${category}] ${title}`}</h2>
                <div className="post_content">
                    <img src={img} alt="images" />
                    <p>{content}</p>
                    <p className="post_author">
                        <span>By {author}</span> | <span>{date}</span>
                    </p>
                </div>
            </div>
        </>
    );
}

const Posts = [
    { id: "1", category: 'html', title: 'Array In Javascript - Learn JS # 3', content: 'Content for post 1', author: 'Entvy', date: '2023-10-01', img: 'https://placehold.co/150x150' },     
    { id: "2", category: 'css', title: 'Make Animated Light Mode And Dark Mode Toggle With CSS', content: 'Content for post 2', author: 'Entvy', date: '2023-10-02', img: 'https://placehold.co/150x150' },
    { id: "3", category: 'js', title: 'Fundametal Of Javascript', content: 'Content for post 3', author: 'Entvy', date: '2023-10-03', img: 'https://placehold.co/150x150' },
]

function Main() {
    return (
        <>
            <Header />
            <Nav />
            <div className="main_wrap">
                <Laside />
                <div className="main_content">
                    {Posts.map(post => (
                        <Post 
                            key={post.id} 
                            id={post.id} 
                            category={post.category}
                            title={post.title} 
                            content={post.content} 
                            author={post.author} 
                            date={post.date}
                            img={post.img}
                        />
                    ))}
                </div>
                <Raside />
            </div>
        </>
    );
}

export default Main;
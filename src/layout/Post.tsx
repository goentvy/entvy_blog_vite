import { PostType } from "types";

const Post: React.FC<PostType> = ({ id, category, title, content, date }) => {
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
};

export default Post;
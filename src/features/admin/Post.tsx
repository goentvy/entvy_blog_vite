import { useState, ChangeEvent, FormEvent } from 'react';
import { InsertSubmit } from '../../store/hooks'
import '../../styles/Post.css'

interface PostRow {
    category: string;
    title: string;
    content: string;
}

function Post() {
    const [ category, setCategory ] = useState<string>('html');
    const [ title, setTitle ] = useState<string>('');
    const [ content, setContent ] = useState<string>('');

    function categoryValue(e: ChangeEvent<HTMLSelectElement>) {
        setCategory(e.target.value);
    }
    function titleValue(e: ChangeEvent<HTMLInputElement>) {
        setTitle(e.target.value);
    }
    function contentValue(e: ChangeEvent<HTMLTextAreaElement>) {
        setContent(e.target.value);
    }
    function resetValue() {
        setCategory('html');
        setTitle('');
        setContent('');
    }

    async function postSubmit(e: FormEvent<HTMLButtonElement>) {
        e.preventDefault();
        if(category === '' || title === '' || content === '') {
            return console.log('category or title or content text null');
        }
        InsertSubmit({category, title, content}, 'post');
        resetValue();
    }
    return (
        <div className="post_wrap">
            <form action="#">
                <div className="post_form">
                    <div className="post_category">
                        <select name="category" id="category" value={category} onChange={categoryValue}>
                            <option value="" disabled>카테고리</option>
                            <option value="html">HTML</option>
                            <option value="css">CSS</option>
                            <option value="js">JavaScript</option>
                            <option value="react">React</option>
                            <option value="figma">Figma</option>
                        </select>
                    </div>
                    <div className="post_input">
                        <p><input type="text" name="title" id="title" placeholder="제목을 입력하세요" value={title} onChange={titleValue} autoComplete="off" /></p>
                    </div>
                    <div className="post_textarea">
                        <textarea name="textarea" id="textarea" placeholder="내용을 작성해주세요" value={content}onChange={contentValue} autoComplete="off"></textarea>
                    </div>
                </div>
                <div className="post_footer">
                    <div className="post_btn">
                        <button type="submit" onClick={postSubmit}>작성하기</button>
                    </div>
                </div>
            </form>  
        </div>
    );
}

export default Post;
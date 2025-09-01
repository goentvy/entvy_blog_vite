import '../styles/Contact.css'
import { useState, useEffect, ChangeEvent } from 'react'
import { getData, DateFilter, InsertSubmit } from '../store/hooks'

interface ContactData {
    id: number;
    username: string;
    password: string;
    content: string;
    created_at: string;
}

const Contact: React.FC = () => {
    const [ username, setName ] = useState<string>('');
    const [ password, setPwd ] = useState<string>('');
    const [ content, setTextarea ] = useState<string>('');
    const [ contactDatas, setContactData ] = useState<ContactData[]>([]);

    const nameValue = (e: ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value);
    }
    const pwdValue = (e: ChangeEvent<HTMLInputElement>): void => {
        setPwd(e.target.value);
    }
    const textareaValue = (e: ChangeEvent<HTMLTextAreaElement>): void => {
        setTextarea(e.target.value);
    }

    const contactSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
        e.preventDefault();
        if(username === '' || password === '' || content === '') {
            alert('이름, 비밀번호, 내용을 모두 넣어주세요.');
            return;
        }
        InsertSubmit({ username, password, content }, 'contact');
    }

    useEffect(() => {
        getData<ContactData>(setContactData, 'contact');
    }, []);

    return (
        <>
            <div className="contact_wrap">
                <p className="contact_title">Contact Us</p>
                <form action="#">
                    <div className="contact_form">
                        <div className="contact_input">
                            <p><input type="text" name="name" id="name" placeholder="이름" onChange={nameValue} autoComplete="off" /></p>
                            <p><input type="password" name="pwd" id="pwd" placeholder="비밀번호" onChange={pwdValue} autoComplete="off" /></p>
                        </div>
                        <div className="contact_textarea">
                            <textarea name="textarea" id="textarea" placeholder="내용을 작성해주세요." onChange={textareaValue} autoComplete="off"></textarea>
                        </div>
                        <div className="contact_btn">
                            <button type="submit" onClick={contactSubmit}>보내기</button>
                        </div>
                    </div>
                </form>
            </div>
            <div className="contact_list">
                <div className="contact_list_box">
                    {contactDatas.map((contactData) => (
                        <div className="contact_list_wrap" key={contactData.id}>
                            <div className="contact_list_header">
                                <div className="contact_list_author">
                                    {contactData.username}
                                </div>
                            </div>
                            <p className="contact_list_content">
                                {contactData.content}
                            </p>
                            <div className="contact_list_footer">
                                <div className="contact_list_footer_box">
                                    { DateFilter(contactData.created_at) }
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Contact;
import '../styles/Contact.css'
import { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)

function Contact() {
    const [ name, setName ] = useState('');
    const [ pwd, setPwd ] = useState('');
    const [ textarea, setTextarea ] = useState('');
    const [ contactDatas, setContactData ] = useState([]);

    function nameValue(e) {
        setName(e.target.value);
    }
    function pwdValue(e) {
        setPwd(e.target.value);
    }
    function textareaValue(e) {
        setTextarea(e.target.value);
    }

    async function getContactData() {
        const { data, error } = await supabase.from('contact').select();
        if(error) console.error('SELECT Error', error);
        setContactData(data);
    }

    async function contactSubmit() {
        if(name === '' || pwd === '' || textarea === '') return alert('이름, 비밀번호, 내용을 모두 넣어주세요.')
        const { data, error } = await supabase.from('contact').insert([
            { username: name, password: pwd, content: textarea }
        ]);
        if(error) console.error('INSERT Error', error, data);
    }

    useEffect(() => {
        getContactData();
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
                                    {contactData.created_at}
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
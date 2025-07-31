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
        else console.log('SELECT');
        setContactData(data);
    }

    async function contactSubmit() {
        const { data, error } = await supabase.from('contact').insert([
            { username: name, password: pwd, content: textarea }
        ]);
        if(error) console.error('INSERT Error', error);
        else console.log('INSERT', data);
    }

    useEffect(() => {
        getContactData();
    }, []);

    return (
        <div className="contact_wrap">
            <p className="contact_title">Contact Us</p>
            <form action="#">
                <div className="contact_form">
                    <div className="contact_input">
                        <p><input type="text" placeholder="이름" onChange={nameValue}/></p>
                        <p><input type="password" placeholder="비밀번호" onChange={pwdValue} /></p>
                    </div>
                    <div className="contact_textarea">
                        <textarea name="comment" id="myTextarea" placeholder="내용을 작성해주세요." onChange={textareaValue}></textarea>
                    </div>
                    <div className="contact_btn">
                        <button type="submit" onClick={contactSubmit}>보내기</button>
                    </div>
                </div>
            </form>
            <div className="contact_list">
                <ul>
                    {contactDatas.map((contactData) => (
                        <li key={contactData.id}>{contactData.content}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Contact;
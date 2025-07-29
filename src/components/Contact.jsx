import '../styles/Contact.css'

function Contact() {
    return (
        <div className="contact_wrap">
            <p className="contact_title">Contact Us</p>
            <form action="#">
                <div className="contact_form">
                    <div className="contact_input">
                        <p><input type="text" placeholder="이름" /></p>
                        <p><input type="text" placeholder="비밀번호" /></p>
                    </div>
                    <div className="contact_textarea">
                        <textarea name="comment" id="myTextarea" placeholder="내용을 작성해주세요."></textarea>
                    </div>
                    <div className="contact_btn">
                        <button type="submit">보내기</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Contact;
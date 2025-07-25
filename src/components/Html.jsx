import '../style/Html.css';
import Header from './Header';
import Nav from './Nav';

function Html() {
    return (
        <>
            <Header />
            <Nav />
            <div className="html_wrap">
                <h1>HTML page</h1>
            </div>
        </>
    );
}

export default Html;
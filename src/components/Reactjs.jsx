import '../style/Reactjs.css';
import Header from './Header';
import Nav from './Nav';

function Reactjs() {
    return (
        <>
            <Header />
            <Nav />
            <div className="reactjs_wrap">
                <h1>React JS Page</h1>
            </div>
        </>
    );
}

export default Reactjs;
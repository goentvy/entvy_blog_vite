import '../styles/Figma.css';
import Header from './Header';
import Nav from './Nav';

function Figma() {
    return (
        <>
            <Header />
            <Nav />
            <div className="figma_wrap">
                <h1>Figma Page</h1>
            </div>
        </>
    );
}

export default Figma;
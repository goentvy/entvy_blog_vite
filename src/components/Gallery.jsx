import '../styles/Gallery.css'
import galleryList from '../json/galleryList.json'
import Header from './Header';
import Nav from './Nav';
import { useState } from 'react';

function Gallery() {
    const [ index, setIndex ] = useState(0);
    const [ showMore, setShowMore ] = useState(false);

    function PreviousImage() {
        if(index == 0) {
            setIndex(galleryList.length -1);
        } else {
            setIndex(index - 1);
        }
    }

    function NextImage() {
        if(index >= galleryList.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    function MoreText() {
        setShowMore(!showMore);
    }

    let gallery = galleryList[index];

    return (
        <>
            <Header />
            <Nav />
            <h1 className="gallery_title">Gallery - {galleryList.length} Page </h1>
            <div className="btn_wrap">
                <button className="previous_btn" onClick={PreviousImage}>Previous</button>
                <button className="next_btn" onClick={NextImage}>Next</button>
            </div>
            <div className="gallery_wrap">
                <div className="gallery_content_main">
                    <h2>
                        <i>{gallery.name} </i>
                        by {gallery.artist}
                    </h2>
                    <h3>
                        ({index + 1} of {galleryList.length})
                    </h3>
                    <img
                        src={gallery.url}
                        alt={gallery.alt}
                    />
                    <div className="gallery_content_sub">
                        <button onClick={MoreText} className="toggle_btn">
                            {showMore ? 'Hide' : 'Show'} details
                        </button>
                        {showMore && <p>{gallery.description}</p>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;
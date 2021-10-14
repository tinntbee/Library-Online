import React from 'react';
import Slideshow from '../../Components/Slideshow';
import './style.css';

BookStore.propTypes = {
    
};

function BookStore(props) {
    return (
        <div className="Bookstore">
            <div className="Bookstore-header">
                <p className="title">BOOK STORE</p>
                <p className="hoa">$34</p>
            </div>
            <div className="Bookstore-body">
                <Slideshow />
            </div>
        </div>
    );
}

export default BookStore;
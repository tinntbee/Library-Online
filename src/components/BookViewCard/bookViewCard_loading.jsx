import React from 'react';
import { Body, Container, Footer, Name, Price } from './style_loading';

BookViewCard_loading.propTypes = {
    
};

function BookViewCard_loading(props) {
    return (
        <Container>
            <Body/>
            <Footer>
                <Name/>
                <Price/>
            </Footer>
        </Container>
    );
}

export default BookViewCard_loading;
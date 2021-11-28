import React from 'react';
import { TagFavoritesContainer, Title } from '../style';

TagFavorites.propTypes = {
    
};

function TagFavorites(props) {
    return (
        <TagFavoritesContainer>
            <Title>
                <p><b>KIND OF BOOK FAVORITES</b></p>
            </Title>
        </TagFavoritesContainer>
    );
}

export default TagFavorites;
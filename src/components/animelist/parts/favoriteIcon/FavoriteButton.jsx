import React from 'react';
import './FavoriteButton.css';
import FavoriteIcon from '@mui/icons-material/Favorite';

const FavoriteButton = ({handleFavBtn}) => {
  return (
    <>
        <FavoriteIcon className="favorite_icon" onClick={handleFavBtn}/>
        
    </>
  )
}

export default FavoriteButton

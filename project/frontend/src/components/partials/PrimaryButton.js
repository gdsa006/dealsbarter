import React from 'react';
import { useNavigate } from 'react-router-dom';
import primarybutton from './PrimaryButton.module.css';

function PrimaryButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/post-ad/');
  };

  return (
    <button className={primarybutton.postButton} onClick={handleClick}>
      Post Ad
    </button>
  );
}

export default PrimaryButton;

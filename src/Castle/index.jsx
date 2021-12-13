import React from 'react';
import './style.css';

const Castle = ({ president }) => {
  return (
    <div className="castle">
      <div className="castle__image"></div>
      <div className="castle__body">
        <h1>New president</h1>
        <p className="castle__president">
          {
            president === null ? 'Vyberte svého kandidáta' : president
          }
        </p>
      </div>
    </div>
  );
};

export default Castle;
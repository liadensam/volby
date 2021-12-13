import React from 'react';
import './style.css';

const Candidate = (props) => {
  const handleVoteClick = () => {
    props.onVote(props.name);
  };

  return (
    <div className="candidate">
      <h3 className="candidate__name">{props.name}</h3>
      <img className="candidate__avatar" src={props.avatar} />
      <button 
        className="btn-vote"
        onClick={handleVoteClick}
      >
        Select
      </button>
    </div>
  );
};


export default Candidate;
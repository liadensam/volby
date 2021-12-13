import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Candidate from './Candidate/index';
import Castle from './Castle/index';
import './style.css';

const App = () => {
  const [candidates, setCandidates] = useState([]);
  const [president, setPresident] = useState(null);

  useEffect(() => setCandidates([
    { name: "Ferdinand Mravenec", avatar: '/assets/candidate01.png' },
    { name: "Markéta Smetana", avatar: '/assets/candidate02.png' },
    { name: "Beáta Skočdopolová", avatar: '/assets/candidate03.png' },
    { name: "Lubomír Poňuchálek", avatar: '/assets/candidate04.png' },
  ]), []);

  const handleVote = (name) => {
    setPresident(name);
  }
  
  return (
    <div className="container">
      <Castle president={president} />
      
      <h2>Candidates</h2>
      <div className="candidate-list">
        {candidates.map((c) => (
          <Candidate 
            key={c.name}
            name={c.name} 
            avatar={c.avatar} 
            onVote={handleVote}
          />
        ))}
      </div>
    </div>
  );
};

render(<App />, document.querySelector('#app'));

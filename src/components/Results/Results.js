import React from "react";

import Guess from '../Guess';

function Results({ guesses }) {
  if (guesses.length === 0) return null;
  return (
    <div className='guess-results'>
      {guesses.map((g, idx) => <Guess key={idx} checkedGuess={g}/>)}
    </div>
  );
}

export default Results;

import React from 'react';

function SearchResults({ results }) {
  return (
    <div>
      {results.map((result, index) => (
        <div key={index}>
          <img src={result.image} alt={result.name} />
          <p>Name: {result.name}</p>
          <p>Set: {result.set}</p>
          <p>Number: {result.number}</p>
          <p>Rarity: {result.rarity}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;

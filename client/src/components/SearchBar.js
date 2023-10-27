import React, { useState, useEffect } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [delayTerm, setDelayTerm] = useState(searchTerm);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDelayTerm(searchTerm);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (delayTerm) {
      onSearch(delayTerm);
    }
  }, [delayTerm, onSearch]);

  return (
    <input
    className="w-full p-3 border rounded-md mb-5"
      type="text"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search for a card..."
    />
  );
}

export default SearchBar;
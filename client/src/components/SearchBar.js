import React, { useState, useEffect } from 'react';
import { MdOutlineClear } from "react-icons/md";

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

  // clear search for 'X' button
  const clearSearch = () => {
    setSearchTerm('');
    setDelayTerm('');
  };

  return (
    <div className="relative">
      <div className="relative">
        <input
          className="w-full p-3 border rounded-md mb-5 pr-12" // Added pr-12 for space for the clear button
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for a card..."
        />
        {searchTerm && (
          <button
            className="absolute top-0 right-0 m-3"
            onClick={clearSearch}
          >
            <MdOutlineClear className='text-3xl'></MdOutlineClear>
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;

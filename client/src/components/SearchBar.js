import React, { useState } from 'react';

function SearchBar(props) {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search for Magic cards..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;

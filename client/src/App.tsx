import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';

function App() {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <div className="App">
      <h1 className=''>Magic Card Search</h1>
      <SearchBar />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default App;

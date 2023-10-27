import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CardList from './components/CardList';

function App() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/cards/search?q=${searchTerm}`
        );
        setCards(response.data.data);
      } catch (error) {
        console.error("Error fetching cards:", error);
      }
    };

    if (searchTerm) {
      fetchCards();
    }
  }, [searchTerm]);

  return (
    
    <div className="bg-stone-400 min-h-screen flex justify-center items-center">
     <div className="container mx-auto p-4 bg-amber-500">
       <h1 className="mx-auto p-4 text-5xl text-blue-700 text-center font-extrabold" >Magic The Gathering Card Search</h1>
       <h3 className="mx-auto text-xl text-blue-700 text-center font-extrabold" >Powered by SCRYFALL</h3>
       <h2 className="mx-auto p-4 text-4xl text-blue-700 font-bold">Search Cards</h2>
       <SearchBar onSearch={(term) => setSearchTerm(term)} />
       <CardList cards={cards} />
     </div>
   </ div>
  );
}

export default App;

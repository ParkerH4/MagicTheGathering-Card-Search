import React from 'react';

function CardList({ cards }) {
  return (
    <div className="grid grid-cols-4 gap-6 ">
      {cards.map(card => (
        <div key={card.id} className="border p-4 rounded-md bg-zinc-200 transition-transform transform hover:scale-110 hover:bg-blue-700">
          {card.image_uris && (
            <img
              src={card.image_uris.normal}
              alt={card.name}
              className="w-full mb-4 rounded-lg hover:shadow-lg group-hover:z-10 "
            />
          )}
          <h2 className="font-bold">Name</h2>
          <h2 className="mb-3">{card.name}</h2>
          <p className="font-bold">Set Name</p>
          <p className="mb-2">{card.set_name}</p>
          <p className="font-bold">Collector Number</p>
          <p className="mb-2">{card.collector_number}</p>
          <p className="font-bold">Rarity</p>
          <p className="text-sm uppercase">{card.rarity}</p>
        </div>
      ))}
    </div>
  );
}

export default CardList;
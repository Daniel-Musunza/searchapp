import React, { useState } from 'react';
import './App.css';
import hotelsData from './data.json';
function App() {
  const [query, setQuery] = useState('');
  const [hotels, setHotels] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setQuery(inputValue);

    // Filter hotels based on the search query
    const filteredHotels = hotelsData.filter(hotel =>
      hotel.name.toLowerCase().includes(inputValue.toLowerCase()) ||
      hotel.city.toLowerCase().includes(inputValue.toLowerCase())
    );

    setHotels(filteredHotels);
  };

  return (
    <div className="search-container">
      <h2>Search App</h2>
      <input
        type="text"
        placeholder="Search by hotel name or city..."
        className="search-input"
        value={query}
        onChange={handleInputChange}
      />
      <ul className="hotel-list">
        {hotels.map((hotel) => (
          <li key={hotel.id} className="hotel-item">
            <div>{hotel.name}</div>
            <div>{hotel.city}</div>
            <div>Rating: {hotel.rating}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

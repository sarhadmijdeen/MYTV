import React, { useState } from 'react';

const Search = ({ channels, onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    const searchQuery = e.target.value;
    setQuery(searchQuery);
    const filteredChannels = channels.filter(channel => 
      channel.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    onSearch(filteredChannels);
  };

  return (
    <input
      type="text"
      placeholder="Search channels..."
      value={query}
      onChange={handleSearch}
    />
  );
};

export default Search;

import React, { useState } from 'react';

function Search() {
  const [value, setValue] = useState('');

  return (
    <div className="search-container">
      <input
        className="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && (
        <div className="clear" onClick={() => setValue('')}>
          X
        </div>
      )}
    </div>
  );
}

export default Search;

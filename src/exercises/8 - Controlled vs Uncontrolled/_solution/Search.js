import React, { useState } from 'react';

function Search() {
  const [value, setValue] = useState('');

  return (
    <div class="search-container">
      <input
        class="search"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {value && (
        <div class="clear" onClick={() => setValue('')}>
          X
        </div>
      )}
    </div>
  );
}

export default Search;

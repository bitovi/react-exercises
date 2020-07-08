import React from 'react';

/*
    Modify the search component below so that it is controlled
    by state. 

    Also, modify the clear button so that, when clicked, it clears
    out the value of the input. 
    
    Finally, the clear button should only be visible when there is text in
    the input.
*/

function Search() {
  return (
    <div className="search-container">
      <input className="search" />
      <div className="clear">X</div>
    </div>
  );
}

export default Search;

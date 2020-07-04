import React from 'react';
  // for form processing 
import {useState, useEffect} from 'react';

const Search = () => {
  const [text, setText] = useState('');

  return (
    <div className="search">
      <form>
        <input type="text" className="form-control" 
        placeholder="search characters"
        value = {text}
        onChange={(e) => setText(e.target.value)}
        autoFocus/>
    
      </form>
    </div>
  )
}


export default Search; 
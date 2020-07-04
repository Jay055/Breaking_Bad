import React from 'react';
  // for form processing 
import {useState} from 'react';

const Search = ({getQuery}) => {
  const [text, setText] = useState('');


  const onChange = (q) => {
    getQuery(q);
    setText(q)
  }

  return (
    <section className="search">
      <form>
        <input type="text" className="form-control" 
        placeholder="search characters"
        value = {text}
        onChange={(e) => onChange(e.target.value)}
        autoFocus/>
    
      </form>
    </section>
  )
}


export default Search; 
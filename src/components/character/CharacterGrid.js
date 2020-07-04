import React from 'react';
import CharacterItem from './CharacterItem';

  // Catch props from App.js
const CharacterGrid = ({items, loading}) => {
  // console.log(items, loading);
  
  return loading? (
   <>loading</>
   ) :(
    <section className="cards">

  {items.map(item=>(
   
    <CharacterItem key={item.char_id} item={item}/>
    
   ))}
   </section>
    ) }
  
   
export default CharacterGrid; 
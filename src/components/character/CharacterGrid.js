import React from 'react';
import CharacterItem from './CharacterItem';
import Spinner from '../ui/Spinner';

  // Catch props from App.js
const CharacterGrid = ({items, loading}) => {
 
  
  return loading? (
   <Spinner />
   ) :(
    <section className="cards">

  {items.map(item=>(
   
    <CharacterItem key={item.char_id} item={item}/>
    
   ))}
   </section>
    ) }
  
   
export default CharacterGrid; 
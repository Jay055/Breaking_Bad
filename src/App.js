import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/ui/Header';
import {useEffect,useState} from 'react';
import axios from 'axios';
import CharacterGrid from './components/character/CharacterGrid';
import Search from './components/ui/Search';



const App = () => { 
    // Set Up State with useState/useEffect 
    const [items, setItems] = useState([])
    const [loading, setisLoading] = useState(true) ; 
    // set up state for query text 
    const [query, setQuery] = useState('');

    // Set Up API Call 
    useEffect(()=> {
        const fetchCharacters = async () => {
        const res = await axios(
          `https://www.breakingbadapi.com/api/characters?name=${query}`);
  
        setItems(res.data)
        setisLoading(false)
          
       
      }
      fetchCharacters();
     
    },[query]) 
  
  
    return (
    <div className="container">

    <Header />
    <Search getQuery={((q) => setQuery(q))}/>
    <CharacterGrid items={items} loading={loading} />
    </div>
  );
}

export default App;

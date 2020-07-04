import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/ui/Header';
import {useEffect,useState} from 'react';
import axios from 'axios';
import CharacterGrid from './components/character/CharacterGrid';



const App = () => { 
    // Set Up State with useState/useEffect 
    const [items, setItems] = useState([])
    const [loading, setisLoading] = useState(true) ; 

    // Set Up API Call 
    useEffect(()=> {
        const fetchCharacters = async () => {
        const res = await axios('https://www.breakingbadapi.com/api/characters');
  
        setItems(res.data)
        setisLoading(false)
          
        // console.log(res)
      }
      fetchCharacters();
     
    },[]) 
  
  
    return (
    <div className="container">

    <Header />
    <CharacterGrid items={items} loading={loading} />
    </div>
  );
}

export default App;

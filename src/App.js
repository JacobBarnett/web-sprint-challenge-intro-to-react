import React, {useState, useEffect} from 'react';
import Character from './components/Character';
import axios from 'axios'
import './App.css';

const App = () => { 
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people").then((response) => {
      setResults(response.data)
  })
  },[])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {results.map( c => {
        return <Character name={c.name} birthYear={c.birth_year} key={c.url} />
      })}
    </div>
  );
}

export default App;

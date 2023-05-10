import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import { Container } from '@mui/material';
import Header from './components/header/Header';
import Definition from './components/definitions/Definition';

function App() {

  const [word, setWord ] = useState("");
  const [meanings, setMeanings ] = useState([]);
  const [category, setCategory ] = useState("en");

  const dictionaryApi = async() => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      console.log(data);
      setMeanings(data.data);
    } catch (error) {
      console.log(error)
    }
  };

  //console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div className="App" style={{height: '100vh', backgroundColor: '#111010', color: '#fff'}}>
      <Container maxWidth='md' style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
        <Header 
          category={category} 
          setCategory={setCategory}
          word={word} 
          setWord={setWord}
          setMeanings={setMeanings}
          />
        {meanings && <Definition 
          word={word}
          meanings={meanings}
          category={category}
        />}
      </Container>
    </div>
  );
}

export default App;

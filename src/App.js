import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const[mydata,setMyData]=useState([]);
  const [count,setCount]=useState(30);
  useEffect(()=>{
    axios.get(`https://rickandmortyapi.com/api/character?page=${count}`)
    .then((res)=>setMyData(res.data.results))
    .catch((error) => console.error("Error fetching data: ", error));
    
  },[count]);

  const handleNext=()=>{
    setCount(count+1);  
    console.log(count);
  }
  const handlePrev=()=>{
    setCount(count-1);  
    console.log(count);
  }


return(
  <>
  <div className='App'>
  
  <div className='container'>
  <h1>Rick and Morty</h1>

    <div className='characters'>
  
    {
      mydata?.map((character)=>{
        // const {id,name,image,species,location}=character;
        return(
          <div className="card">
          <img src={character.image} alt="" />
          <div className="text-container">
          <h3>{character.name}</h3>
          <p className="status">
          {character.status} - {character.species}
          </p>
          <p className="title">Last seen on</p>
          <p>{character.location.name}</p>
      </div>
    </div>
        )
      })
    }
    </div>
    <button onClick={handlePrev}>Prev</button>
    <button onClick={handleNext}>Next</button>
    </div>
    </div>
  </>
)
}
export default App;
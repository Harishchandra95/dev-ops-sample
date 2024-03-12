import {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [userName, setUserName] = useState('');
  const getName = async() => {
    try{
      const getNameFromAPI = await fetch('/names', {method: 'GET'});
      const response = await getNameFromAPI.json();
      setUserName(response.name);
    } catch(error) {
      console.error(error);
    }
  }
  useEffect(()=> {
    getName()
  },[userName])
  return (
    <div>
      <h1>{userName}</h1>
    </div>
  );
}

export default App;

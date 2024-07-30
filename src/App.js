import './App.css';
import diceAnimation from './dice.gif';
import axios from 'axios';
import { useState } from 'react';

const App=()=>{
  const sleep=(ms)=> new Promise(resolve => setTimeout(resolve,ms));
  const [animation,setAnimation] = useState(null);

  const handleClick=async()=>{
    setAnimation(diceAnimation);
    const response = await axios.post("server",{ });
    if(response.status == 200){
      await sleep(5000);
      setAnimation(`../public/assets/${response.data.number}.png`);
    }
    else{
      handleClick();
    }
  }
  return (
    <div className="App">
      {
        animation ? 
        <img className="animation" src={animation} alt="Dice Animation" /> :
        null
      }
      <button className='rollButton' onClick={handleClick}>ROLL DICE</button>
    </div>
  );
}

export default App;

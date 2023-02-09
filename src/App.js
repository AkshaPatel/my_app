import './App.css';
import { useState } from 'react';


function App() {
  const [style, setstyle] = useState('');

  function handleClick1() {
    setstyle('style1');
  }

  function handleClick2() {
    setstyle('style2');
  }

  return (
    <div>
      <h1 className={style}> Change the style by pressing the buttons below: </h1>
      <button onClick={handleClick1}>Style 1</button>
      <button onClick={handleClick2}>Style 2</button>

    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

function MyButton() {
  function handleClick() {
    return (
      alert('You clicked the button')
    );
  }
  return (
    <button onClick={handleClick}> 
      I'm a button 
    </button>
  );
}

function App() {
  return (
    <div className="App">
      <h1> Hello World! </h1>
      <MyButton/>

    </div>
  );
}

export default App;

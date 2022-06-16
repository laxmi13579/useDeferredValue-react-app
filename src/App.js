import './App.css';
import {useState} from 'react';
import List from './List';

function App() {
  const [text, setText] = useState();
  return (
    <>
      <input value={text} type='text' onChange={(e)=>setText(e.target.value)}/>
      <List input={text} />
    </>
  );
}

export default App;

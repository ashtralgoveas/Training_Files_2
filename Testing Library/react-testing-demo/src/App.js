import './App.css';
import { useState } from 'react';
import Button from './components/Button/Button';
import Input from './components/Input/Input';

function App() {
  const [showDiv, setShowDiv] = useState(true);
  return (
    <div className="App">
      <Input showDiv={showDiv}/>
      <Button />
    </div>
  );
}

export default App;

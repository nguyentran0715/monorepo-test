import logo from './logo.svg';
import './App.css';

import { Button } from '@todo-liszt/components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <Button>Shared Button</Button>
      </header>
    </div>
  );
}

export default App;

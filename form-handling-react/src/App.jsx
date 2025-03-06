import { useState } from 'react';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikFork';


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      
      <FormikForm />
    </>
  );
}

export default App;
import { useState } from 'react';
import './App.css';
import Form from './components/form/form';

function App() {
  const [formValue, setFormValue] = useState({});

  return (
    <>
      <Form onSubmit={setFormValue}/>
    </>
  );
}

export default App;
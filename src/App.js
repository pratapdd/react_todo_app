import './App.css';
import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      console.log('--', snapshot)
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);


  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput('');
  }

  return (
    <div className="App">
      <form>
        <FormControl>
          <InputLabel>✅ Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>

        <Button disabled={!input} type="submit" variant="contained" color="primary" onClick={addTodo}>
          Add Todo
        </Button>
        <ul>
          {todos.map((todo) => (<Todo text={todo} />))}
        </ul>


      </form>
    </div>
  );
}

export default App;

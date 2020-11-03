import React, { useState } from 'react';
import './Todo.css';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';

import {
  List, ListItem, ListItemAvatar, ListItemText, Button, Modal
} from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}))

function Todo(props) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [input, setInput] = useState('');

  const updateTodo = () => {

    db.collection('todos').doc(props.todo.id).set({
      todo: input,
    }, { merge: true });

    setOpen(false);
  }

  return (
    <>
      <Modal open={open}

        onClose={e => setOpen(false)}>
        <div className={classes.paper}>
          <h1>I am a modal</h1>
          <input placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)} />
          <Button onClick={e => updateTodo()}> 🕵️‍♂️ Update Todo</Button>
        </div>
      </Modal>
      <List className="todo__css">
        <ListItem>
          <ListItemAvatar></ListItemAvatar>
          <ListItemText primary={props.todo.todo} secondary="Dummy deadline 💣" />
        </ListItem>
        <Button onClick={event => setOpen(true)} > 📖 EDIT</Button>
        <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()} > <DeleteForeverIcon /> DELETE ME</Button>
      </List>
    </>
  )
}

export default Todo;

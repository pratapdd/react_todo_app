import React from 'react';
import './Todo.css';

import {
  List, ListItem, ListItemAvatar, ListItemText
} from '@material-ui/core'

function Todo(props) {
  return (
    <List className="todo__css">
      <ListItem>
        <ListItemAvatar></ListItemAvatar>
        <ListItemText primary={props.text} secondary="Dummy deadline 💣" />
      </ListItem>
    </List>
  )
}

export default Todo;

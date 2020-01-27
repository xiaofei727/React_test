import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: 'white',
    backgroundColor: 'transparent',
    minHeight: '65px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'none',
    fontWeight: 'bold'
  },
  completed: {
    backgroundColor: 'green'
  },
  uncompleted: {
    backgroundColor: 'red'
  },
  link: {
    textDecoration: 'none'
  }
}));
function TodoItemScreen({todo}) {
    const classes = useStyles();

    return (
        <Grid item xs={6} sm={3}>
            <Link to={`/todos/${todo.id}`} className={classes.link}>
              <div className={todo.completed ? classes.completed : classes.uncompleted}>
                <Paper className={classes.paper}>{todo.title}</Paper>
              </div>
            </Link>
        </Grid>
    );
}   

export default TodoItemScreen;
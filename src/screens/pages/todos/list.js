import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TodoItemScreen from './item';

import { getAllTodos } from "../../../actions/todos";

import Layout from "../../../components/Layout";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: '6%'
    },
    title: {
        textAlign: 'center'
    },
    spinner: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

function TodoListScreen() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTodos());
    }, [dispatch]);

    const todos = useSelector(state => state.todos.todos);
    const loading = useSelector(state => state.todos.loading);

    return (
        <Layout>
            <div className={classes.root}>
                {loading ? (
                    <div className={classes.spinner}>
                        <CircularProgress />
                    </div>
                ) : (
                    <Container fixed>
                        <h1 className={classes.title}>Todo's List</h1>
                        <Grid container spacing={3}>
                            {
                                todos.map((todo) =>
                                    <TodoItemScreen todo={todo} key={todo.id}/>
                                )
                            }
                        </Grid>
                    </Container>
                )}
            </div>
        </Layout>
    );
}   

export default TodoListScreen;
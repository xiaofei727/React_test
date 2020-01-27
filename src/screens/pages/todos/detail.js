import React, { useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { getTodoById } from "../../../actions/todos";

import Button from '@material-ui/core/Button';
import Layout from "../../../components/Layout";
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      marginTop: '5%'
    },
    title: {
        textAlign: 'center'
    },
    link: {
        marginTop: '20px'
    },
    spinner: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

function TodoDetailScreen() {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getTodoById(id));
    }, [dispatch, id]);

    const todo = useSelector(state => state.todos.todo);
    const loading = useSelector(state => state.todos.loading);
    const history = useHistory();
    return (
        <Layout>
            <div className={classes.root}>
                {loading ? (
                    <div className={classes.spinner}>
                        <CircularProgress />
                    </div>
                ) : (
                    <Container fixed>
                        <h1 className={classes.title}>Todo Details</h1>
                        <ul>
                            <li><strong >Title:</strong> {todo.title}</li>
                            <li><strong>Status:</strong> {todo && todo.completed ? 'Completed' : 'Incomplete'}</li>
                            {/* <li><strong>ID:</strong> {todo.id}</li>
                            <li><strong>User ID:</strong> {todo.userId}</li> */}
                        </ul>
                        <Button  color="primary" variant="outlined" className={classes.link} onClick={() => {history.push("/todos")}}>
                            Todo's List
                        </Button>
                    </Container>
                )}
            </div>
        </Layout>
    );
}   

export default TodoDetailScreen;
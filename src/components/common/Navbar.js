import React from 'react';
import { useDispatch } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

function Navbar() {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const logout = () => {
      sessionStorage.removeItem('username');
      dispatch({ type: "LOGOUT_SUCCESS" });
      history.push({
        pathname: '/'
      })
    }

    return (
        <AppBar position="fixed" color="default" elevation={0} className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
                    TEST PROJECT
                </Typography>
                <nav>
                    <Button color="primary" variant="outlined" className={classes.link} onClick={() => {history.push("/todos")}}>
                      TODOS
                    </Button>
                </nav>
                <Button color="primary" variant="outlined" className={classes.link} onClick={() => logout()}>
                    Log out
                </Button>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
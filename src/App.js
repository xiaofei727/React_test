import React from 'react';

import { Route, BrowserRouter as Router, Redirect } from "react-router-dom";
import { Provider, useSelector } from "react-redux";

import './App.css';

import LoginScreen from './screens/auth/login';
import TodoListScreen from './screens/pages/todos/list';
import TodoDetailScreen from './screens/pages/todos/detail';

import configureStore from "./store";
const store = configureStore({});

function PrivateRoute({ component: Component, ...rest }) {
  let auth = useSelector(state => state.auth);
  let authed = auth.isAuthenticated;

  return(
      <Route
          {...rest}
          render={props => (
            authed
                  ? <Component {...props} />
                  : <Redirect to="/" />
          )}
      />
  );
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Route exact path="/" component={LoginScreen}/>
          <PrivateRoute exact path="/todos" component={TodoListScreen} />
          <PrivateRoute path="/todos/:id" component={TodoDetailScreen} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;

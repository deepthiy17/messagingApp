import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import Home from './views/Home';

const store = createStore();

const useStyles = makeStyles({
  container: {
    width: '100vw',
    height: '100vh',
  }
});

const App = () => {
  const classes = useStyles()
  return (
  <Provider store={store}>
    <Container className={classes.container}>
      <Home />
    </Container>
  </Provider>
)};

export default App;

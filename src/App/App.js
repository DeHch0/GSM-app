import { data } from '../db.js';
import Header from '../Header/Header'
import Home from '../Home/Home';
import Login from '../Login/Login'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}
  from 'react-router-dom';
import './App.css';

function App() {

  let name = data.json;

  return (
    <Router>

      <Header />
      <Switch>

        <Route exact path='/'>
          <Home />
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;

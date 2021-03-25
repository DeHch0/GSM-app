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
import Register from '../Register/Register.jsx';
import Footer from '../Footer/index.jsx';

function App() {


  return (
    <Router>

      <Header />
      <Switch>

        <Route exact path='/'>
          <Home />
          <Footer/>
        </Route>

        <Route path='/login'>
          <Login />
        </Route>

        <Route path='/register'>
          <Register />
        </Route>

      </Switch>

    </Router>
  );
}

export default App;

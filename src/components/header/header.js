import React, {Component} from 'react';
import Logo from '../Images/logo.png'
import './header.scss'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

class Header extends Component{
  render(){
    return(
      <React.Fragment>
        <Router>
          <header className="header">
            <a href="" className="logo">LOGO</a>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" for="menu-btn"><span className="navicon"></span></label>
            <ul className="menu">
              <li><Link to="/">HOME</Link></li>
              <li><Link to="/about">ABOUT</Link></li>
              <li><Link to="/contact">CONTACT</Link></li>
              <li><Link to="/login">LOGIN</Link></li>
              <li><Link to="/register">REGISTER</Link></li>
            </ul>
          </header>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default Header;
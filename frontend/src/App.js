import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

import AddTutorial from './components/add-tutorial';
import Tutorial from './components/tutorial';
import TutorialsList from './components/tutorials-list';

export default function App() {
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a href='/tutorials' className='navbar-brand'>
          bezKoder
        </a>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={'/tutorials'} className='nav-link'>
              Tutorials
            </Link>
          </li>
          <li className='nav-item'>
            <Link to={'/add'} className='nav-link'>
              Add
            </Link>
          </li>
        </div>
      </nav>

      <div className='container mt-3'>
        <Switch>
          <Route exact path={['/', '/tutorials']} component={TutorialsList} />
          <Route exact path='/add' component={AddTutorial} />
          <Route path='/tutorials/:id' component={Tutorial} />
        </Switch>
      </div>
    </div>
  );
}

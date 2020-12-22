import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './global.css'

import App from './App'

/* Navigation */
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

function Navigation() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand>
        <NavLink to='/' exact>Brand</NavLink>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <NavLink to='/' exact>app</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}


ReactDOM.render(
  <BrowserRouter>
    <Navigation />
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
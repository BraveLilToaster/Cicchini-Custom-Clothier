import React, { Component } from 'react'
import Header from './components/Header'
import logo from './logo.svg'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import index from './routes/index'
import NotFound from './routes/NotFound'
import navRoutes from './constants/routes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header routes={navRoutes} />
          <Switch>
            <Route exact path='/' component={index} />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    )
  }
}

export default App;

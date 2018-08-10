import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import navRoutes from './constants/routes'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import Header from './components/Header'
import logo from './logo.svg'
import index from './routes/index'
import NotFound from './routes/NotFound'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <Header routes={navRoutes} />
            <Switch>
              <Route exact path='/' component={index} />
              <Route component={NotFound} />
            </Switch>
          </React.Fragment>
        </ThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App;

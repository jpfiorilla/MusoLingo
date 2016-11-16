// Libraries
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

// React components
import App from './components/App'

// Redux actions and thunks
import store from './store'

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/">

      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)

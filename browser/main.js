// Libraries
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

// import injectTapEventPlugin from 'react-tap-event-plugin'
// injectTapEventPlugin();

// React components
import App from './components/App'
import Lesson from "./components/Lesson/Lesson.jsx"

// Redux actions and thunks
import store from './store'

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={App}>
        <Route path="/lesson" component={Lesson} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)

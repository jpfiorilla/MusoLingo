// Libraries
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

// import injectTapEventPlugin from 'react-tap-event-plugin'
// injectTapEventPlugin();

// React components
import App from './components/App'
import Quiz from "./components/Quiz/Quiz.jsx"
import Login from "./components/Login/LoginContainer"
import FacebookLogin from "./components/Login/FacebookLogin"

// Redux actions and thunks
import store from './store'

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={App}>
        <Route path="/quiz" component={Quiz} />
        <Route path="/login" component={Login} />
        <Route path="/login/fb" component={FacebookLogin} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
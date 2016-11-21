// Libraries
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import { randomTrebleNote } from './utils'

// import injectTapEventPlugin from 'react-tap-event-plugin'
// injectTapEventPlugin();

// React components

import App from './components/App'
import Quiz from "./components/Quiz/Quiz.jsx"
import Login from "./components/Login/LoginContainer"
import NavigationPage from './components/NavigationPage/NavigationPageContainer';
import Account from "./components/Account/AccountContainer";
import Challenge from "./components/Challenge/Challenge";

// Redux actions and thunks
import store from './store'

import { askServerForAllTopics } from './redux/TopicsActions';
import { askServerForAllLessons } from './redux/LessonsActions';
// dispatch askServerForAllTopics
const onNavigationEnter = () => {
  store.dispatch(askServerForAllTopics());
  store.dispatch(askServerForAllLessons());
}

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={App} >
      <Route path="/quiz" component={Quiz} />
      <Route path="/login" component={Login} />
      <Route path="/account" component={Account} />
      <Route path="/nav" component={NavigationPage} onEnter={onNavigationEnter}/>
      <Route path="/game" component={Challenge}/>
    </Route>
  </Router>
</Provider>,
document.getElementById('main')
)

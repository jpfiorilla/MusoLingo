// Libraries
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

import { randomTrebleNote } from './utils'

// import injectTapEventPlugin from 'react-tap-event-plugin'
// injectTapEventPlugin();

// React components

import App from './components/App';
import Quiz from "./components/Quiz/QuizContainer";
import Login from "./components/Login/LoginContainer";
import NavigationPage from './components/NavigationPage/NavigationPageContainer';
import Account from "./components/Account/AccountContainer";
import SlidesContainer from './components/Slides/SlidesContainer';
import HomePage from "./components/HomePage/HomePage";
import LessonPage from "./components/LessonPage/LessonPage";
import Challenge from "./components/Challenge/ChallengeContainer";
import UserPage from './components/UserPage/UserPageContainer';
import Keyboard from "./components/Keyboard/Keyboard";

// Redux actions and thunks
import store from './store'

import { askServerForAllTopics } from './redux/TopicsActions';
import { askServerForAllLessons } from './redux/LessonsActions';
import { retrieveLoggedInUser } from './redux/user';
import { askServerForChallenge } from './redux/ChallengeActions';

const onNavigationEnter = () => {
  store.dispatch(askServerForAllTopics());
  store.dispatch(askServerForAllLessons());
}

const onEnterRetrieveLoggedInUser = () => {
  store.dispatch(retrieveLoggedInUser());
}

const onEnterRetrieveChallenge = (nextState) => {
  store.dispatch(askServerForChallenge(nextState.params.id));
}

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/home" component={HomePage} />
      <Route path="/" component={App} onEnter={onEnterRetrieveLoggedInUser}>
      <Route path="/quiz" component={Quiz} />
      <Route path="/login" component={Login} />
      <Route path="/account" component={Account} />
      <Route path="/nav" component={NavigationPage} onEnter={onNavigationEnter}/>
      <Route path="/slides" component={SlidesContainer} />
      <Route path="/lesson" component={LessonPage} />
      <Route path="/game" component={Challenge}/>
      <Route path="/user" component={UserPage}/>
      <IndexRoute component={NavigationPage} onEnter={onNavigationEnter}/>
      <Route path="/game/:id" component={Challenge} onEnter={onEnterRetrieveChallenge}/>
      <Route path="/keyboard"/>
    </Route>
  </Router>
</Provider>,
document.getElementById('main')
)

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
import { LoginContainer } from "./components/Login/LoginContainer";
import NavigationPage from './components/NavigationPage/NavigationPageContainer';
import Account from "./components/Account/AccountContainer";
import SlidesContainer from './components/Slides/SlidesContainer';
import HomePage from "./components/HomePage/HomePage";
import LessonPage from "./components/LessonPage/LessonPage";
import Challenge from "./components/Challenge/ChallengeContainer";
import UserPage from './components/UserPage/UserPageContainer';
import Keyboard from "./components/Keyboard/Keyboard";
import About from "./components/About/About"
import FAQ from './components/FAQ/FAQ';
// import ExternalLink from './components/Slides/SubComponents/ExternalRefs';

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
  var user = localStorage.user && JSON.parse(localStorage.user);
  if (! user || ! user.id) {
    browserHistory.push('/home');
  } else {
    if (! store.getState().user.id) {
      store.dispatch(retrieveLoggedInUser());
    } else {
      console.log('User is already logged in');
    }
  }
}

const onEnterRetrieveChallenge = (nextState) => {
  store.dispatch(askServerForChallenge(nextState.params.id));
}

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/home" component={HomePage} />
      <Route path="/" component={App} onEnter={onEnterRetrieveLoggedInUser}>
      <Route path="/faq" component={FAQ} />
      <Route path="/about" component={About} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/account" component={Account} />
      <Route path="/nav" component={NavigationPage} onEnter={onNavigationEnter}/>
      <Route path="/slides" component={SlidesContainer} onEnter={onNavigationEnter} />
      <Route path="/lesson" component={LessonPage} />
      <Route path="/game" component={Challenge}/>
      <Route path="/user" component={UserPage}/>
      <Route path="/game/:id" component={Challenge} onEnter={onEnterRetrieveChallenge}/>
      <Route path="/keyboard"/>
      <Route path="/*" Component={HomePage} />

      {/* <Route path="/test" component={ExternalLink}/> */}

      <IndexRoute component={NavigationPage} onEnter={onNavigationEnter}/>
    </Route>
  </Router>
</Provider>,
document.getElementById('main')
)

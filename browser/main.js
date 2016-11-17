// Libraries
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

// import injectTapEventPlugin from 'react-tap-event-plugin'
// injectTapEventPlugin();

// React components
import App from './components/App';
import Quiz from "./components/Quiz/Quiz.jsx";
import HomePageContainer from './components/HomePage/HomePageContainer';

// Redux actions and thunks
import store from './store'
import { askServerForAllTopics } from './redux/HomePageActions';
const onHomeEnter = () => {
  const thunk = askServerForAllTopics();
  store.dispatch(thunk);
}

render(
  <Provider store={ store }>
    <Router history={ browserHistory }>
      <Route path="/" component={App} >
        <Route path="/quiz" component={Quiz} />
        <IndexRoute component={HomePageContainer} onEnter={onHomeEnter}/>
      </Route>
    </Router>
  </Provider>,
document.getElementById('main')
)

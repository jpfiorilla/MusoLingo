import React from 'react';
import { Link, browserHistory } from 'react-router'
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import LinearProgress from 'material-ui/LinearProgress';

export default class NavigationPage extends React.Component {

  constructor () {
    super();
    this.state = {
      lessonsWithThisId: [],
      currentLessonId: '',
      hideLessons: 'col-md-6 hidden'
    };
    this.setCurrentLesson = this.setCurrentLesson.bind(this);
    this.getSlidesAndHeadOver = this.getSlidesAndHeadOver.bind(this);
    this.checkCompletion = this.checkCompletion.bind(this);
  }

  checkCompletion(lessonId) { // checks current quiz
    let score = 0;
    if (this.props.user.completed.quizzes[lessonId] >= 0.6) {
      score += 1;
    }
    if (this.props.user.completed.challenges[lessonId] >= 0.5) {
      score += 1;
    }
    if (this.props.user.completed.lessons[lessonId]) {
      score += 1;
    }
    return (score / 3) * 100;
  }

  setCurrentLesson (hovered) {
    const topic_id = hovered.id;
    let lessonsWithId = this.props.lessons.filter(lesson => {
      return lesson.topic_id === topic_id;
    });
    this.setState({
      currentLessonId: topic_id,
      lessonsWithThisId: lessonsWithId
    })
  }

  getQuizAndHeadOver (lessonId) {
    this.props.clearQuizzes();
    this.props.askForQuiz(lessonId);
    browserHistory.push(`/quiz`);
  }

  getSlidesAndHeadOver (lessonId) {
    this.props.clearSlides();
    this.props.askForSlides(lessonId);
    browserHistory.push('/slides');
  }

  render () {
    let backgrounds = ['url(/images/reading-music.png)', 'url(/images/navpage-beathoven-piano.png)', 'url(images/navpage-crowd.png)'];
    var random_background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    return (
      <div className="navigation-container">
        {
          this.props.topics && this.props.topics.map((topic, index) => {
            return (
              <div id={`navpage-${index}`} className="navpage-container container" key={index}>
                <div className="row">
                  <div className="col-xs-12 col-md-2">
                    <h3 className="topic-header">{topic.name}</h3>
                  </div>
                  <div className="col-xs-12 col-md-10">
                    <div className="topic-lessons-container">
                      {
                        this.props.lessons && this.props.lessons.map((lesson, index2) => {
                          if(lesson.topic_id === topic.id){
                            return (
                              <div className="lesson-container" key={index2}
                                onMouseOver={() => {
                                  $(`#slides-quizzes-${index2}`).addClass("slides-quizzes-visible") } } onMouseOut={() => { $(`#slides-quizzes-${index2}`).removeClass("slides-quizzes-visible") } }>
                                  <h3 id="lesson-step" className="col-md-1">{index2 + 1}</h3>
                                  <h3 id={`lesson-header-${index2}`} className="lesson-header">{lesson.title}</h3>
                                  <div className="progress vertical">
                                    <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: this.checkCompletion(lesson.id) + "%"}}>
                                    </div>
                                  </div>
                                  <div id={`slides-quizzes-${index2}`} className="slides-quizzes">
                                    <h3 id="learn" onClick={() => { this.getSlidesAndHeadOver(lesson.id) } }>Learn</h3>
                                    <h3 id="divider">|</h3>
                                    <h3 id="test" onClick={() => { this.getQuizAndHeadOver(lesson.id) } }>Test</h3>
                                    <h3 id="divider">|</h3>
                                    <h3 id="play">Play</h3>
                                  </div>
                                </div>
                              )
                            }
                          })
                        }
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      )
    }
  }

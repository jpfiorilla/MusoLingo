import React from 'react';
import { Link, browserHistory } from 'react-router'
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';

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
    // NOTE: hard coding 1 for testing purposes.
    // NOTE: change back  to lesson Id when db is updated with actual lesson material.
    // *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
    
    this.props.askForSlides(lessonId);
    browserHistory.push('/slides');
    // *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
  }

  render () {
    let icons = ["/images/notes.ico", "/images/staff.png"];
    let backgrounds = ['url(/images/reading-music.png)', 'url(/images/navpage-beathoven-piano.png)'];
    var random_background = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    return (
      <div className="col-md-6">
            {
              this.props.topics && this.props.topics.map((topic, index) => {
                return (
                  <div className="navpage-container" key={index} onMouseOver={() => {this.setCurrentLesson(topic)}}>
                    <div className="flipper">
                      <div className="front">
                            <div className="navbar-icon-text">
                              <h3 className="topic-header">{topic.name}</h3>
                            </div>
                        <div style={{backgroundImage: backgrounds[index] || backgrounds[0], opacity: "0.5"}} className="navbar-icon">
                          </div>
                      </div>
                      <div className="back">
                        {
                          this.props.lessons.map((lesson, index2) => {
                            if(lesson.topic_id === topic.id){
                              return (
                                <div key={index2}>
                                  <h3 className="lesson-header">{lesson.title}</h3>
                                  <div className="slides-quizzes">
                                    <h3 id="learn" onClick={() => {this.getSlidesAndHeadOver(lesson.id)}}>Learn</h3>
                                    <h3 id="play" onClick={() => {this.getQuizAndHeadOver(lesson.id)}}>Play</h3>
                                  </div>
                                <hr className="style1" />
                                </div>
                                )
                            }
                          })
                        }
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

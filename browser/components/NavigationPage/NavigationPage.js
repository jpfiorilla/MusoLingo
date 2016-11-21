import React from 'react';
import { Link, browserHistory } from 'react-router'
import {List, ListItem} from 'material-ui/List';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import FlatButton from 'material-ui/FlatButton';
import Subheader from 'material-ui/Subheader';

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
  setCurrentLesson (clicked) {
    const topic_id = clicked.id;
    if (this.state.currentLessonId === topic_id) {
      this.state.hideLessons = 'col-md-6 hidden';
      this.state.lessonsWithThisId = [];
      this.state.currentLessonId = '';
      this.forceUpdate();
      return;
    }
    this.state.currentLessonId = topic_id;
    this.state.lessonsWithThisId = this.props.lessons.filter(lesson => {
      return lesson.topic_id === topic_id;
    });
    if (this.state.lessonsWithThisId.length) {
      this.state.hideLessons = 'col-md-6';
    } else {
      this.state.hideLessons = 'col-md-6 hidden'
    }
    this.forceUpdate();
  }

  getSlidesAndHeadOver (lessonId) {
    // NOTE: hard coding 1 for testing purposes.
    // NOTE: change back  to lesson Id when db is updated with actual lesson material.
    // *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
    this.props.askForSlides(1);
    browserHistory.push('/slides');
    // *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
  }

  render () {
    return (
      <div>
        <div className="col-md-6">
          <List>
            <Subheader>
              Topics
            </Subheader>
            {
              this.props.topics && this.props.topics.map((topic, index) => {
                return (
                  <ListItem onClick={() => {
                    this.setCurrentLesson(topic);
                  }} key={index} primaryText={topic.name} leftIcon={<ContentInbox />} />
                )
              })
            }
          </List>
        </div>
        <div className={this.state.hideLessons}>
          <List>
            <Subheader>
              Lessons
            </Subheader>
            {
              this.state.lessonsWithThisId.length && this.state.lessonsWithThisId.map((lesson, index) => {
                return (
                  <ListItem key={index} primaryText={lesson.title} leftIcon={<ContentInbox />} rightIconButton={
                    <div>
                      <FlatButton onClick={() => {
                        this.getSlidesAndHeadOver(lesson.id);
                      }} label="Slides" />
                      <FlatButton label="Quizzes" />
                    </div>
                  }>
                </ListItem>
              )
            })
          }
        </List>
      </div>
    </div>
  )
}
}

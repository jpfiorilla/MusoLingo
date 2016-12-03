import React from 'react';
import { Link, browserHistory } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

// NOTE: COMPONENT DESCRIPTION:

// This component allows the teacher to provide links to
// external references so the student can continue learning
// about a subject.

export default class ExternalLink extends React.Component {

  constructor (props) {

    super (props);

    this.state = {
      link: this.props && this.props.link || ['http://www.pgatour.com/'],
      linkDisplay: this.props && this.props.linkDisplay || ["YES!!"],
      description: this.props && this.props.description || 'Check out some more really cool info on this subject!'
    };

  }

  render() {

    return (
      <div>
        <h2>
          {this.state.description}
        </h2>
        {
          this.state.link.map((link, index) => {
            return (
              <div key={index}>
                <RaisedButton
                  label={this.state.linkDisplay[index]}
                  onClick={() => window.open(link)}
                  primary={true}
                />
              </div>
            );
          })
        }
      </div>
    );
  }
}

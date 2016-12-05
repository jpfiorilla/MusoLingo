import React from 'react';
import { Link, browserHistory } from 'react-router';

// NOTE: COMPONENT DESCRIPTION:

// This component provides students with a button where they can hear
// some sort of audio with a description of the audio they are hearing.

export default class AudioLink extends React.Component {

  constructor (props) {

    super (props);

    this.state = {
      source: this.props && this.props.source,
      type: this.props && this.props.type || "audio/mp3",
      description: this.props && this.props.description
    };

  }

  render() {

    return (
      <div>
        <h2>
          {this.state.description}
        </h2>
        <audio controls>
          <source src={this.state.source} type={this.state.type} />
          Your browser does not support the audio element.
        </audio>
      </div>
    );
  }
}

import React from 'react';
import { Link, browserHistory } from 'react-router';

// NOTE: COMPONENT DESCRIPTION:

// this component displays text for the lesson

export default class Text extends React.Component {

  constructor (props) {
    super (props);
    this.state = {
      text: this.props && this.props.text
    };
    this.jsxBold = this.jsxBold.bind(this);
  }

  jsxBold (text) {
    // NOTE: since the slides are seeded with <b> tags, we need have the bold text actually display.
    let retArr = [];
    let index = 0;
    let elType = 'p';
    let subStr = '';
    let childIndex = 0;

    while (index < text.length) {
      let features = {
        style: {display : 'inline'},
        key: childIndex
      };
      // NOTE: if we encounter a tag we assume it's an opening or closing b tag.
      if (text[index] === '<') {
        // NOTE: if it's an opening tag...
        if (text.slice(index, index + 3) === '<b>') {
          // NOTE: create a <p> JSX element with the text in substring.
          retArr.push(React.createElement(elType, features, subStr));
          subStr = '';
          elType = 'b';
          index += 3;
        } else { // closing tag, return the b.
          retArr.push(React.createElement(elType, features, subStr));
          subStr = '';
          elType = 'p';
          index += 4;
        }
        childIndex ++;
      } else {
        subStr += text[index];
        index ++;
      }
    }
    if (subStr) {
      retArr.push(React.createElement('p', {
        style: {display : 'inline'},
        key: childIndex
      }, subStr));
    }
    return retArr;
  }

  render() {
    return (
      <div>
        {this.jsxBold(this.state.text)}
      </div>
    );
  }
}

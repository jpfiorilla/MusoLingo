import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class FAQ extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
      
    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleReduce = this.handleReduce.bind(this);
  }

  handleExpandChange (expanded) {
    this.setState({expanded: expanded});
  };

  handleToggle (event, toggle) {
    this.setState({expanded: toggle});
  };

  handleExpand () {
    this.setState({expanded: true});
  };

  handleReduce () {
    this.setState({expanded: false});
  };

  render() {
      return (
          <div>
            <h3 id="faq-header">FAQ</h3>      
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>

                <CardText>
                <Toggle
                    toggled={this.state.expanded}
                    onToggle={this.handleToggle}
                    labelPosition="right"
                    label="What is 88 Keys?"
                />
                </CardText>
                <CardTitle title="What is 88 Keys?" expandable={true} style={{fontFamily: "gravity-bold"}} />
                <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>
            <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>

                <CardText>
                <Toggle
                    toggled={this.state.expanded}
                    onToggle={this.handleToggle}
                    labelPosition="right"
                    label="What is 88 Keys?"
                />
                </CardText>
                <CardTitle title="What is 88 Keys?" expandable={true} style={{fontFamily: "gravity-bold"}} />
                <CardText expandable={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                </CardText>
            </Card>
      </div>
    );
  }
}
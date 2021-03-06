import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

let buttonStyle = {
    fontSize: "14px",
    fontFamily: "bebas-kai"
}

export default class About extends React.Component {

  constructor(props) {
    super (props);
    this.state = {};
  }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-3 col-m-3 col-l-3">
                        <Card>
                            <CardHeader
                            avatar="images/beathoven-head.png"
                            />
                            <CardMedia>
                            <img src="images/about_pictures/Sue-Roh.JPG" />
                            </CardMedia>
                            <CardTitle id="about-name" title="NAME HERE" subtitle="Beathoven's Helper" />
                            <CardText id="about-text">
                            I'm a fullstack software engineer who likes to get down with Beathoven to Beethoven.
                            </CardText>
                            <CardActions>
                            <FlatButton
                                href="https://github.com/wiseshrimp"
                                style={buttonStyle} label="GITHUB" />
                            <FlatButton style={buttonStyle} label="LINKEDIN" />
                            </CardActions>
                        </Card>
                    </div>

                    <div className="col-xs-3 col-m-3 col-l-3">
                        <Card>
                            <CardHeader
                            avatar="images/beathoven-head.png"
                            />
                            <CardMedia>
                            <img src="images/homepage-image.jpg" />
                            </CardMedia>
                            <CardTitle id="about-name" title="Brian Long" subtitle="Beathoven's Helper" />
                            <CardText id="about-text">
                            I'm a fullstack software engineer who likes to get down with Beathoven to Beethoven.
                            </CardText>
                            <CardActions>
                            <FlatButton href="" style={buttonStyle} label="GITHUB" />
                            <FlatButton href="" style={buttonStyle} label="LINKEDIN" />
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-xs-3 col-m-3 col-l-3">
                        <Card>
                            <CardHeader
                            avatar="images/beathoven-head.png"
                            />
                            <CardMedia>
                            <img src="images/homepage-image.jpg" />
                            </CardMedia>
                            <CardTitle id="about-name" title="NAME HERE" subtitle="Beathoven's Helper" />
                            <CardText id="about-text">
                            I'm a fullstack software engineer who likes to get down with Beathoven to Beethoven.
                            </CardText>
                            <CardActions>
                            <FlatButton href="" style={buttonStyle} label="GITHUB" />
                            <FlatButton href="" style={buttonStyle} label="LINKEDIN" />
                            </CardActions>
                        </Card>
                    </div>
                    <div className="col-xs-3 col-m-3 col-l-3">
                        <Card>
                            <CardHeader
                            avatar="images/beathoven-head.png"
                            />
                            <CardMedia>
                            <img src="images/homepage-image.jpg" />
                            </CardMedia>
                            <CardTitle id="about-name" title="NAME HERE" subtitle="Beathoven's Helper" />
                            <CardText id="about-text">
                            I'm a fullstack software engineer who likes to get down with Beathoven to Beethoven.
                            </CardText>
                            <CardActions>
                            <FlatButton href="" style={buttonStyle} label="GITHUB" />
                            <FlatButton href="" style={buttonStyle} label="LINKEDIN" />
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </div>
        )
    }
}

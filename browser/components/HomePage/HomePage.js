import React from 'react';
import { browserHistory } from 'react-router';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import {LoginContainer} from "../Login/LoginContainer";
import {GetStartedContainer} from "../Login/LoginContainer"
import AOS from "aos";
import ReactPlayer from "react-player";

const style = {
    margin: 12
}

export default class HomePage extends React.Component {
    componentWillMount() {
        AOS.init();
    }
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div className="homepage-1">

                        <div className="fullscreen-beathoven">
                            <video loop muted autoPlay className="fullscreen-bg-video">
                                <source src="movies/beathoven-main.mp4" type="video/mp4" />
                            </video>
                        </div>
                        <div id="image-overlay">
                            <div className="homepage-navbar">
                                <LoginContainer />
                                <a href="" className="homepage-nb" id="homepage-home-link">Home</a>
                                <a href="" className="homepage-nb" id="homepage-features-link">Features</a>
                                <a onClick={() => browserHistory.push('/about')} className="homepage-nb" id="homepage-about-link">Team</a>
                            </div>
                            <div className="homepage-content">
                                <img src="/images/logo.png" id="intro-logo" />
                                <p id="intro-text">Start playing the keyboard today</p>
                                <GetStartedContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        )
    }
}


                /* <div data-aos="fade-right"
                    className="homepage-2">
                    <div id="image-overlay-2">
                        <h3 id="monitor">Monitor Progress</h3>
                        <p id="monitor-text">
                            We offer a simple and easy way for you to monitor your progress.
                            Win keys for lessons, games, and quizzes and challenge your friends.
                            Collect all 88!
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" className="have-fun-page">
                    <div className="homepage-3">
                        <div id="image-overlay-3"></div>
                    </div>
                        <h3 id="have-fun">Have fun learning</h3>
                        <p id="have-fun-text">
                            Our educational platform offers a wide variety of learning tools
                            ranging from quizzes to fun games. Regardless of your learning style,
                            88 will adapt to your needs to ensure a productive music environment.
                        </p>
                    </div>
                </div> */

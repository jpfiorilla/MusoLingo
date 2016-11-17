import React from 'react'
import { render } from 'react-dom'

export default class FacebookLogin extends React.Component {
    componentWillMount() {
        window.fbAsyncInit = function() {
            FB.init({
            appId      : '212413969199671',
            xfbml      : true,
            version    : 'v2.6'
            })
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
    render () {
        return (
            <div className="fb-login-button" data-max-rows="1" data-size="medium" data-show-faces="false" data-auto-logout-link="false"></div>
        )
    }
}
import React, { Component } from 'react';

export default class test extends Component {
  componentDidMount() {
    console.log(socialid);
    socialid.login.init(465, { loginType: 'event' });
    socialid.login.renderLoginWidget(
      'login-c6ab6f67',
      { providers: ['facebook', 'gplus', 'twitter', 'linkedin'], theme: 'bricks', showSocialIdLink: true }
    );

    socialid.events.onLoginStart.addHandler((data) => {
      console.log('Website received onLoginStart: ', data);
    });

    socialid.login.getUserInfo((data) => {
      console.log(data);
    });
  }

  render() {
    return (<div id="login-c6ab6f67" style={{ display: 'inline-block', padding: 5 }} />);
  }
}

import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Grid, Button } from 'semantic-ui-react';

import Layout from '../components/Layout';

import {validateConnection, loginInfo} from '../lib/api';

const style = {
  title: {
    fontWeight: 'bolder',
    fontSize: "1.4em"
  }
};

export default class Home extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {

      socialid.login.init(465, { loginType: 'event' });
      socialid.login.getConnectionStatus(result => {
        if(result.status === 'success'){
          validateConnection(result.data.connection_id).then( res => {
            console.log('validation');
            console.log(res);
            Router.push('/account');
          })
        }
      })

      socialid.login.renderLoginWidget(
        'login-c6ab6f67',
        { providers: ['facebook', 'gplus', 'twitter', 'linkedin'], theme: 'bricks', showSocialIdLink: true }
      );

      socialid.events.onLoginSuccess.addHandler(function(data) {
        Router.push('/account');
      });

  }


  render() {
    console.log('props',this.props);
    console.log('state',this.state);
    return (
      <Layout>
        <Grid.Row style={style.title}>
            Use social login para acessar sua conta
        </Grid.Row>
        <Grid.Row>
          <div id="login-c6ab6f67" style={{ display: 'inline-block', padding: 5 }} />
        </Grid.Row>
      </Layout>
    );
  }
}

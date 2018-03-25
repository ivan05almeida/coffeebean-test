import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Grid, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import UserInfo from '../components/UserInfo';
import {validateConnection, getUserProfile, loginInfo} from '../lib/api';


export default class Account extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
      socialid.login.init(465, { loginType: 'event' });
      socialid.login.getConnectionStatus(result => {
        if(result.status !== 'success'){
          Router.push('/')
        }else{
          this.renderUser(result.data.connection_id);
        }
      })

      socialid.login.renderConnectWidget("socialid_connect_container", {
       theme: "icons",
       providers: ["facebook", "gplus", "twitter", "linkedin"],
       language: "pt_br",
       showSocialIdLink: true,
       loadCss: true
     });

     socialid.events.onConnectSuccess.addHandler((data) => {
        this.renderUser(this.state && this.state.connection_id);
     });

     socialid.events.onDisconnectSuccess.addHandler((data) => {
       this.renderUser(this.state && this.state.connection_id);
     });

     socialid.events.onLogout.addHandler(() => {
       this.state.providers.forEach(provider => {
         socialid.login.disconnect(provider, () => {
           console.log('Disconnected from',provider);
         })
       })
     })
  }

  renderUser(connection_id){
      this.setState({connection_id});
      validateConnection(connection_id);

      getUserProfile(connection_id).then(connection => {
        this.setState({ providers: Object.keys(connection.data.profile.providers), user: connection.data.profile})
      })
  }

  logout(providers) {
    socialid.login.logout(() => {
      Router.push('/')
    })
  }

  render() {
    return (
      <Layout isLogged={this.state && this.state.connection_id ? this.logout : null} providers={this.state && this.state.providers}>
        <Grid.Row>
          <div id="socialid_connect_container"></div>
        </Grid.Row>
        <UserInfo user={this.state && this.state.user} providers={this.state && this.state.providers}/>
      </Layout>
    );
  }
}

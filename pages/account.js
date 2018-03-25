import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import axios from 'axios';
import { Grid, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import UserInfo from '../components/UserInfo';

const api = 'https://api-staging.socialidnow.com';

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
        this.renderUser();
      }
    })
  }

  renderUser(){
     socialid.login.getConnectionStatus(result => {
       this.setState({connection_id: result.data.connection_id});

       axios.get(`${api}/v1/marketing/login/connections/${result.data.connection_id}`, {
         auth: {
              username: '465',
              password: 'f6001a6cfd5f6a23d9546c4b2b5668d334f2320a584f7f7121eb7c85851b1a20'
          },
          crossDomain: true
       })
        .then(res => {
          console.log('validation');
          console.log(res);
        })

     })
  }

  render() {
    return (
      <Layout>
        <UserInfo user={this.state && this.state.user && this.state.user.data}/>
      </Layout>
    );
  }
}

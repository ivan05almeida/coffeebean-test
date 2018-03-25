import React from 'react';
import Link from 'next/link';
import Router from 'next/router';
import { Grid, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';

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
        axios({
          url: `${api}/v1/marketing/login/connections/${result.data.connection_id}`,
          headers: {
            "Accept": 'application/json',
            "Content-Type": 'application/json'
          },
          auth: {
            username: 465,
            password: 'f6001a6cfd5f6a23d9546c4b2b5668d334f2320a584f7f7121eb7c85851b1a20',
          }
        }).then(d=> {console.log(d)})

        // fetch(`${api}/v1/marketing/login/connections/${result.data.connection_id}`,{
        //   method: 'GET',
        //   headers: {
        //     'Content-Type': 'application/json',
        //     'Authorization': 'Basic '+btoa('465:f6001a6cfd5f6a23d9546c4b2b5668d334f2320a584f7f7121eb7c85851b1a20')
        //   }
        // }).then(d => {
        //   console.log(d);
        // })
      }


    })

    socialid.login.renderLoginWidget(
      'login-c6ab6f67',
      { providers: ['facebook', 'gplus', 'twitter', 'linkedin'], theme: 'bricks', showSocialIdLink: true }
    );

    socialid.events.onLoginStart.addHandler((data) => {
      console.log('Website received onLoginStart: ', data);
    });

    socialid.events.onLoginSuccess.addHandler(function(data) {
      console.log(data);
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
          <Button onClick={() => {console.log(this.state);}}/>
        </Grid.Row>
      </Layout>
    );
  }
}

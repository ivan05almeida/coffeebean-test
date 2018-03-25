import React, { Component } from 'react';
import moment from 'moment';
import Router from 'next/router';
import { Grid, Button, Image, Card, Icon } from 'semantic-ui-react';

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    socialid.login.init(465, { loginType: 'event' });
    console.log(socialid.login);
  }

  render() {
    const {user} = this.props;
    console.log(user);
    return  user ? (
      <Card>
        <Image src={user.picture_url} size="medium"/>
        <Card.Content textAlign="left">
          <Card.Header>
            {user.display_name}
            <Button onClick={() => {
              socialid.login.logout(() => {
                Router.push('/');
              });
            }}/>
          </Card.Header>
          <Card.Meta>
            <span className='user_email'>
              {user.verified_email}
            </span>
          </Card.Meta>
          <Card.Description>
            {user.about_me}
          </Card.Description>
        </Card.Content>
        <Card.Content extra  textAlign="left">
          <div>
            <a><Icon name='birthday' /> {moment(user.birthday).format('D/MM/YYYY')}</a>
          </div>
          <div>
            <a><Icon name='map signs' /> {user.current_location}</a>
          </div>
        </Card.Content>
      </Card>
    ) : null;
  }
}

import React, { Component } from 'react';
import moment from 'moment';
import Router from 'next/router';
import { Grid, Button, Image, Card, Icon } from 'semantic-ui-react';

const style = {
  item: {
    margin: '5px',
    fontSize: "1.3em"
  },
  card: {
    margin: '0px 20px',
    display: 'inline-table'
  },
  code: {
    backgroundColor: '#fff',
    width: '45%',
    margin: '0px 20px',
    height: '500px',
    borderRadius: '15px',
    padding: '40px',
    textAlign: 'justify',
    position: 'relative'
  }
};

export default class UserInfo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    socialid.login.init(465, { loginType: 'event' });
    console.log(socialid.login);
  }

  render() {
    const {user, providers} = this.props;
    let picture;
    if(providers){
      providers.every(provider => {
        const pics = user.picture_urls[provider];
          if(pics.large || pics.normal){
            picture = pics.large || pics.normal;
            return false;
          }
          return true;
      });
    }

    const pretty = JSON.stringify(user, null, 2);

    return  user ? (
      <Grid.Row>
        <div style={style.code}>
          <div style={{maxHeight: '100%', overflow:'auto'}}>
            <pre>
              {pretty}
            </pre>
          </div>
        </div>
        <Card style={style.card}>
          <Image src={picture} size="medium"/>
          <Card.Content textAlign="left">
            <Card.Header>
              {user.display_name || user.name.formatted}
            </Card.Header>
            <Card.Meta>
              <div>
                <span className='user_email'>
                  {user.verified_email}
                </span>
              </div>
            </Card.Meta>
            <Card.Description>
              <div>{user.about_me}</div>
            </Card.Description>
          </Card.Content>
          <Card.Content extra  textAlign="left">
            <div style={style.item}>
              <a><Icon name={user.gender === null ? 'male' : user.gender === 'male' ? 'man' : 'woman'} /> {user.gender === null ? 'Não fornecido' : user.gender === 'male' ? 'Homem' : 'Mulher'}</a>
            </div>
            <div style={style.item}>
              <a><Icon name='birthday' /> {user.birthday ? moment(user.birthday).format('D/MM/YYYY') : 'Não fornecido'}</a>
            </div>

            <div style={style.item}>
              <a><Icon name='map signs' /> {user.current_location ? user.current_location : 'Não fornecido'}</a>
            </div>
          </Card.Content>
        </Card>
    </Grid.Row>
    ) : null;
  }
}

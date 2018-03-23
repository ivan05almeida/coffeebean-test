import React from 'react';
import { Grid, Image } from 'semantic-ui-react';

const style = {
  divider: {
    marginTop: '32px',
    marginBottom: '24px',
    display: 'flex'
  },
  logo: {
    width: '3%'
  },
  half_divider: {
    display: 'inline-flex',
    width: '48%',
    height: '1px',
    margin: '12px 0 0 0',
    background: '#d0d0d0'
  }
};

export default class Footer extends React.Component {
  render() {
    return (
      <div style={style.footer}>
        <Grid centered style={style.divider}>
            <div style={style.half_divider}></div>
            <Image src="https://app.socialidnow.com/assets/footer-coffeebean-logo-ad801a7b08d43e581dca91aa0a6b68e3.png" style={style.logo}/>
            <div style={style.half_divider}></div>
        </Grid>
        <center>Copyright © 2015-{(new Date().getFullYear())}<br />ivan05almeida</center>
      </div>
    );
  }
}

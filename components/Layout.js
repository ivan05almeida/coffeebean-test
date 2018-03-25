import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';

import Header from './Header';
import Footer from './Footer';

const style = {
  layout: {
    position: 'absolute',
    display: 'block',
    padding: '0px',
    zIndex: '1',
    width: '100%',
    fontSize: '16px',
    color: 'rgba(0,0,0,.54)',
    fontWeight: 400,
    fontStyle: 'normal',
    top: 0,
  },
  content:{
    padding: '40px',
  }
};

const Layout = props => (
  <div style={style.layout}>
    <Header isLogged={props.isLogged}/>
      <Grid centered style={style.content}>
        {props.children}
      </Grid>
    <Footer />
  </div>
);

export default Layout;

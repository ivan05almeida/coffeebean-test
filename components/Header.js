import React from 'react';
// import Link from 'next/link';
import { Image, Menu, Button } from 'semantic-ui-react';


const style = {
  item: {
    color: '#764710',
    fontWeight: 600,
    marginLeft: '5px',
  },
  menu: {
    borderBottomColor: '#764710',
    borderBottomWidth: '2px',
    borderBottomStyle: 'solid',
    borderRadius: '0px',
    background: "#fff",
    boxShadow: "0 4px 4px rgba(0,0,0,0.3)"
  },
  logout: {
    position: 'absolute',
    right: '0px',
    margin: '10px'
  }
};

export default class Header extends React.Component {

  render() {
      return (
        <div id="nav" className="menu">
          <Menu secondary style={style.menu}>
            <Menu.Item>
              <Image src="https://www.coffeebeantech.com/user/pages/images/coffee-bean-tech-logo.png" size="small" />
            </Menu.Item>
            {this.props.isLogged && <Button style={style.logout} onClick={this.props.isLogged}>Logout</Button>}
          </Menu>
        </div>
      )
  }
}

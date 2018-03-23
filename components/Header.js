import React from 'react';
// import Link from 'next/link';
import { Image, Menu } from 'semantic-ui-react';


const styles = {
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
  }
};

export default class Header extends React.Component {

  render() {
      return (
        <div id="nav" className="menu">
          <Menu secondary style={styles.menu}>
            <Menu.Item>
              <Image src="https://www.coffeebeantech.com/user/pages/images/coffee-bean-tech-logo.png" size="small" />
            </Menu.Item>
          </Menu>
        </div>
      )
  }
}

import React from 'react';
import Link from 'next/link';
import { Form, Button } from 'semantic-ui-react';
import Layout from '../components/Layout';
import Test from '../components/test';

const styles = {
  form: {
    marginLeft: '100px',
    marginRight: '100px',
    marginTop: '20px',
    padding: '10px',
  },
  button: {
    backgroundColor: '#015edb',
    color: 'white'
  }
};

export default class Home extends React.Component {
  render() {
    // const { user } = this.state;
    return (
      <Layout>
        <Test />
      </Layout>
    );
  }
}

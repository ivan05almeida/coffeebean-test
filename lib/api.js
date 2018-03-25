import axios from 'axios';

const api = 'https://api-staging.socialidnow.com';

const auth = {
  "username": 465,
  "password": 'f6001a6cfd5f6a23d9546c4b2b5668d334f2320a584f7f7121eb7c85851b1a20',
};

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
},


  validateConnection(connection_id) => {
    axios({
      url: `${api}/v1/marketing/login/connections/${connection_id}`,
      headers
      auth
    });
  }

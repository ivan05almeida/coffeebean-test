import axios from 'axios';

const api = 'https://api-staging.socialidnow.com/v1/marketing';

const auth = {
  username: 465,
  password: 'f6001a6cfd5f6a23d9546c4b2b5668d334f2320a584f7f7121eb7c85851b1a20',
};

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};


export const validateConnection = connection_id =>
  axios({
    url: `${api}/login/connections/${connection_id}`,
    headers,
    auth
  });

export const getUserProfile = connection_id =>
  axios({
    url: `${api}/login/connections/${connection_id}`,
    params: {
      fields: 'birthday,gender,name,about_me,display_name,picture_urls,providers,emails,educations,verified_email,current_location'
    },
    headers,
    auth
  });

export const loginInfo = token =>
  axios({
    url: `${api}/login/info`,
    headers,
    params: {
      api_secret: auth.password,
      token
    }
  });

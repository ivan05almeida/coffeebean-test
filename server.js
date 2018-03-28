const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const moment = require('moment');
const app = express();

const PORT = process.env.PORT || 3000;
const API = `https://api-staging.socialidnow.com/v1/marketing`;
const API_ID = 465;
const API_SECRET = 'f6001a6cfd5f6a23d9546c4b2b5668d334f2320a584f7f7121eb7c85851b1a20';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const getLoginInfo = (token) =>
  axios({
    url: `${API}/login/info`,
    params: {
      token,
      api_secret: API_SECRET,
      fields: 'birthday,gender,name,about_me,display_name,picture_urls,providers,emails,educations,verified_email,current_location'
    },
    headers
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({secret: 'coffeebean', saveUninitialized: true, resave: true, cookie: { secure: false }}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(function(req, res, next) {
  res.locals.user = req.session.user;
  res.locals.moment = moment;
  next();
});

app.get('/', function (req, res) {
  const { user } = req.session;
  if(user){ res.redirect('/account'); }
  res.render('index');
});

app.get('/account', function (req, res) {
  const { user } = req.session;

  if(!user) {
    res.redirect('/');
  }else{
    res.render('account');
  }
});

app.post('/account', function (req, res) {
  const {token} = req.body;
  if(!token){
    res.redirect('/');
    return;
  }

  getLoginInfo(token).then(result => {
    req.session.user = result.data;
    req.session.save();
    if(!res.locals.user) res.locals.user = req.session.user;
    res.render('account')
  })
});

app.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect('/')
});

app.listen(PORT, function () {
  console.log(`Express server running at port ${PORT}!`);
});

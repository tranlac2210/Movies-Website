const express = require('express');
const bodyParser = require('body-parser');
const moviesRouter = require('./src/routes/movie.route');
const PORT = process.env.PORT || 3001;
const dotenv = require('dotenv');
const app = express();

const { auth, requiresAuth } = require('express-openid-connect'); // express-open-id connect package
const router = require('express').Router();

// code by Bo
// const cors = require('cors');
const moviesController = require('./src/controllers/movie.controller');
//const movieServices = require("./src/services/movie.service");
// app.use(cors());
//end code by Bo

// Find .env file in our project using find-config package
dotenv.config({ path: require('find-config')('.env') });

// Body Parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

const config = {
  authRequired: false,
  auth0Logout: true,
};

// router.get('/', function (req, res, next) {
//   res.render('index', {
//     title: 'login-using-new-method',
//     isAuthenticated: req.oidc.isAuthenticated()
//   });
// });

router.get('/', function (req, res, next) {
  const isAuthenticated = req.oidc.isAuthenticated();
  var message;
  if (isAuthenticated) {
    message = 'You are logged in';
  } else {
    message = 'You are not logged in';
  }
  res.send(message);
});

// app.get('/profile', requiresAuth(), function (req, res, next) {
//   res.render('profile', {
//     userProfile: JSON.stringify(req.oidc.user, null, 2),
//     title: 'Profile page'
//   });
// });

if (
  !config.baseURL &&
  !process.env.BASE_URL &&
  process.env.PORT &&
  process.env.NODE_ENV !== 'production'
) {
  config.baseURL = `http://localhost:${PORT}`;
}

app.use(auth(config));

app.use('/', router);

// app.use(Router)
app.use('/movies', moviesRouter);

// create a GET route
app.get('/movies', (req, res) => {
  res.json({ express: 'EXPRESS BACKEND IS CONNECTED TO REACT' });
});

//code by Bo
// app.get('/key-word', (req, res) => {
//   const { q } = req.query;
//   console.log('q');
//   //res.json(moviesController.getMovieByKeyword(q));

//   // const search = (data1) => {
//   //   return data1.filter((movie) => {
//   //     let title = movie.title || movie.name;
//   //     return title.toLowerCase().includes(q);
//   //   });
//   // };
//   //res.json(search(data1).splice(0,5));
// });
//end code by Bo

// Server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

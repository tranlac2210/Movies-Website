const express = require('express');
const bodyParser = require('body-parser');
const moviesRouter = require('./src/routes/movie.route');
const PORT = process.env.PORT || 3001;
const dotenv = require('dotenv');
const app = express();

const { auth, requiresAuth } = require('express-openid-connect'); // express-open-id connect package
const router = require('express').Router();

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

// Middleware to make the `user` object available for all views
// app.use(function(req,res,next){
//   res.locals.user = req.oidc.user;
//   next();
// });

app.use('/', router);

//Routes
// app.get('/', (req, res) => {
//   res.json({ message: 'Hello from server!' });
// });

// app.use(Router)
app.use('/movies', moviesRouter);

// Server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

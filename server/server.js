const express = require('express');
const bodyParser = require('body-parser');
const moviesRouter = require('./src/routes/movie.route');
const PORT = process.env.PORT || 3001;
const dotenv = require('dotenv');
const app = express();

// Find .env file in our project using find-config package
dotenv.config({ path: require('find-config')('.env') });

// Body Parser
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// Routes
app.get('/', (req, res) => {
  res.json({ message: 'Hello from server!' });
});

// app.use(Router)
app.use('/movies', moviesRouter);

// Server
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

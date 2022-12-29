const express = require('express');
const db = require('../server/src/services/db.service');
const bodyParser = require('body-parser');
const moviesRouter = require('./src/routes/movie.route.lac')
const PORT = process.env.PORT || 3001;

const app = express();

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
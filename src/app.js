'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');

const foodRouter = require('./routes/food.js');

// Prepare the express app
const app = express();

// App Level MW
app.use(cors());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(foodRouter);



module.exports = {
  server: app,
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server Up on ${port}`);
    });
  },
};
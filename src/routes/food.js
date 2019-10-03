'use strict';

const express = require('express');
const foodRouter = express.Router();

const food = [
  { _id: '1', name: 'pizza' },
  { _id: '2', name: 'apple' },
  { _id: '3', name: 'pie' },
  { _id: '4', name: 'cookie' },
];

foodRouter.get('/food', (request, response, next) => {

  return response.status(200).json(food);

});

module.exports = foodRouter;
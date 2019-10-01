const express = require('express');
const api = express.Router();
const { getAll } = require('./../controllers/news');

api.get('/news', getAll);

module.exports = api;

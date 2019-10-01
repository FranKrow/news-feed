const express = require('express');
const app = express();
const path = require('path');

const newsRoutes = require('./routes/news');

app.use(express.static(path.join(__dirname, 'public')));

// ROUTES
app.use(newsRoutes);
module.exports = app;

const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
  Product.create({
    title: 'Lampada',
    description: 'Lampada fluorescente',
    url: 'https://teste.com/lampada'
  });

  return res.send('Hello!');
});

module.exports = routes;
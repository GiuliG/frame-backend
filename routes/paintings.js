const express = require('express');
const router = express.Router();

const Painting = require('../models/painting');

const { isLoggedIn } = require('../helpers/middlewares');

router.get('/', (req, res, next) => {

  Painting.find({})
    .then((paintingList) => {
      res.status(200);
      res.json(paintingList);
    })
    .catch(next)
})

module.exports = router;
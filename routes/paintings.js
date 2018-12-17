const express = require('express');
const router = express.Router();

const Painting = require('../models/painting');
const User = require('../models/user');

const { isLoggedIn } = require('../helpers/middlewares');

router.get('/', (req, res, next) => {

  Painting.find({})
    .then((paintingList) => {
      res.status(200);
      res.json(paintingList);
    })
    .catch(next)
})

router.put('/favs/:id', (req, res, next) => {
  const paintingId = req.params.id;

  if (req.session.currentUser) {
    
    User.findByIdAndUpdate(req.session.currentUser._id, {$push: {favs: paintingId}})
    .then((painting) => {
      res.status(200);
      res.json(painting);
    })
    .catch(next)
  }
})

module.exports = router;
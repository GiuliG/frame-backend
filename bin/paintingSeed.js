'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
const Painting = require('../models/painting');

mongoose.connect(process.env.MONGODB_URI, {
  keepAlive: true,
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE
});

const paintings = [
  {
    title: 'Young Woman with a Water Pitcher',
    artist: 'Johannes Vermeer',
    description: 'Standing at an open window, a woman begins her day with ablutions from a gilt-silver pitcher and basin, with linen coverings protecting her dress and hair. The first work by Vermeer to enter an American collection, this painting embodies the artist’s interest in domestic themes, giving an almost voyeuristic glimpse into the private life of a woman before she presents her public face to the world.',
    date: 'ca. 1662',
    department: 'European Paintings',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/437881/1476893/main-image',
    audio: 'https://images.metmuseum.org/CRDImages/ep/audio/5TH-5182-ENG-437881-1.mp3'
  },
  {
    title: '',
    artist: '',
    description: '',
    date: '',
    department: '',
    image: '',
    audio: ''
  },
];

User.find().sort({ username: 1 })
  .then(users => {
    users.forEach(user => {
      usersWithIds.push(user._id);
    });
    console.log(usersWithIds);
    musicsessions[0].creatorId = usersWithIds[0];
    musicsessions[1].creatorId = usersWithIds[3];
    musicsessions[2].creatorId = usersWithIds[1];
    MusicSession.create(musicsessions)
      .then(() => {
        console.log('Musicsessions was created');
        mongoose.connection.close();
      })
      .catch(error => {
        console.error(error);
      });
  })
  .catch();

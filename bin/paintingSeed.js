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
    country: 'Netherlands',
    department: 'European Paintings',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/437881/1476893/main-image',
    audio: 'https://images.metmuseum.org/CRDImages/ep/audio/5TH-5182-ENG-437881-1.mp3'
  },
  {
    title: 'The Dance Class',
    artist: 'Edgar Degas',
    description: 'This work and its variant in the Musée d\'Orsay, Paris, represent the most ambitious paintings Degas devoted to the theme of the dance. Some twenty-four women, ballerinas and their mothers, wait while a dancer executes an "attitude" for her examination. Jules Perrot, a famous ballet master, conducts the class. The imaginary scene is set in a rehearsal room in the old Paris Opéra, which had recently burned to the ground. On the wall beside the mirror, a poster for Rossini’s Guillaume Tell pays tribute to the singer Jean-Baptiste Faure, who commissioned the picture and lent it to the 1876 Impressionist exhibition.',
    date: '1874',
    country: 'France',
    department: 'European Paintings',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/438817/796418/main-image',
    audio: 'https://images.metmuseum.org/CRDImages/ep/audio/5TH-6005-ENG-438817-1.mp3'
  },
  {
    title: 'Self-Portrait with a Straw Hat',
    artist: 'Vincent van Gogh',
    description: 'This picture, which shows the artist\'s awareness of Neo-Impressionist technique and color theory, is one of several that are painted on the reverse of an earlier peasant study.',
    date: '1887',
    country: 'Netherlands',
    department: 'European Paintings',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/436532/1671316/main-image',
    audio: 'https://images.metmuseum.org/CRDImages/ep/audio/5TH-6015-ENG-436532-1.mp3'
  },
  {
    title: 'Mäda Primavesi',
    artist: 'Gustav Klimt',
    description: 'Klimt made numerous preliminary sketches for this portrait, experimenting with different poses, outfits, and backgrounds before deciding to show Mäda standing tall in a specially-made dress amid a profusion of springlike patterns.',
    date: '1912–13',
    country: 'Austria',
    department: 'European Paintings',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/436819/801225/restricted',
    audio: 'https://images.metmuseum.org/CRDImages/ep/audio/5TH-6017-ENG-436819-1.mp3'
  },
  {
    title: 'The Love Letter',
    artist: 'Jean Honoré Fragonard',
    description: 'Here, over a brown tone, Fragonard shapes the composition in darker shades of brown, drawing and modeling with the tip of the brush and with strokes of varying thickness.',
    date: 'early 1770s',
    country: 'France',
    department: 'European Paintings',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/436322/1661166/main-image',
    audio: 'https://images.metmuseum.org/CRDImages/ep/audio/5TH-2215-ENG-436322-1.mp3'
  },
  {
    title: 'Stepping Out',
    artist: 'Roy Lichtenstein',
    description: '"Stepping Out" is marked by Lichtenstein\'s customary restriction to the primary colors and to black and white; by his thick black outlines; and by the absence of any shading except that provided by the dots imitating those used to print comic strips.',
    date: '1978',
    country: 'United States',
    department: 'Modern and Contemporary Art',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/482133/1560914/restricted',
    audio: 'https://images.metmuseum.org/CRDImages/ma/audio/5TH-2035-ENG-482133-1.mp3'
  },
  {
    title: 'I Saw the Figure 5 in Gold',
    artist: 'Charles Demuth',
    description: 'Though not a physical likeness, Demuth created this portrait of his friend, the poet and physician William Carlos Williams, using imagery from Williams’s poem "The Great Figure," which evokes the sights and sounds of a fire engine speeding down the street.',
    date: '1928',
    country: 'United States',
    department: 'Modern and Contemporary Art',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/488315/1011132/restricted',
    audio: 'https://images.metmuseum.org/CRDImages/ma/audio/5TH-1955-ENG-488315-1.mp3'
  },
  {
    title: 'Cow\'s Skull: Red, White, and Blue',
    artist: 'Georgia O\'Keeffe',
    description: 'To O’Keeffe, the skull represented the desert’s enduring beauty and the strength of the American spirit, which is alluded to in the striped background.',
    date: '1931',
    country: 'United States',
    department: 'Modern and Contemporary Art',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/488694/1010449/restricted',
    audio: 'https://images.metmuseum.org/CRDImages/ma/audio/5TH-1827-ENG-488694-1.mp3'
  },
  {
    title: 'Brooklyn Bridge',
    artist: 'John Marin',
    description: '"Brooklyn Bridge," dating about 1912, is of the period of Marin\'s first truly personal expression. Brightly, wittily, it communicates his sense of the excitement of urban life.',
    date: 'ca. 1912',
    country: 'United States',
    department: 'Modern and Contemporary Art',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/488326/1010653/restricted',
    audio: 'https://images.metmuseum.org/CRDImages/ma/audio/5TH-2008-ENG-488326-1.mp3'
  },
  {
    title: 'Tables for Ladies',
    artist: 'Edward Hopper',
    description: 'The painting’s title alludes to a recent social innovation in which establishments advertised "tables for ladies" in order to welcome their newly mobile female customers, who, if seen dining alone in public previously, were assumed to be prostitutes.',
    date: '1930',
    country: 'United States',
    department: 'Modern and Contemporary Art',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/487695/1004972/main-image',
    audio: 'https://images.metmuseum.org/CRDImages/ma/audio/5TH-1960-ENG-487695-1.mp3'
  }
];

Painting.create(paintings)
  .then(() => {
    console.log('Paintings was created');
    mongoose.connection.close();
  })
  .catch(error => {
    console.error(error);
  });
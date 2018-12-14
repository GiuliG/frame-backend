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
    title: 'Portrait of Jnanatapa Attended by Lamas and Mahasiddhas',
    artist: 'Unknown',
    description: 'This portrait was created for Riwoche monastery in eastern Tibet, a branch of Taklung monastery. The central figure and the assembled abbots are not directly named on the painting. Nonetheless, two inscriptions allow a lineage identification: the epithet Jnanatapa (“heat of wisdom”) appears on the painting’s veil, a name denoting a famous Indian mahasiddha, the spiritual fathers of Tantric Buddhism. The second is the identity of presiding deity above the central figure, named as Avagarbha. The importance of these two clues is revealed by their presence in the official history of Taklung monastery, which tells that the first abbot of Riwoche monastery was an incarnation of “the peerless mahasiddha Jnanatapa” and that his Tantric teacher was Avagarbha, a Bengal siddha. Hence, this portrait is intended to invoke the spiritual lineage of Taklung and Riwoche monasteries through the person of mahasiddha Jnanatapa.',
    date: 'ca. 1350',
    country: 'China',
    department: 'Asian Art',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/37801/1839501/main-image',
    audio: 'https://images.metmuseum.org/CRDImages/as/audio/5TH-7986-ENG-37801-1.mp3'
  },
  {
    title: 'Rough Waves',
    artist: 'Ogata Kōrin',
    description: 'Many artists and poets of the East and West alike have striven to capture the transitory and fleeting image of swelling waves. Kōrin’s rendition—one of Japan’s most striking representations of this amorphous, ungraspable form—has a strangely menacing feel, due no doubt to the long, tentacle-like fingers of foam, punctured here and there by openings. Outlined in ink using the ancient Chinese technique of drawing with two brushes held together in one hand, the clawlike waves are peculiarly reminiscent of dragons’ talons. The immediate inspiration for the screen may have been images by Sesson Shūkei (ca. 1504–ca. 1589), whose extant works include a number of dynamic and mysterious renderings of waves.',
    date: 'ca. 1704–9',
    country: 'China',
    department: 'Asian Art',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/44918/148412/main-image',
    audio: 'https://images.metmuseum.org/CRDImages/as/audio/5TH-7702-ENG-44918-1.mp3'
  },
  {
    title: 'The Sixteen Luohans',
    artist: 'Wu Bin ',
    description: 'In the Chinese popular imagination, mendicant monks, conjurers, and mysterious hermits were often thought to be disguised “living luohans,” or Buddhist holy men capable of producing miracles. When government corruption and ineptitude imperiled social order, as it did in late Ming times, such superstitious messianic beliefs became more widespread. Here, in one of his earliest extant works, Wu Bin embraced an archaic figure style and followed the tradition of depicting luohans as fantastic eccentrics whose grotesque features belie their inner spiritual nature. Wu’s humorous painting may have had a serious message: holiness can be concealed within an outwardly incongruous form.',
    date: 'dated 1591',
    country: 'China',
    department: 'Asian Art',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/48948/148185/main-image',
    audio: 'https://images.metmuseum.org/CRDImages/as/audio/5TH-7318-ENG-48948-1.mp3'
  },
  {
    title: 'Landscapes with Poems',
    artist: 'Gong Xian',
    description: 'Remaining loyal to the vanquished Ming dynasty, the hermit Gong Xian came to terms with himself as an yimin, or “leftover subject,” under the Qing dynasty (1644–1911). In this leaf, from an album in which he compared his favorite haunts in and around the former Ming capital of Nanjing with the abodes of the immortals, Gong complemented his image of a reclusive dwelling with a poem that contrasts the ability of orchids, symbols of virtuous men, to endure the cold winter, while brambles — lowly men — are used as firewood. The artist perfected a technique of ink wash and dotting that enabled him to achieve both density and translucency in his paintings.',
    date: '1688',
    country: 'China',
    department: 'Asian Art',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/36131/98913/main-image',
    audio: 'https://images.metmuseum.org/CRDImages/as/audio/5TH-7307-ENG-36131-1.mp3'
  },
  {
    title: 'Wang Xizhi watching geese',
    artist: 'Qian Xuan',
    description: 'After the fall of Hangzhou, the Southern Song capital, in 1276, the artist Qian Xuan chose to live as an yimin, a “leftover subject” of the dynasty. Painted in his deliberately primitive “blue-and-green” style, this handscroll illustrates the story of Wang Xizhi (  303 – 361), the calligraphy master of legendary fame and a practitioner of Daoist alchemy, who was said to derive inspiration from natural forms such as the graceful neck movements of geese. In creating a dreamlike evocation of antiquity, the artist prevented a realistic reading of his picture space as a way of asserting the disjuncture he felt after the fall of the Song royal house.',
    date: 'ca. 1295',
    country: 'China',
    department: 'Asian Art',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/40081/198958/main-image',
    audio: 'https://images.metmuseum.org/CRDImages/as/audio/5TH-7460-ENG-40081-1.mp3'
  },
  {
    title: 'The American School',
    artist: 'Matthew Pratt',
    description: 'The picture depicts a scene in the London studio of Benjamin West, who is generally agreed to be the figure standing at the left. Based on comparisons to self-portraits, Pratt is the man at the easel, an accomplished portrait painter. The identities of the other artists represented in the picture remain uncertain, but they are younger and they draw rather than paint. The composition explores the academic tradition as carried out among Americans in late-eighteenth century London.',
    date: '1765',
    country: 'US',
    department: 'The American Wing',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/11797/33062/main-image',
    audio: 'https://images.metmuseum.org/CRDImages/ad/audio/5TH-4326-ENG-11797-1.mp3'
  },
  {
    title: 'Northeaster',
    artist: 'Winslow Homer',
    description: 'On the Maine coast, a “nor’easter” is a storm of exceptional violence and duration. When Homer first showed this canvas in 1895, it included two men in foul-weather gear crouching on the rocks below a smaller column of spray. Even though the painting was well received and purchased by a leading collector of American art—George Hearn, who later donated it to the Metropolitan Museum—Homer reworked it to powerful effect.',
    date: '1895',
    country: 'US',
    department: 'The American Wing',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/11130/34226/main-image',
    audio: 'https://images.metmuseum.org/CRDImages/ad/audio/5TH-4384-ENG-11130-1.mp3'
  },
  {
    title: 'Madame X (Madame Pierre Gautreau)',
    artist: 'John Singer Sargent',
    description: 'Madame Pierre Gautreau (the Louisiana-born Virginie Amélie Avegno; 1859–1915) was known in Paris for her artful appearance. Sargent hoped to enhance his reputation by painting and exhibiting her portrait. Working without a commission but with his sitter’s complicity, he emphasized her daring personal style, showing the right strap of her gown slipping from her shoulder. At the Salon of 1884, the portrait received more ridicule than praise. Sargent repainted the shoulder strap and kept the work for over thirty years. When, eventually, he sold it to the Metropolitan, he commented, “I suppose it is the best thing I have done,” but asked that the Museum disguise the sitter’s name.',
    date: '1883–84',
    country: 'US',
    department: 'The American Wing',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/12127/33591/restricted',
    audio: 'https://images.metmuseum.org/CRDImages/ad/audio/5TH-4368-ENG-12127-1.mp3'
  },
  {
    title: 'Celia Thaxter\'s Garden, Isles of Shoals, Maine',
    artist: 'Childe Hassam',
    description: 'This painting is one of the finest of a series of works that Hassam made during summers in the 1890s on Appledore Island, one of the Isles of Shoals, which lie ten miles east of Portsmouth, New Hampshire. This series portrays the sumptuous wildflower garden cultivated by his friend, poet Celia Thaxter, a garden that provided a marvelous contrast to the rugged terrain of the island itself. In this painting, vibrant red poppies entangled in lush green foliage introduce a view of bleached Babb\'s Rock. The painting shows Hassam at the height of his creativity as an American Impressionist.',
    date: '1890',
    country: 'US',
    department: 'The American Wing',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/14930/32440/restricted',
    audio: 'https://images.metmuseum.org/CRDImages/ad/audio/5TH-4380-ENG-14930-1.mp3'
  },
  {
    title: 'The Beeches',
    artist: 'Asher Brown Durand',
    description: 'This work, featuring meticulously rendered beech and basswood trees, was painted for the New York collector Abraham M. Cozzens, then a member of the executive committee of the American Art-Union. The painting illustrates a new trend in the work of the Hudson River School, with its diminished emphasis on sublime drama and increased interest in naturalism and in the creation of a tranquil mood. Durand was influenced by the work of the English landscape painter John Constable, whose vertical formats and truth to nature he absorbed while visiting England in 1840. "The Beeches" resembles Constable\'s "The Cornfield" (National Gallery, London). This work is also the first one Durand based on a plein-air oil sketch, a technique the artist increasingly relied upon to reproduce accurately conditions of light and shade.',
    date: '1845',
    country: 'US',
    department: 'The American Wing',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/14930/32440/restricted',
    audio: ''
  },
  {
    title: 'Lady at the Tea Table',
    artist: 'Mary Cassatt',
    description: 'This work shows Mary Dickinson Riddle, Cassatt’s mother’s first cousin, presiding at tea, a daily ritual among upper-middle-class women on both sides of the Atlantic. Mrs. Riddle’s hand rests on the handle of a teapot, part of a gilded blue-and-white Canton porcelain service that her daughter had presented to the artist’s family. Painted in response to the gift, the portrait demonstrates Cassatt’s mastery of Impressionism in its sketchlike finish, the casual handling of anatomy, and the sitter’s indifference to the viewer. As Mrs. Riddle’s daughter disliked the portrait, Cassatt kept it until Louisine Havemeyer persuaded her to give it to The Metropolitan Museum of Art.',
    date: '1883–85',
    country: 'US',
    department: 'The American Wing',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/10391/33531/restricted',
    audio: 'https://images.metmuseum.org/CRDImages/ad/audio/5TH-4374-ENG-10391-1.mp3'
  },
  {
    title: 'The Contest for the Bouquet',
    artist: 'Seymour Joseph Guy',
    description: 'Guy, born and trained in England, settled in 1854 in New York. Typical of his command of lucid form is this charming "conversation piece" (a portrait with narrative elements) commissioned by Robert Gordon in 1866. Three of the Gordon children have finished breakfast and appear to vie for a small corsage before setting off for school. Gordon, a founding trustee of The Metropolitan Museum of Art, collected American paintings, some of which he displayed in the dining room of his home at 7 West 33rd Street, depicted here. The room was decorated in the up-to-date Renaissance Revival style seen in our Gallery 736.',
    date: '1866',
    country: 'US',
    department: 'The American Wing',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/14472/32699/main-image',
    audio: ''
  },
  {
    title: 'Francis Brinley',
    artist: 'John Smibert',
    description: 'Francis Brinley (1690–1765) was born in England but moved to Newport, Rhode Island in 1710 at the request of his grandfather. He eventually settled in Boston, where he married Deborah Lyde, granddaughter of Nathaniel Byfield (24.109.87). In 1719, he inherited a substantial tract of land in Roxbury upon which he built the elaborate Datchet House residence. Smibert painted this portrait in Boston in May of 1729. The background, an early instance of landscape in American painting, represents a view of Boston from Brinley\'s country home. Smibert also painted a portrait of Brinley\'s wife (62.79.2).',
    date: '1729',
    country: 'US',
    department: 'The American Wing',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/12600/33056/main-image',
    audio: 'https://images.metmuseum.org/CRDImages/ad/audio/5TH-4324-ENG-12600-1.mp3'
  },
  {
    title: 'George Washington',
    artist: 'Gilbert Stuart',
    description: 'This portrait of President Washington, called the Gibbs-Channing-Avery portrait, is one of eighteen similar works known as the Vaughan group. The first of this type, presumably painted from life and then copied in all the others, originally belonged to Samuel Vaughan, a London merchant living in Philadelphia and a close friend of Washington. This original portrait by Stuart, painted in 1795 according to Rembrandt Peale, was subsequently acquired by Joseph Harrison of Philadelphia. While in Harrison\'s collection, Rembrandt Peale copied it many times. The version now in the Metropolitan Museum of Art, considered to be one of the earliest and best replicas, was sold to Stuart\'s close friend, Colonel George Gibbs, and subsequently descended in the Gibbs family.',
    date: 'begun 1795',
    country: 'US',
    department: 'The American Wing',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/12600/33056/main-image',
    audio: ''
  },
  {
    title: 'Central Park, Winter',
    artist: 'William James Glackens',
    description: 'Philadelphia-born and educated William Glackens moved in 1895 to New York, where he continued to work as a successful newspaper and magazine illustrator. By 1904 he had given up illustration for painting. Yet his talent for quick characterization, gesture, and composition continued to influence his art, as seen in this incident-filled scene of a snowy day in Central Park. Like his Ashcan colleague John Sloan, Glackens became an important advocate for progressive painting in the years after the 1913 Armory Show, heading artist organizations and shaping the important modernist collection of his childhood friend Albert C. Barnes.',
    date: 'ca. 1905',
    country: 'US',
    department: 'The American Wing',
    image: 'https://collectionapi.metmuseum.org/api/collection/v1/iiif/19261/32486/restricted',
    audio: 'https://images.metmuseum.org/CRDImages/ad/audio/5TH-4592-ENG-19261-1.mp3'
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

const express = require('express');
const router = express.Router();
const albumController = require('./controllers/albumController');
const artistController = require('./controllers/artistController');
const songController = require('./controllers/songController');

// Albums 
router.route('/albums')
  .get(albumController.getAll)
  .post(albumController.createAlbum);

router.route('/albums/:id')
  .get(albumController.getById)
  .delete(albumController.deleteById)
  .patch(albumController.updateAlbum);

// Artists
router.route('/artists')
  .get(artistController.getAll)
  .post(artistController.createArtist);

router.route('/artists/:id')
  .get(artistController.getById)
  .delete(artistController.deleteById)
  .patch(artistController.updateArtist);

// Songs
router.route('/songs')
  .get(songController.getAll)
  .post(songController.createSong);

router.route('/songs/:id')
  .get(songController.getById)
  .delete(songController.deleteById)
  .patch(songController.updateSong);

module.exports = router;

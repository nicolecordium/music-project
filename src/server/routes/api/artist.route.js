var express = require('express')
var router = express.Router()
var artistController = require('../../controllers/artist.controller');

router.get('/:artistId/stats', artistController.getArtistEvents)

module.exports = router;

const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  console.log('inside genre GET');
  const movieID = req.params.id;
  const genreQuery =
  `
  SELECT genres.name 
  FROM genres
  JOIN movies_genres ON genres.id = movies_genres.genre_id
  JOIN movies ON movies_genres.movie_id = movies.id
  WHERE movies.id = 1;
  `
  res.sendStatus(500)
});

module.exports = router;
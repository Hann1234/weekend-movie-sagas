const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/:id', (req, res) => {
  // Add query to get all genres
  console.log('inside genre GET', req.params.id);
  const movieID = req.params.id;
  const genreQuery =
  `
  SELECT genres.name, genres.id 
  FROM genres
  JOIN movies_genres ON genres.id = movies_genres.genre_id
  JOIN movies ON movies_genres.movie_id = movies.id
  WHERE movies.id = $1;
  `;
  pool.query(genreQuery, [movieID])
  .then(result => {
    res.send(result.rows);
  })
  .catch(err => {
    console.log('Error getting genres', err);
    res.sendStatus(500);
  });
});


module.exports = router;
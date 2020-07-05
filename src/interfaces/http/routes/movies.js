import express from 'express'
import Movie from '../../../infrastructure/database/models/movie'

const router = express.Router()

router.post('/', async (req, res) => {
  const movie = new Movie(req.body)

  try {
    await movie.save()
    res.status(201).send(movie)
  } catch (error) {
    res.status(500).send()
  }
})

router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find()
    res.send(movies)
  } catch (error) {
    res.status(500).send()
  }
})

export default router
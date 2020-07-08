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

router.get('/:filter', async (req, res) => {
  try {
    const { filter } = req.params
    const movies = await Movie.find({ censorshipLevel: filter })
    res.status(200).send(movies)
  } catch (error) {
    res.status(500).send()
  }
})

export default router
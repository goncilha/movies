import express from 'express'
import { save, getByCensorship, getAll } from '../../../infrastructure/repositories/movie'

const router = express.Router()

router.post('/', async (req, res) => {
  try {
    const movie = await save(req.body)
    res.status(201).send(movie)
  } catch (error) {
    res.status(500).send()
  }
})

router.get('/', async (req, res) => {
  try {
    const movies = await getAll()
    res.status(200).send(movies)
  } catch (error) {
    res.status(500).send()
  }
})

router.get('/:filter', async (req, res) => {
  try {
    const movies = await getByCensorship(req.params)
    res.status(200).send(movies)
  } catch (error) {
    res.status(500).send()
  }
})

export default router
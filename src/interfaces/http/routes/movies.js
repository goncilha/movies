import express from 'express'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const movies = [{name: "Harry Potter e o Prisioneiro de Askaban"}]
    res.send(movies)
  } catch (e) {
    res.status(500).send()
  }
})

export default router
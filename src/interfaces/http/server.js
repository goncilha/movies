import express from 'express'
import cors from 'cors'

const server = ({ port, router }) => {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(router)

  app.listen(port, () => {
    console.log(`server up on port ${port}`)
  })
}

export default server
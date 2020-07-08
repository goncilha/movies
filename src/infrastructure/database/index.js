import mongoose from 'mongoose'

const database = () => {
  mongoose.connect('mongodb://movies-db:27017/test', {
    useNewUrlParser: true,
    useCreateIndex: true
  })

  const connectWithRetry = () => {
    mongoose.connect("mongodb://movies-db:27017/test", {useNewUrlParser: true, useCreateIndex: true}).then(()=>{
      console.log('database is connected')
    }).catch(err=>{
      console.log('database connection unsuccessful, retry after 5 seconds.')
      setTimeout(connectWithRetry, 5000)
    })
  }

  connectWithRetry()
}

export default database
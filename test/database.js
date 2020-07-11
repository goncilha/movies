import mongoose from 'mongoose'
import { MongoMemoryServer } from 'mongodb-memory-server'

const mongo = new MongoMemoryServer();

export const connect = async () => {
  const uri = await mongo.getConnectionString()

  const options = {
    useNewUrlParser: true
  }

  await mongoose.connect(uri, options)
}

export const close = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongo.stop()
}

export const clear = async () => {
  const collections = mongoose.connection.collections

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany()
  }
}
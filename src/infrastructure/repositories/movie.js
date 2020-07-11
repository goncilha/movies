import mongoose from 'mongoose'
import Movie from '../database/models/movie'

export const save = async (data) => {
  const movie = new Movie(data)
  await movie.save()
  return movie
}

export const getAll = async () => {
  const movies = await Movie.find()
  return movies
}

export const getByCensorship = async (params) => {
  const { filter } = params
  const movies = await Movie.find({ censorshipLevel: filter })
  return movies
}
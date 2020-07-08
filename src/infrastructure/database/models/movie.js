import mongoose from 'mongoose'

const arraySize = (data) => {
  return data.length <= 10
}

const Movie = mongoose.model('Movie', {
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  releaseDate: {
    type: Date,
		required: true
  },
  censorshipLevel: {
    type: String,
    enum: ['CENSURADO', 'SEM_CENSURA'],
    required: true
  },
  direction: {
    type: String,
    required: true
  },
  actors: {
    type: Array,
    required: true,
    validate: [arraySize, 'Only 10 actors are permited']
  }
})

export default Movie
import * as database from './database'
import { save, getAll, getByCensorship } from '../src/infrastructure/repositories/movie'

const movieData = [
  {
    actors: [
        "Robert De Niro",
        "Marlon Brando",
        "Andy Garcia",
        "Al Pacino"
    ],
    name: "O Poderoso Chefão",
    releaseDate: "2010-11-19T00:00:00.000Z",
    censorshipLevel: "CENSURADO",
    direction: "Francis Ford Coppola"
  }
]

beforeAll(async () => await database.connect());
afterAll(async () => {
  await database.clear()
  await database.close()
});

describe('movies', () => {
  it('that movie is created', async () => {
    const movie = await save(movieData[0])
    expect(movie).toHaveProperty('_id')
  })

  it('that all movies is returned', async () => {
    const movies = await getAll()
    expect(movies.length).toEqual(1)
  })

  it('that movie is filtered', async () => {
    const movie = await getByCensorship({ filter: 'CENSURADO' })
    expect(movie.length).toEqual(1)
  })
})
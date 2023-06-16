import express from 'express'
import { MoviesController } from '../controllers/MoviesController.js'
import { validId } from '../middlewares/global.js'

const movieRouter = express.Router()
const moviesController = new MoviesController()

movieRouter.get('/', moviesController.getMovies)
movieRouter.get('/:id', validId, moviesController.getMovieById)
movieRouter.post('/', moviesController.createMovie)
movieRouter.patch('/:id', validId, moviesController.updateMovie)
movieRouter.delete('/:id', validId, moviesController.deleteMovie)

export default movieRouter
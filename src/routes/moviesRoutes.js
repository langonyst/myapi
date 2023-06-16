import express from 'express'
import { MoviesController } from '../controllers/MoviesController.js'

const movieRouter = express.Router()
const moviesController = new MoviesController()

movieRouter.get('/', moviesController.getMovies)

export default movieRouter
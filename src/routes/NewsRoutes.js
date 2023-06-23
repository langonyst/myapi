import express from 'express'
import { NewsController } from '../controllers/NewsController.js'
import { validId } from '../middlewares/global.js'

const newsRouter = express.Router()
const newsController = new NewsController()

newsRouter.get('/', newsController.getNews)
newsRouter.get('/:id', validId, newsController.getNewsById)
newsRouter.post('/search', newsController.searchByTitle)
newsRouter.post('/', newsController.createNews)
newsRouter.patch('/:id', validId, newsController.updateNews)
newsRouter.delete('/:id', validId, newsController.deleteNews)

export default newsRouter
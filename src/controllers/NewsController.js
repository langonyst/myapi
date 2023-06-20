import { NewsModel } from "../models/NewsModel.js";

const newsModel = new NewsModel()

export class NewsController{
    async getNews(req, res){
        try{
            const news = await newsModel.listNews()
            res.json(news)
        }catch(error){
            console.error('Error getting news: ', error)
            throw error
        }
    }

    async createNews(req, res){
        try{
            const { title, body, author } = req.body

            if(!title || !body || !author){
                return res.status(400).send({
                    message: 'Submit all fields to create a News!'
                })
            }

            await newsModel.createNews({
                title,
                body,
                author
            })

            res.status(201).send({
                message: 'News created successfully'
            })
        }catch(error){
            console.error('Error creating a news: ', error)
            throw error
        }
    }

    async getNewsById(req, res){
        try{
            const { id } = req.params
            const news = await newsModel.findNewsById(id)
            res.json(news)
        }catch(error){
            console.error('Error getting a news: ', error)
            throw error
        }
    }

    async updateNews(req, res){
        try{
            const { id } = req.params
            const { title, body, author } = req.body

            if(!title && !body && !author){
                return res.status(400).send({
                    message: 'Submit at least one field to update the news!'
                })
            }

            const docNews = {
                title,
                body,
                author
            }

            const news = await newsModel.updateNews(id, docNews)
            res.json({
                _id: id,
                message: 'Updated Successfully'
            })
        }catch(error){
            console.error('Error updating a news: ', error)
            throw error
        }
    }

    async deleteNews(req, res){
        try{
            const { id } = req.params
            const news = await newsModel.deleteNews(id)
            res.json({
                _id: id,
                message: 'News deleted successfully'
            })
        }catch(error){
            console.error('Error deleting a news: ', error)
            throw error
        }
    }
}
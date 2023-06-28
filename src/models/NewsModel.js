import { ObjectId } from "mongodb";
import connectToMongo from "../db/dbConnect.js";

export class NewsModel{
    async listNews(){
        try{
            const db = await connectToMongo()
            const news = await db.collection('news').find().limit(15).toArray()
            return news;
        }catch(error){
            console.error('Error listing news: ', error)
            throw error
        }
    }

    async findNewsById(id){
        try{
            const db = await connectToMongo()
            const idNews = new ObjectId(id)
            const news = await db.collection('news').findOne({_id: idNews})
            return news
        }catch(error){
            console.error('Error find news: ', error)
            throw error
        }
    }

    async findNewsByTitle(titleFragment) {
        try {
            const db = await connectToMongo();
            const query = { title: { $regex: titleFragment, $options: 'i' } };
            const options = {
                projection: { _id: 1, title: 1, author: 1 }
            };
            const news = await db.collection('news').find(query, options).toArray();
    
            return news;
        } catch (error) {
            console.error('Error finding by title', error);
            throw error;
        }
    }

    async createNews(doc){
        try{
            const db = await connectToMongo()
            const news = await db.collection('news').insertOne(doc)
            return news
        }catch(error){
            console.error('Erro creating a news: ', error)
            throw error
        }
    }

    async updateNews(id, doc){
        try{
            const db = await connectToMongo()
            const idNews = new ObjectId(id)
            const news = await db.collection('news').updateOne({_id: idNews}, {$set: doc})
            return news
        }catch(error){
            console.error('Error updating the news: ', error)
            throw error
        }
    }

    async deleteNews(id){
        try{
            const db = await connectToMongo()
            const idNews = new ObjectId(id)
            const news = await db.collection('news').deleteOne({_id: idNews})
            return true
        }catch(error){
            console.error('Error deleting a news: ', error)
            throw error
        }
    }
}
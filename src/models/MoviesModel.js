import { ObjectId } from "mongodb";
import connectToMongo from "../db/dbConnect.js";

export class MoviesModel {
    async listMovies() {
        try{
            const db = await connectToMongo()
            const movies = await db.collection('movies').find().sort({_id: -1}).limit(15).toArray()
            return movies;
        }catch(error){
            console.error('Error listing movies: ', error)
            throw error;
        }
    }

    async findMovieById(id) {
        try{
            const db = await connectToMongo()
            const idMovie = new ObjectId(id)
            const movie = await db.collection('movies').findOne({_id: idMovie})
            return movie
        }catch(error){
            console.error('Error find movie: ', error)
            throw error;
        }
    }

    async createMovie(doc){
        try{
            const db = await connectToMongo()
            const movie = await db.collection('movies').insertOne(doc)
            return movie
        }catch(error){
            console.error('Error creating a movie: ', error)
            throw error
        }
    }

    async updateMovie(id, doc){
        try{
            const db = await connectToMongo()
            const idMovie = new ObjectId(id)
            const movie = await db.collection('movies').updateOne({_id: idMovie}, {$set: doc})
            return movie
        }catch(error){
            console.error('Error updating the movie: ', error)
            throw error
        }
    }

    async deleteMovie(id){
        try{
            const db = await connectToMongo()
            const idMovie = new ObjectId(id)
            await db.collection('movies').deleteOne({_id: idMovie})
            return true
        }catch(error){
            console.error('Error deleting a movie: ', error)
            throw error
        }
    }
}
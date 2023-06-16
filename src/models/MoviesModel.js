import connectToMongo from "../db/dbConnect.js";

export class MoviesModel {
    async listMovies() {
        try{
            const db = await connectToMongo()
            const movies = await db.collection('movies').find().limit(15).toArray()
            return movies;
        }catch(error){
            console.error('Error listing movies: ', error)
            throw error;
        }
    }
}